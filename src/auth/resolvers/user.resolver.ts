import { Query, Resolver } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AuthGuardJwtGql } from '../guards/auth-guard-jwt.gql';
import { CurrentUser } from '../decorators/current-user.decorator';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  @UseGuards(AuthGuardJwtGql)
  public async me(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
