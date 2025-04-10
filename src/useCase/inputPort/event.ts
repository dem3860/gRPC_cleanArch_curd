// useCase/inputPort/event.ts
import { ResultAsync } from "neverthrow";
import { Event } from "../../domain/entity/event";
import { DBError, ValidationError } from "../../domain/entity/error";
import { z } from "zod";

export const EventCreateRequest = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  location: z.string(),
});
export type EventCreateRequest = z.infer<typeof EventCreateRequest>;

export interface IEventUseCase {
  create(
    input: EventCreateRequest
  ): ResultAsync<Event, ValidationError | DBError>;
}
