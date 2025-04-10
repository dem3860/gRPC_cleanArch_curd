import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { EventResponse } from "./adapter/grpc/generated/event";

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

// CreateEvent の動作確認
client.CreateEvent(
  {
    name: "gRPCイベント",
    description: "これはgRPCで作成されたイベントです",
    startDate: new Date("2025-05-01T10:00:00Z").toISOString(),
    endDate: new Date("2025-05-01T12:00:00Z").toISOString(),
    location: "東京",
  },
  (err: any, response: EventResponse) => {
    if (err) {
      console.error("❌ Error:", err);
    } else {
      console.log("✅ Response:", response);
    }
  }
);
