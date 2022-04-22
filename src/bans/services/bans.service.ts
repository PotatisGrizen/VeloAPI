import { Injectable } from '@nestjs/common';
import { IBansService } from '../interfaces/bans.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Bans } from '../../utils/typeorm/entities/Bans/Bans.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { History } from '../../utils/typeorm/entities/Bans/History.entity';
import { Kicks } from '../../utils/typeorm/entities/Bans/Kicks.entity';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { Mutes } from '../../utils/typeorm/entities/Bans/Mutes.entity';
import { Warnings } from '../../utils/typeorm/entities/Bans/Warnings.entity';

@Injectable()
export class BansService implements IBansService {
  constructor(
    @InjectRepository(Bans, 'bansConnection')
    private readonly bansRepo: Repository<Bans>,
    @InjectRepository(History, 'bansConnection')
    private readonly historyRepo: Repository<History>,
    @InjectRepository(Kicks, 'bansConnection')
    private readonly kicksRepo: Repository<Kicks>,
    @InjectRepository(Mutes, 'bansConnection')
    private readonly mutesRepo: Repository<Mutes>,
    @InjectRepository(Warnings, 'bansConnection')
    private readonly warningsRepo: Repository<Warnings>,
  ) {}

  async getKicksData(req: Request): Promise<Kicks[]> {
    const take = 10;
    const page: number = (req.query.page as unknown as number) || 1;
    const skip = (page - 1) * take;

    const builder = this.kicksRepo.createQueryBuilder();
    const { name } = req.query;

    if (name) {
      const uuidFromQuery = await this.NameToUUID(name as string);

      if (uuidFromQuery.length != 0) {
        builder.andWhere('uuid IN (:s)', {
          s: uuidFromQuery,
        });
      } else {
        return [];
      }
    }

    const [result] = await builder
      .orderBy('id', 'DESC')
      .take(take as number)
      .skip(skip as number)
      .getManyAndCount();

    const finalResult = [];

    for (const data of result) {
      const name = await this.UUIDToName(data.uuid);
      finalResult.push({
        ...data,
        name,
      });
    }

    return finalResult;
  }
  async getSingleKicksData(id: number): Promise<Kicks> {
    return await this.kicksRepo.findOne({ where: { id: `${id}` } });
  }

  async getBansData(req: Request): Promise<Bans[]> {
    const take = 10;
    const page: number = (req.query.page as unknown as number) || 1;
    const skip = (page - 1) * take;

    const builder = this.bansRepo.createQueryBuilder();
    const { name } = req.query;

    if (name) {
      const uuidFromQuery = await this.NameToUUID(name as string);

      if (uuidFromQuery.length != 0) {
        builder.andWhere('uuid IN (:s)', {
          s: uuidFromQuery,
        });
      } else {
        return [];
      }
    }

    const [result] = await builder
      .orderBy('id', 'DESC')
      .take(take as number)
      .skip(skip as number)
      .getManyAndCount();

    const finalResult = [];

    for (const data of result) {
      const name = await this.UUIDToName(data.uuid);
      finalResult.push({
        ...data,
        name,
      });
    }

    return finalResult;
  }

  async getSingleBansData(id: number): Promise<Bans> {
    return await this.bansRepo.findOne({ where: { id: `${id}` } });
  }

  async NameToUUID(name: string): Promise<History[]> {
    const historyBuilder = await this.historyRepo.createQueryBuilder();

    historyBuilder.where('name LIKE :s', {
      s: `%${name}%`,
    });

    const result = await historyBuilder.cache(true, 60000 * 60).getMany();

    const UUID = [];

    result.forEach((data) => {
      UUID.push(data.uuid);
    });

    return UUID;
  }

  async UUIDToName(uuid: string): Promise<string> {
    const builder = await this.historyRepo.createQueryBuilder();

    builder.where('uuid LIKE :uuid', {
      uuid: uuid,
    });

    const result = await builder.cache(true, 60000 * 60).getOne();

    return result.name;
  }

  async getMutesData(req: Request): Promise<Mutes[]> {
    const take = 10;
    const page: number = (req.query.page as unknown as number) || 1;
    const skip = (page - 1) * take;

    const builder = this.mutesRepo.createQueryBuilder();
    const { name } = req.query;

    if (name) {
      const uuidFromQuery = await this.NameToUUID(name as string);

      if (uuidFromQuery.length != 0) {
        builder.andWhere('uuid IN (:s)', {
          s: uuidFromQuery,
        });
      } else {
        return [];
      }
    }

    const [result] = await builder
      .orderBy('id', 'DESC')
      .take(take as number)
      .skip(skip as number)
      .getManyAndCount();

    const finalResult = [];

    for (const data of result) {
      const name = await this.UUIDToName(data.uuid);
      finalResult.push({
        ...data,
        name,
      });
    }

    return finalResult;
  }

  async getSingleMutesData(id: number): Promise<Mutes> {
    return await this.mutesRepo.findOne({ where: { id: `${id}` } });
  }

  async getWarningsData(req: Request): Promise<Warnings[]> {
    const take = 10;
    const page: number = (req.query.page as unknown as number) || 1;
    const skip = (page - 1) * take;

    const builder = this.warningsRepo.createQueryBuilder();
    const { name } = req.query;

    if (name) {
      const uuidFromQuery = await this.NameToUUID(name as string);

      if (uuidFromQuery.length != 0) {
        builder.andWhere('uuid IN (:s)', {
          s: uuidFromQuery,
        });
      } else {
        return [];
      }
    }

    const [result] = await builder
      .orderBy('id', 'DESC')
      .take(take as number)
      .skip(skip as number)
      .getManyAndCount();

    const finalResult = [];

    for (const data of result) {
      const name = await this.UUIDToName(data.uuid);
      finalResult.push({
        ...data,
        name,
      });
    }

    return finalResult;
  }

  async getSingleWarningsData(id: number): Promise<Warnings> {
    return await this.warningsRepo.findOne({ where: { id: `${id}` } });
  }
}
