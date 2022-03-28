import { UpdateUserDetails, UserDetails } from '../../utils/types';
import { User } from '../../utils/typeorm/entities/User.entity';

export interface IUserService {
  createUser(details: UserDetails): Promise<User>;
  findUser(discordId: string): Promise<User | undefined>;
  updateUser(user: User, details: UpdateUserDetails): Promise<User>;
  findStaffs(): Promise<Array<User>>;
}
