import {
  ServerUnaryCall,
  sendUnaryData,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { IEventUseCase } from "../../../useCase/inputPort/event";
import {
  CreateEventRequest,
  DeleteEventRequest,
  DeleteEventResponse,
  EventResponse,
  ListEventRequest,
  ListEventRequest_OrderBy,
  ListEventResponse,
  UpdateEventRequest,
} from "../generated/event";

const mapOrderBy = (
  orderBy: ListEventRequest_OrderBy
): "name" | "startDate" | "endDate" | "createdAt" => {
  switch (orderBy) {
    case 0:
      return "startDate";
    case 1:
      return "endDate";
    case 2:
      return "name";
    case 3:
      return "createdAt";
    default:
      return "createdAt";
  }
};

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
  ListEvent(
    call: ServerUnaryCall<ListEventRequest, EventResponse>,
    callback: sendUnaryData<ListEventResponse>
  ) {
    const request = call.request;
    console.log("gRPC Update request:", request);

    eventUseCase
      .list({
        q: request.q,
        startDate: request.start,
        endDate: request.end,
        order: request.order === 0 ? "asc" : "desc",
        orderBy: mapOrderBy(request.orderBy),
        page: request.page,
        limit: request.limit,
      })
      .mapErr((err) => {
        const error = new Error(err.message);
        (error as any).code = 13;
        callback(error, null);
      })
      .map((event) => {
        callback(null, {
          events: event.events.map((event) => ({
            id: event.id,
            name: event.name,
            description: event.description,
            startDate: event.startDate.toISOString(),
            endDate: event.endDate.toISOString(),
            location: event.location,
            createdAt: event.createdAt.toISOString(),
            updatedAt: event.updatedAt.toISOString(),
          })),
          total: event.total,
        });
      });
  },
  DeleteEvent(
    input: ServerUnaryCall<DeleteEventRequest, DeleteEventResponse>,
    callback: sendUnaryData<DeleteEventResponse>
  ) {
    const request = input.request;
    console.log("gRPC Delete request:", request);
    eventUseCase
      .delete(request.id)
      .mapErr((err) => {
        const error = new Error(err.message);
        (error as any).code = 13; // INTERNAL_ERROR
        callback(error, null);
      })
      .map(() => {
        callback(null, {
          message: "Event deleted successfully",
        });
      });
  },
});
