import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { ROUTES, SERVICES } from '../../utils/constants';
import { ILoggerService } from '../interfaces/logger';
import { isSrModGuard, isStaffGuard } from '../utils/Guards';
import { Request } from 'express';

@Controller(ROUTES.LOGGER)
export class LoggerController {
  constructor(
    @Inject(SERVICES.LOGGER) private readonly loggerService: ILoggerService,
  ) {}

  @Get('getAllPlayerData')
  @UseGuards(isSrModGuard)
  async getAllPlayerData(@Req() req: Request) {
    return this.loggerService.getAllPlayerData(req);
  }

  /**
   *
   * Make Mod or higher
   *
   */
  @Get('getPlayerChat')
  @UseGuards(isStaffGuard)
  async getPlayerChat(@Req() req: Request) {
    return this.loggerService.getPlayerChat(req);
  }

  /**
   *
   * Make SrMod or higher
   *
   */
  @Get('getPlayerCommands')
  @UseGuards(isSrModGuard)
  async getPlayerCommands(@Req() req: Request) {
    return this.loggerService.getPlayerCommands(req);
  }
}
