import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'signed up' };
  }

  signin() {
    return { msg: 'signed in' };
  }
}
