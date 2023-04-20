import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  add(x: number, y: number) {
    return x + y;
  }

  sub(x: number, y: number) {
    return x - y;
  }

  multiply(x: number, y: number) {
    return x * y;
  }

  divide(numerator: number, denominator: number) {
    if (numerator === 0 && denominator === 0) {
      throw new Error('result is NaN (Not A Number)');
    }
    return numerator / denominator;
  }
}
