import {
  ServerUnaryCall,
  sendUnaryData,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { IEventUseCase } from "../../../useCase/inputPort/event";
import { CreateEventRequest, EventResponse } from "../generated/event";

export const eventHandler = (
  eventUseCase: IEventUseCase
): UntypedServiceImplementation => ({
  CreateEvent(
    call: ServerUnaryCall<CreateEventRequest, EventResponse>,
    callback: sendUnaryData<EventResponse>
  ) {
    const request = call.request;

    console.log("gRPC request:", request);

    Promise.resolve(
      eventUseCase.create({
        name: request.name,
        description: request.description,
        startDate: request.startDate,
        endDate: request.endDate,
        location: request.location,
      })
    )
      .then((result) => {
        if (result.isErr()) {
          const error = new Error(result.error.message);
          (error as any).code = 13; // INTERNAL_ERROR
          callback(error, null);
          return;
        }

        const event = result.value;
        callback(null, {
          id: event.id,
          name: event.name,
          description: event.description,
          startDate: event.startDate.toISOString(),
          endDate: event.endDate.toISOString(),
          location: event.location,
          createdAt: event.createdAt.toISOString(),
          updatedAt: event.updatedAt.toISOString(),
        });
      })
      .catch((err) => {
        const error = new Error("Unexpected error");
        (error as any).code = 13;
        callback(error, null);
      });
  },
});
