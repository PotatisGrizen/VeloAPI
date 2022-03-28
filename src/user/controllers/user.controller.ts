import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ROUTES, SERVICES } from '../../utils/constants';
import { IUserService } from '../interfaces/user';

@Controller(ROUTES.USER)
export class UserController {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}
}
