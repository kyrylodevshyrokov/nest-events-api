import { Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthService } from '../auth.service';
import { CurrentUser } from '../current-user.decorator';
import { User } from '../entities/user.entity';
import { AuthGuardLocal } from '../guards/auth-guard.local';
import { AuthGuardJwt } from '../guards/auth-guard.jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuardLocal)
  async login(@CurrentUser() user: User) {
    return {
      userId: user.id,
      token: this.authService.getTokenForUser(user),
    };
  }

  @Get('profile')
  @UseGuards(AuthGuardJwt)
  async getProfile(@CurrentUser() user: User) {
    return user;
  }
}
