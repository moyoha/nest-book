import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { aaaException } from './aaaException';

@Catch(aaaException)
export class AaaFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    console.log(exception, host);
  }
}
