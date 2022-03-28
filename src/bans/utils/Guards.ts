import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class isAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (!req.user) return Promise.resolve(false);
    const user = req.user;
    let isSrModOrHigher;
    if (
      user.role == 'admin' ||
      user.role == 'srmod' ||
      (user.role == 'dev' && user.staff)
    ) {
      isSrModOrHigher = true;
    }
    return req.isAuthenticated() && isSrModOrHigher;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    return req.isAuthenticated();
  }
}
