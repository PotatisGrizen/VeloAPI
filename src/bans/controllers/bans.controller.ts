import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ROUTES, SERVICES } from '../../utils/constants';
import { IBansService } from '../interfaces/bans.interface';
import { isAdminGuard } from '../utils/Guards';
import { Request, Response } from 'express';

@Controller(ROUTES.BANS)
export class BansController {
  constructor(
    @Inject(SERVICES.BANS) private readonly bansService: IBansService,
  ) {}

  @Get('getBansData')
  @UseGuards(isAdminGuard)
  async getBansData(@Req() req: Request) {
    return this.bansService.getBansData(req);
  }

  @Get('getSingleBansData/:id')
  @UseGuards(isAdminGuard)
  async getSingleBansData(@Param('id', ParseIntPipe) id: number) {
    return this.bansService.getSingleBansData(id);
  }
}
