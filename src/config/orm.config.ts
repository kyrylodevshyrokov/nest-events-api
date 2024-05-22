import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Profile } from './../auth/entities/prifile.entity';
import { User } from './../auth/entities/user.entity';
import { Attendee } from './../events/entities/attendee.entity';
import { Event } from './../events/entities/event.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Event, Attendee, User, Profile],
    synchronize: true,
    dropSchema: Boolean(parseInt(process.env.DB_DROP_SCHEMA)),
  }),
);
