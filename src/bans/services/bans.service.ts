import { Injectable } from '@nestjs/common';
import { IBansService } from '../interfaces/bans.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Bans } from '../../utils/typeorm/entities/Bans/Bans.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Injectable()
export class BansService implements IBansService {
  constructor(
    @InjectRepository(Bans, 'bansConnection')
    private readonly bansRepo: Repository<Bans>,
  ) {}

  async getBansData(req: Request): Promise<Bans[]> {
    const builder = this.bansRepo.createQueryBuilder();
    const { player } = req.query;

    if (player) {
      builder.where('Message LIKE :s', {
        s: `%${player}%`,
      });
    }

    return await builder.getMany();
  }

  async getSingleBansData(id: number): Promise<Bans> {
    return await this.bansRepo.findOne({ where: { id: `${id}` } });
  }
}
