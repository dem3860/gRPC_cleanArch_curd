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

export interface EventService {
  CreateEvent(request: CreateEventRequest): Promise<EventResponse>;
  UpdateEvent(request: UpdateEventRequest): Promise<EventResponse>;
  DeleteEvent(request: DeleteEventRequest): Promise<DeleteEventResponse>;
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
