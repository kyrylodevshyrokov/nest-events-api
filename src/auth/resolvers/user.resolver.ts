import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AuthGuardJwtGql } from '../guards/auth-guard-jwt.gql';
import { CurrentUser } from '../decorators/current-user.decorator';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create.user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  @UseGuards(AuthGuardJwtGql)
  public async me(@CurrentUser() user: User): Promise<User> {
    return user;
  }

  @Mutation(() => User, { name: 'userAdd' })
  public async add(@Args('input') input: CreateUserDto): Promise<User> {
    return await this.userService.create(input);
  }
}
