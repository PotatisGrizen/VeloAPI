import { Request } from 'express';
import { Bans } from '../../utils/typeorm/entities/Bans/Bans.entity';

export interface IBansService {
  getBansData(req: Request): Promise<Bans[]>;
  getSingleBansData(id: number): Promise<Bans>;
}
