import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

import { EventsService } from '../services/events.service';
import { ListEvents } from '../dto/list.events';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { User } from './../../auth/entities/user.entity';
import { AuthGuardJwt } from './../../auth/guards/auth-guard.jwt';

@Controller('/events')
@SerializeOptions({ strategy: 'excludeAll' })
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll(@Query() filter: ListEvents) {
    const events =
      await this.eventsService.getEventsWithAttendeeCountFilteredPaginated(
        filter,
        {
          total: true,
          currentPage: filter.page,
          limit: 10,
        },
      );

    return events;
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('id', ParseIntPipe) id) {
    const event = await this.eventsService.getEventWithAttendeeCount(id);

    if (!event) {
      throw new NotFoundException();
    }

    return event;
  }

  @Post()
  @UseGuards(AuthGuardJwt)
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() input: CreateEventDto, @CurrentUser() user: User) {
    return await this.eventsService.createEvent(input, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuardJwt)
  @UseInterceptors(ClassSerializerInterceptor)
  async update(
    @Param('id', ParseIntPipe) id,
    @Body() input: UpdateEventDto,
    @CurrentUser() user: User,
  ) {
    const event = await this.eventsService.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    if (event.organizerId !== user.id) {
      throw new ForbiddenException(
        null,
        'You are not authorized to change this event',
      );
    }

    return await this.eventsService.updateEvent(event, input);
  }

  @Delete(':id')
  @UseGuards(AuthGuardJwt)
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id, @CurrentUser() user: User) {
    const event = await this.eventsService.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    if (event.organizerId !== user.id) {
      throw new ForbiddenException(
        null,
        'You are not authorized to delete this event',
      );
    }

    await this.eventsService.deleteEvent(id);
  }
}
