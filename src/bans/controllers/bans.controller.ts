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
import { isStaffGuard } from '../utils/Guards';
import { Request, Response } from 'express';

@Controller(ROUTES.BANS)
export class BansController {
  constructor(
    @Inject(SERVICES.BANS) private readonly bansService: IBansService,
  ) {}

  @Get('getBansData')
  @UseGuards(isStaffGuard)
  async getBansData(@Req() req: Request) {
    return this.bansService.getBansData(req);
  }

  @Get('getSingleBansData/:id')
  @UseGuards(isStaffGuard)
  async getSingleBansData(@Param('id', ParseIntPipe) id: number) {
    return this.bansService.getSingleBansData(id);
  }

  @Get('getKicksData')
  @UseGuards(isStaffGuard)
  async getKicksData(@Req() req: Request) {
    return this.bansService.getKicksData(req);
  }

  @Get('getSingleKicksData/:id')
  @UseGuards(isStaffGuard)
  async getSingleKicksData(@Param('id', ParseIntPipe) id: number) {
    return this.bansService.getSingleKicksData(id);
  }

  @Get('getMutesData')
  @UseGuards(isStaffGuard)
  async getMutesData(@Req() req: Request) {
    return this.bansService.getMutesData(req);
  }

  @Get('getSingleMutesData/:id')
  @UseGuards(isStaffGuard)
  async getSingleMutesData(@Param('id', ParseIntPipe) id: number) {
    return this.bansService.getSingleMutesData(id);
  }

  @Get('getWarningsData')
  @UseGuards(isStaffGuard)
  async getWarningsData(@Req() req: Request) {
    return this.bansService.getWarningsData(req);
  }

  @Get('getSingleWarningsData/:id')
  @UseGuards(isStaffGuard)
  async getSingleWarningsData(@Param('id', ParseIntPipe) id: number) {
    return this.bansService.getSingleWarningsData(id);
  }
}
