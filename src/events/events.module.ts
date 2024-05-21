import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './controllers/events.controller';
import { Event } from './entities/event.entity';
import { Attendee } from './entities/attendee.entity';
import { EventsService } from './services/events.service';
import { AttendeeService } from './services/attendee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Attendee])],
  controllers: [EventsController],
  providers: [EventsService, AttendeeService],
})
export class EventsModule {}
