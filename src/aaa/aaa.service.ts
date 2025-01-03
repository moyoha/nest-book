import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateAaaDto } from './dto/create-aaa.dto';
import { UpdateAaaDto } from './dto/update-aaa.dto';

@Injectable()
export class AaaService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('aaaService onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('aaaService onApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('aaaService onModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('aaaService beforeApplicationShutdown', signal);
  }
  onApplicationShutdown(signal?: string) {
    console.log('aaaService onApplicationShutdown', signal);
  }
  create(createAaaDto: CreateAaaDto) {
    return 'This action adds a new aaa';
  }

  findAll() {
    return `This action returns all aaa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aaa`;
  }

  update(id: number, updateAaaDto: UpdateAaaDto) {
    return `This action updates a #${id} aaa`;
  }

  remove(id: number) {
    return `This action removes a #${id} aaa`;
  }
}
