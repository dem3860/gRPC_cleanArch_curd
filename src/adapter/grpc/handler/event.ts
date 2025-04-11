import {
  ServerUnaryCall,
  sendUnaryData,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { IEventUseCase } from "../../../useCase/inputPort/event";
import {
  CreateEventRequest,
  EventResponse,
  UpdateEventRequest,
} from "../generated/event";

export const eventHandler = (
  eventUseCase: IEventUseCase
): UntypedServiceImplementation => ({
  CreateEvent(
    // ServerUnaryCall: gRPCのリクエストを受け取るための型.単一のリクエストとレスポンスを処理する際のリクエストオブジェクト.serverにリクエストが送られるとそれがServerUnaryCallオブジェクトとして渡される
    call: ServerUnaryCall<CreateEventRequest, EventResponse>,
    // sendUnaryData: gRPCのレスポンスを返すための型.レスポンスを返すためのコールバック関数
    callback: sendUnaryData<EventResponse>
  ) {
    const request = call.request;

    console.log("gRPC request:", request);

    eventUseCase
      .create({
        name: request.name,
        description: request.description,
        startDate: request.startDate,
        endDate: request.endDate,
        location: request.location,
      })
      .mapErr((err) => {
        const error = new Error(err.message);
        (error as any).code = 13; // INTERNAL_ERROR
        callback(error, null);
      })
      .map((event) => {
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
      });
  },

  UpdateEvent(
    call: ServerUnaryCall<UpdateEventRequest, EventResponse>,
    callback: sendUnaryData<EventResponse>
  ) {
    const request = call.request;
    console.log("gRPC Update request:", request);

    eventUseCase
      .update({
        id: request.id,
        name: request.name,
        description: request.description,
        startDate: request.startDate,
        endDate: request.endDate,
        location: request.location,
      })
      .mapErr((err) => {
        const error = new Error(err.message);
        (error as any).code = 13;
        callback(error, null);
      })
      .map((event) => {
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
      });
  },
});
