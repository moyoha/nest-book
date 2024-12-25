import {
  Inject,
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';

@Injectable()
export class BbbService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  @Inject()
  private aaaService: AaaService;
  onApplicationBootstrap() {
    console.log('bbbService onApplicationBootstrap');
  }
  onModuleInit() {
    console.log('bbbService onModuleInit');
  }
  onModuleDestroy() {
    console.log('bbbService onModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('bbbService beforeApplicationShutdown');
  }
  onApplicationShutdown(signal?: string) {
    console.log('bbbService onApplicationShutdown');
  }
  create(createBbbDto: CreateBbbDto) {
    return 'This action adds a new bbb';
  }

  findAll() {
    return `This action returns all bbb` + this.aaaService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
