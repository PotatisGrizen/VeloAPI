import { User } from './entities/User.entity';
import { Session } from './entities/Session.entity';
import { Player_Chat } from './entities/Logger/Player_Chat.entity';
import { Player_Commands } from './entities/Logger/Player_Commands.entity';
import { Bans } from './entities/Bans/Bans.entity';

export const APIentities = [User, Session];

export const Loggerentities = [Player_Chat, Player_Commands];

/**
 * TODO: Setup all the entities for Litebans
 */
export const Bansentities = [Bans];
