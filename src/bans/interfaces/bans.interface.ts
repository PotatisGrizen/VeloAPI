import { Request } from 'express';
import { Bans } from '../../utils/typeorm/entities/Bans/Bans.entity';
import { Kicks } from '../../utils/typeorm/entities/Bans/Kicks.entity';
import { Mutes } from '../../utils/typeorm/entities/Bans/Mutes.entity';
import { Warnings } from '../../utils/typeorm/entities/Bans/Warnings.entity';

export interface IBansService {
  getBansData(req: Request): Promise<Bans[]>;
  getSingleBansData(id: number): Promise<Bans>;
  getKicksData(req: Request): Promise<Kicks[]>;
  getSingleKicksData(id: number): Promise<Kicks>;
  getMutesData(req: Request): Promise<Mutes[]>;
  getSingleMutesData(id: number): Promise<Mutes>;
  getWarningsData(req: Request): Promise<Warnings[]>;
  getSingleWarningsData(id: number): Promise<Warnings>;
  NameToUUID(name: string): Promise<any>;
  UUIDToName(uuid: string): Promise<string>;
}
