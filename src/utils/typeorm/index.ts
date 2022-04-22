import { User } from './entities/User.entity';
import { Session } from './entities/Session.entity';
import { Bans } from './entities/Bans/Bans.entity';
import { History } from './entities/Bans/History.entity';
import { Kicks } from './entities/Bans/Kicks.entity';
import { Warnings } from './entities/Bans/Warnings.entity';
import { Mutes } from './entities/Bans/Mutes.entity';
import { VentureChat } from './entities/Logger/VentureChat.entity';

export const APIentities = [User, Session];

export const Loggerentities = [VentureChat];

export const Bansentities = [Bans, History, Kicks, Warnings, Mutes];
