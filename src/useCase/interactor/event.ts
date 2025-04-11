import { ResultAsync, errAsync } from "neverthrow";
import { Event } from "../../domain/entity/event.js";
import {
  EventCreateRequest,
  EventUpdateRequest,
  IEventUseCase,
} from "../inputPort/event.js";
import { IEventRepository } from "../outputPort/event.js";
import { NewEvent } from "../../domain/constructor/event.js";
import { DBError, ValidationError } from "../../domain/entity/error.js";
import { randomUUID } from "crypto";

export class EventInteractor implements IEventUseCase {
  constructor(private readonly eventRepo: IEventRepository) {}

  create(
    input: EventCreateRequest
  ): ResultAsync<Event, DBError | ValidationError> {
    const id = randomUUID();
    const result = NewEvent({
      id,
      name: input.name,
      description: input.description,
      startDate: input.startDate,
      endDate: input.endDate,
      location: input.location,
    });
    if (result.isErr()) {
      return errAsync(result.error);
    }

    const event = result.value;

    return this.eventRepo.create(event).andThen(() => {
      return this.eventRepo.findById(event.id);
    });
  }
  update(
    input: EventUpdateRequest
  ): ResultAsync<Event, DBError | ValidationError> {
    const result = NewEvent({
      id: input.id,
      name: input.name,
      description: input.description,
      startDate: input.startDate,
      endDate: input.endDate,
      location: input.location,
    });
    if (result.isErr()) {
      return errAsync(result.error);
    }

    const event = result.value;
    return this.eventRepo.update(event).andThen(() => {
      return this.eventRepo.findById(event.id);
    });
  }
  delete(id: string): ResultAsync<void, DBError> {
    return this.eventRepo.delete(id);
  }
}
