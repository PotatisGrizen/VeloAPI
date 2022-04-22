import {
  Controller,
  Get,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ROUTES, SERVICES } from '../../utils/constants';
import { AuthenticatedGuard, DiscordAuthGuard } from '../utils/Guards';
import { AuthUser } from '../../utils/decorators';
import { User } from '../../utils/typeorm/entities/User.entity';
import { Request, Response } from 'express';
import { IUserService } from '../../user/interfaces/user';

@Controller(ROUTES.AUTH)
export class AuthController {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {} // eslint-disable-linet

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect(
      process.env.NODE_ENV === 'production'
        ? 'https://zone.velocitysky.net'
        : 'http://localhost:3000/zone',
    );
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  async status(@AuthUser() user: User) {
    return user;
  }

  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout();
    res.status(200).send('Logged out');
  }
}
