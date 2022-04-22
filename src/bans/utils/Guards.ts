import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class isStaffGuard implements CanActivate {
  canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (!req.user) return Promise.resolve(false);
    const user = req.user;
    let isStaff;
    if (user.staff) {
      isStaff = true;
    }
    return req.isAuthenticated() && isStaff;
  }
}

@Injectable()
export class isSrModGuard implements CanActivate {
  canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (!req.user) return Promise.resolve(false);
    const user = req.user;
    let isSrModOrHigher;
    if ((user.staff && user.role == 'srmod') || 'dev' || 'admin') {
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
