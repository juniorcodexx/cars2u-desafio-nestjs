import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
      return 'Feito por Paulo Nobre Junior. \n (https://github.com/juniorcodexx)';
  }
}
