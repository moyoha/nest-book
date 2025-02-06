import { applyDecorators, Get, UseGuards } from '@nestjs/common';
import { Aaa } from './aaa.decorator';
import { LoginGuard } from './login.guard';

export function Bbb(path: string, roles: any) {
  return applyDecorators(Get(path), Aaa(roles), UseGuards(LoginGuard));
}
