import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { PrismaClient } from "@prisma/client";
import path from "path";
import { fileURLToPath } from "url";

// 自作の handler をインポート
import { EventInteractor } from "./useCase/interactor/event";
import { EventRepository } from "./adapter/grpc/database/repository/event";
import { eventHandler } from "./adapter/grpc/handler/event";

// __dirname をESMで再現
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// gRPC protoファイルの読み込み
const PROTO_PATH = path.resolve(process.cwd(), "proto/event.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const proto = grpc.loadPackageDefinition(packageDefinition) as any;

function main() {
  const server = new grpc.Server();

  // useCase の注入（DI）
  const useCase = new EventInteractor(new EventRepository());

  // サービス登録
  server.addService(proto.event.EventService.service, eventHandler(useCase));

  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log("🚀 gRPC server running at http://localhost:50051");
    }
  );
}

main();
