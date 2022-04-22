import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ROUTES, SERVICES } from '../../utils/constants';
import { IUserService } from '../interfaces/user';
import { Request } from 'express';

@Controller(ROUTES.USER)
export class UserController {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}

  @Get('getUsers')
  async getUsers(@Req() req: Request) {
    return await this.userService.getUsers(req);
  }
}
