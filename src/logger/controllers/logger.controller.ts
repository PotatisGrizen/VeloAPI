import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { ROUTES, SERVICES } from '../../utils/constants';
import { ILoggerService } from '../interfaces/logger';
import { isAdminGuard } from '../utils/Guards';
import { Request } from 'express';

@Controller(ROUTES.LOGGER)
export class LoggerController {
  constructor(
    @Inject(SERVICES.LOGGER) private readonly loggerService: ILoggerService,
  ) {}

  @Get('getAllPlayerData')
  @UseGuards(isAdminGuard)
  async getAllPlayerData() {
    return this.loggerService.getAllPlayerData();
  }

  @Get('getPlayerChat')
  @UseGuards(isAdminGuard)
  async getPlayerChat(@Req() req: Request) {
    return this.loggerService.getPlayerChat(req);
  }

  @Get('getPlayerCommands')
  @UseGuards(isAdminGuard)
  async getPlayerCommands(@Req() req: Request) {
    return this.loggerService.getPlayerCommands(req);
  }

  /**
   * TODO: Setup the routes for getting single data points.
   */
}
