import { InjectRepository } from '@nestjs/typeorm';
import { Attendee } from '../entities/attendee.entity';
import { Repository } from 'typeorm';

export class AttendeeService {
  constructor(
    @InjectRepository(Attendee)
    private readonly attendeeRepository: Repository<Attendee>,
  ) {}

  public async findByEventId(eventId: number): Promise<Attendee[]> {
    return await this.attendeeRepository.find({
      where: { eventId },
    });
  }
}
