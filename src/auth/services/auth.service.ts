import { Inject, Injectable } from '@nestjs/common';
import { SERVICES } from '../../utils/constants';
import { IUserService } from '../../user/interfaces/user';
import { IAuthService } from '../interfaces/auth';
import { UserDetails } from '../../utils/types';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}

  async validateUser(details: UserDetails) {
    const user = await this.userService.findUser(details.discordId);
    const { discordId, ...updatedDetails } = details;
    return user
      ? this.userService.updateUser(user, updatedDetails)
      : this.userService.createUser(details);
  }
}
