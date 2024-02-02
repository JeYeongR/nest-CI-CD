import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a = 1;
    return 'CI/CD 체크';
  }
}
