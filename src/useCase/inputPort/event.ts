// useCase/inputPort/event.ts
import { ResultAsync } from "neverthrow";
import { Event, EventList } from "../../domain/entity/event";
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

export const EventUpdateRequest = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  location: z.string(),
});
export type EventUpdateRequest = z.infer<typeof EventUpdateRequest>;

export const EventListRequest = z.object({
  q: z.string().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  order: z.enum(["asc", "desc"]).default("asc"),
  orderBy: z
    .enum(["startDate", "endDate", "name", "createdAt"])
    .default("createdAt"),
  page: z.number().optional(),
  limit: z.number().optional(),
});
export type EventListRequest = z.infer<typeof EventListRequest>;

export interface IEventUseCase {
  create(
    input: EventCreateRequest
  ): ResultAsync<Event, ValidationError | DBError>;
  update(
    input: EventUpdateRequest
  ): ResultAsync<Event, ValidationError | DBError>;
  delete(id: string): ResultAsync<void, DBError>;
  list(input: EventListRequest): ResultAsync<EventList, DBError>;
}
