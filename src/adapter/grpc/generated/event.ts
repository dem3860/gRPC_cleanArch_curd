// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v5.29.3
// source: event.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "event";

export interface CreateEventRequest {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface UpdateEventRequest {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface DeleteEventRequest {
  id: string;
}

export interface ListEventRequest {
  q: string;
  start: string;
  end: string;
  order: ListEventRequest_Order;
  orderBy: ListEventRequest_OrderBy;
  page: number;
  limit: number;
}

export enum ListEventRequest_Order {
  asc = 0,
  desc = 1,
  UNRECOGNIZED = -1,
}

export function listEventRequest_OrderFromJSON(object: any): ListEventRequest_Order {
  switch (object) {
    case 0:
    case "asc":
      return ListEventRequest_Order.asc;
    case 1:
    case "desc":
      return ListEventRequest_Order.desc;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListEventRequest_Order.UNRECOGNIZED;
  }
}

export function listEventRequest_OrderToJSON(object: ListEventRequest_Order): string {
  switch (object) {
    case ListEventRequest_Order.asc:
      return "asc";
    case ListEventRequest_Order.desc:
      return "desc";
    case ListEventRequest_Order.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ListEventRequest_OrderBy {
  startDate = 0,
  endDate = 1,
  name = 2,
  createdAt = 3,
  UNRECOGNIZED = -1,
}

export function listEventRequest_OrderByFromJSON(object: any): ListEventRequest_OrderBy {
  switch (object) {
    case 0:
    case "startDate":
      return ListEventRequest_OrderBy.startDate;
    case 1:
    case "endDate":
      return ListEventRequest_OrderBy.endDate;
    case 2:
    case "name":
      return ListEventRequest_OrderBy.name;
    case 3:
    case "createdAt":
      return ListEventRequest_OrderBy.createdAt;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListEventRequest_OrderBy.UNRECOGNIZED;
  }
}

export function listEventRequest_OrderByToJSON(object: ListEventRequest_OrderBy): string {
  switch (object) {
    case ListEventRequest_OrderBy.startDate:
      return "startDate";
    case ListEventRequest_OrderBy.endDate:
      return "endDate";
    case ListEventRequest_OrderBy.name:
      return "name";
    case ListEventRequest_OrderBy.createdAt:
      return "createdAt";
    case ListEventRequest_OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EventResponse {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteEventResponse {
  message: string;
}

export interface ListEventResponse {
  events: EventResponse[];
  total: number;
}

function createBaseCreateEventRequest(): CreateEventRequest {
  return { name: "", description: "", startDate: "", endDate: "", location: "" };
}

export const CreateEventRequest: MessageFns<CreateEventRequest> = {
  encode(message: CreateEventRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.startDate !== "") {
      writer.uint32(26).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(34).string(message.endDate);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateEventRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.startDate = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.endDate = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.location = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateEventRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      startDate: isSet(object.startDate) ? globalThis.String(object.startDate) : "",
      endDate: isSet(object.endDate) ? globalThis.String(object.endDate) : "",
      location: isSet(object.location) ? globalThis.String(object.location) : "",
    };
  },

  toJSON(message: CreateEventRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.startDate !== "") {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    if (message.location !== "") {
      obj.location = message.location;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateEventRequest>, I>>(base?: I): CreateEventRequest {
    return CreateEventRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEventRequest>, I>>(object: I): CreateEventRequest {
    const message = createBaseCreateEventRequest();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.location = object.location ?? "";
    return message;
  },
};

function createBaseUpdateEventRequest(): UpdateEventRequest {
  return { id: "", name: "", description: "", startDate: "", endDate: "", location: "" };
}

export const UpdateEventRequest: MessageFns<UpdateEventRequest> = {
  encode(message: UpdateEventRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startDate !== "") {
      writer.uint32(34).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(42).string(message.endDate);
    }
    if (message.location !== "") {
      writer.uint32(50).string(message.location);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateEventRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.startDate = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.endDate = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.location = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateEventRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      startDate: isSet(object.startDate) ? globalThis.String(object.startDate) : "",
      endDate: isSet(object.endDate) ? globalThis.String(object.endDate) : "",
      location: isSet(object.location) ? globalThis.String(object.location) : "",
    };
  },

  toJSON(message: UpdateEventRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.startDate !== "") {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    if (message.location !== "") {
      obj.location = message.location;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateEventRequest>, I>>(base?: I): UpdateEventRequest {
    return UpdateEventRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateEventRequest>, I>>(object: I): UpdateEventRequest {
    const message = createBaseUpdateEventRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.location = object.location ?? "";
    return message;
  },
};

function createBaseDeleteEventRequest(): DeleteEventRequest {
  return { id: "" };
}

export const DeleteEventRequest: MessageFns<DeleteEventRequest> = {
  encode(message: DeleteEventRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteEventRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteEventRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteEventRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteEventRequest>, I>>(base?: I): DeleteEventRequest {
    return DeleteEventRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteEventRequest>, I>>(object: I): DeleteEventRequest {
    const message = createBaseDeleteEventRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseListEventRequest(): ListEventRequest {
  return { q: "", start: "", end: "", order: 0, orderBy: 0, page: 0, limit: 0 };
}

export const ListEventRequest: MessageFns<ListEventRequest> = {
  encode(message: ListEventRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.q !== "") {
      writer.uint32(10).string(message.q);
    }
    if (message.start !== "") {
      writer.uint32(18).string(message.start);
    }
    if (message.end !== "") {
      writer.uint32(26).string(message.end);
    }
    if (message.order !== 0) {
      writer.uint32(32).int32(message.order);
    }
    if (message.orderBy !== 0) {
      writer.uint32(40).int32(message.orderBy);
    }
    if (message.page !== 0) {
      writer.uint32(48).int32(message.page);
    }
    if (message.limit !== 0) {
      writer.uint32(56).int32(message.limit);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListEventRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.q = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.start = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.end = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.order = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.orderBy = reader.int32() as any;
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.page = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.limit = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEventRequest {
    return {
      q: isSet(object.q) ? globalThis.String(object.q) : "",
      start: isSet(object.start) ? globalThis.String(object.start) : "",
      end: isSet(object.end) ? globalThis.String(object.end) : "",
      order: isSet(object.order) ? listEventRequest_OrderFromJSON(object.order) : 0,
      orderBy: isSet(object.orderBy) ? listEventRequest_OrderByFromJSON(object.orderBy) : 0,
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: ListEventRequest): unknown {
    const obj: any = {};
    if (message.q !== "") {
      obj.q = message.q;
    }
    if (message.start !== "") {
      obj.start = message.start;
    }
    if (message.end !== "") {
      obj.end = message.end;
    }
    if (message.order !== 0) {
      obj.order = listEventRequest_OrderToJSON(message.order);
    }
    if (message.orderBy !== 0) {
      obj.orderBy = listEventRequest_OrderByToJSON(message.orderBy);
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListEventRequest>, I>>(base?: I): ListEventRequest {
    return ListEventRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListEventRequest>, I>>(object: I): ListEventRequest {
    const message = createBaseListEventRequest();
    message.q = object.q ?? "";
    message.start = object.start ?? "";
    message.end = object.end ?? "";
    message.order = object.order ?? 0;
    message.orderBy = object.orderBy ?? 0;
    message.page = object.page ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseEventResponse(): EventResponse {
  return { id: "", name: "", description: "", startDate: "", endDate: "", location: "", createdAt: "", updatedAt: "" };
}

export const EventResponse: MessageFns<EventResponse> = {
  encode(message: EventResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startDate !== "") {
      writer.uint32(34).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(42).string(message.endDate);
    }
    if (message.location !== "") {
      writer.uint32(50).string(message.location);
    }
    if (message.createdAt !== "") {
      writer.uint32(58).string(message.createdAt);
    }
    if (message.updatedAt !== "") {
      writer.uint32(66).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.startDate = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.endDate = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.location = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      startDate: isSet(object.startDate) ? globalThis.String(object.startDate) : "",
      endDate: isSet(object.endDate) ? globalThis.String(object.endDate) : "",
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
    };
  },

  toJSON(message: EventResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.startDate !== "") {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventResponse>, I>>(base?: I): EventResponse {
    return EventResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventResponse>, I>>(object: I): EventResponse {
    const message = createBaseEventResponse();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.location = object.location ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? "";
    return message;
  },
};

function createBaseDeleteEventResponse(): DeleteEventResponse {
  return { message: "" };
}

export const DeleteEventResponse: MessageFns<DeleteEventResponse> = {
  encode(message: DeleteEventResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteEventResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteEventResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: DeleteEventResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteEventResponse>, I>>(base?: I): DeleteEventResponse {
    return DeleteEventResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteEventResponse>, I>>(object: I): DeleteEventResponse {
    const message = createBaseDeleteEventResponse();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseListEventResponse(): ListEventResponse {
  return { events: [], total: 0 };
}

export const ListEventResponse: MessageFns<ListEventResponse> = {
  encode(message: ListEventResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.events) {
      EventResponse.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.total !== 0) {
      writer.uint32(16).int32(message.total);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListEventResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.events.push(EventResponse.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.total = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEventResponse {
    return {
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => EventResponse.fromJSON(e)) : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: ListEventResponse): unknown {
    const obj: any = {};
    if (message.events?.length) {
      obj.events = message.events.map((e) => EventResponse.toJSON(e));
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListEventResponse>, I>>(base?: I): ListEventResponse {
    return ListEventResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListEventResponse>, I>>(object: I): ListEventResponse {
    const message = createBaseListEventResponse();
    message.events = object.events?.map((e) => EventResponse.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

export interface EventService {
  CreateEvent(request: CreateEventRequest): Promise<EventResponse>;
  UpdateEvent(request: UpdateEventRequest): Promise<EventResponse>;
  DeleteEvent(request: DeleteEventRequest): Promise<DeleteEventResponse>;
  ListEvent(request: ListEventRequest): Promise<ListEventResponse>;
}

export const EventServiceServiceName = "event.EventService";
export class EventServiceClientImpl implements EventService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || EventServiceServiceName;
    this.rpc = rpc;
    this.CreateEvent = this.CreateEvent.bind(this);
    this.UpdateEvent = this.UpdateEvent.bind(this);
    this.DeleteEvent = this.DeleteEvent.bind(this);
    this.ListEvent = this.ListEvent.bind(this);
  }
  CreateEvent(request: CreateEventRequest): Promise<EventResponse> {
    const data = CreateEventRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateEvent", data);
    return promise.then((data) => EventResponse.decode(new BinaryReader(data)));
  }

  UpdateEvent(request: UpdateEventRequest): Promise<EventResponse> {
    const data = UpdateEventRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateEvent", data);
    return promise.then((data) => EventResponse.decode(new BinaryReader(data)));
  }

  DeleteEvent(request: DeleteEventRequest): Promise<DeleteEventResponse> {
    const data = DeleteEventRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteEvent", data);
    return promise.then((data) => DeleteEventResponse.decode(new BinaryReader(data)));
  }

  ListEvent(request: ListEventRequest): Promise<ListEventResponse> {
    const data = ListEventRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ListEvent", data);
    return promise.then((data) => ListEventResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
