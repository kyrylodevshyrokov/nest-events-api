import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { CreateUserDto } from '../dto/create.user.dto';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('users')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = new User();

    if (createUserDto.password !== createUserDto.retypedPassword) {
      throw new BadRequestException(['Passwords are not the same']);
    }

    const existingUser = await this.userRepository.findOne({
      where: [
        { username: createUserDto.username },
        { email: createUserDto.email },
      ],
    });

    if (existingUser) {
      throw new BadRequestException(['Username or email is already taken']);
    }

    user.username = createUserDto.username;
    user.password = await this.authService.hashPassword(createUserDto.password);
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return {
      ...(await this.userRepository.save(user)),
      token: this.authService.getTokenForUser(user),
    };
  }
}
