import { Controller, Get, Inject, Post, Res, UseGuards } from '@nestjs/common';
import { ROUTES, SERVICES } from '../../utils/constants';
import { AuthenticatedGuard, DiscordAuthGuard } from '../utils/Guards';
import { AuthUser } from '../../utils/decorators';
import { User } from '../../utils/typeorm/entities/User.entity';
import { Response } from 'express';
import { IUserService } from '../../user/interfaces/user';

@Controller(ROUTES.AUTH)
export class AuthController {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {} // eslint-disable-line

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:3000/zone');
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  async status(@AuthUser() user: User) {
    return user;
  }

  @Post('logout')
  logout() {} // eslint-disable-line
}
