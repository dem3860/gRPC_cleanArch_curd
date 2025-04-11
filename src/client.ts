import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import {
  EventResponse,
  ListEventResponse,
} from "./adapter/grpc/generated/event";

// protoファイルのパス
const PROTO_PATH = path.resolve("proto/event.proto");

// protoを読み込む
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const proto = grpc.loadPackageDefinition(packageDefinition) as any;

// gRPCクライアントの作成
const client = new proto.event.EventService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

// // CreateEvent の動作確認
// client.CreateEvent(
//   {
//     name: "gRPCイベント",
//     description: "これはgRPCで作成されたイベントです",
//     startDate: new Date("2025-05-01T10:00:00Z").toISOString(),
//     endDate: new Date("2025-05-01T12:00:00Z").toISOString(),
//     location: "東京",
//   },
//   (err: any, response: EventResponse) => {
//     if (err) {
//       console.error("❌ Error:", err);
//     } else {
//       console.log("✅ Response:", response);
//     }
//   }
// );

// // UpdateEvent の動作確認
// client.UpdateEvent(
//   {
//     id: "11111111-1111-1111-1111-446655440000",
//     name: "newのgRPCイベント",
//     description: "これは更新されたgRPCで作成されたイベントです",
//     startDate: new Date("2025-05-01T10:00:00Z").toISOString(),
//     endDate: new Date("2025-05-01T12:00:00Z").toISOString(),
//     location: "東京2",
//   },
//   (err: any, response: EventResponse) => {
//     if (err) {
//       console.error("❌ Error:", err);
//     } else {
//       console.log("✅ Response:", response);
//     }
//   }
// );

// // DeleteEvent の動作確認
// client.DeleteEvent(
//   {
//     id: "f0ce6d21-5464-47e5-9595-c29e795c61b9",
//   },
//   (err: any, response: EventResponse) => {
//     if (err) {
//       console.error("❌ Error:", err);
//     } else {
//       console.log("✅ Response:", response);
//     }
//   }
// );

// DeleteEvent の動作確認
client.ListEvent(
  {
    q: "gRPCイベント",
  },
  (err: any, response: ListEventResponse) => {
    if (err) {
      console.error("❌ Error:", err);
    } else {
      console.log("✅ Response:", response);
    }
  }
);
