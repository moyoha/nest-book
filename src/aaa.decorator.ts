import { SetMetadata } from '@nestjs/common';

export const Aaa = (...args: string[]) => SetMetadata('roles', args);
