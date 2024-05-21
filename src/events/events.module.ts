import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './controllers/events.controller';
import { Event } from './entities/event.entity';
import { Attendee } from './entities/attendee.entity';
import { EventsService } from './services/events.service';
import { AttendeeService } from './services/attendee.service';
import { CurrentUserEventAttendanceController } from './controllers/current-user-event-attendance.controller';
import { EventAttendeesController } from './controllers/event-attendees.controller';
import { EventsOrganizedByUserController } from './controllers/events-organized-by-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Attendee])],
  controllers: [
    EventsController,
    CurrentUserEventAttendanceController,
    EventAttendeesController,
    EventsOrganizedByUserController,
  ],
  providers: [EventsService, AttendeeService],
})
export class EventsModule {}
