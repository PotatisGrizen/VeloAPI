import { Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../utils/typeorm/entities/User.entity';
import { Repository } from 'typeorm';
import { UpdateUserDetails, UserDetails } from '../../utils/types';
import { Request } from 'express';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  createUser(details: UserDetails) {
    const newUser = this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }

  findUser(discordId: string) {
    return this.userRepository.findOne({ discordId });
  }

  findStaffs() {
    return this.userRepository.find({ where: { staff: true } });
  }

  updateUser(user: User, details: UpdateUserDetails): Promise<User> {
    return this.userRepository.save({
      ...user,
      ...details,
    });
  }

  async getUsers(req: Request) {
    const builder = this.userRepository.createQueryBuilder();

    const { staff, username } = req.query;

    if (staff === 'true') {
      builder.andWhere('user.staff = :staff', { staff: true });
    }

    builder.andWhere('username LIKE :username', {
      username: `%${(username as string) || ''}%`,
    });

    const result = await builder.getMany();

    const users = result.map((user) => {
      return {
        discordId: user.discordId,
        staff: user.staff,
        name: user.username,
        discriminator: user.discriminator,
        role: user.role,
      };
    });

    return users;
  }
}
