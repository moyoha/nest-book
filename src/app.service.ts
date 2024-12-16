import { Inject, Injectable } from '@nestjs/common';
import { PersonService } from './person/person.service';

@Injectable()
export class AppService {
  @Inject(PersonService)
  private personService: PersonService;

  getHello(): string {
    return 'Hello World!' + this.personService.findAll();
  }
}
