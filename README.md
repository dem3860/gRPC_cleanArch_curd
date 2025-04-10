## クリーンアーキテクチャ構成で gPRC の CRUD を実装してみる

このプロジェクトでは、gRPC + Prisma + neverThrow を用いてイベントの CRUD を実装し、クリーンアーキテクチャに基づいた設計を体験・学習します。  
以前にあげた REST API と比較してみてください。

---

### 起動方法

1. `.env.example` を `.env` にコピーする

2. パッケージのインストール

```bash
npm install
```

3. Docker で PostgreSQL と API を起動

```bash
docker compose up
```

これで開発環境が立ち上がります。

---

### 初期データ

初期データ投入スクリプトは `seed.ts` にあります。

以下を実行してください：

```bash
npm run seed
```

### DB の中を見る

DB の中を見るには prisma studio を開きます。

以下を実行してください :

```bash
npx prisma studio
```

---

### proto ファイルからコードの自動生成

本プロジェクトでは、gRPC を使用してサービスを実装しており、proto ファイルはイベントに関する gRPC サービス定義を行うために使用しています。

具体的には、proto/event.proto ファイルにイベント作成のためのリクエストとレスポンスを定義し、それを元に gRPC クライアントとサーバー間で通信します。

proto ファイルを変更した後は、以下のコマンドを実行して自動的に TypeScript の型を生成します。

```bash
npm run codegen
```

### 動作確認

swagger のような GUI ツールを見つけられなかったので server に対してリクエストを送り、そのレスポンスを確認することで動作確認とします。

client.ts ファイルがリクエストを送る部分に該当します。

どの機能に対してリクエストを送るか、そしてリクエストの内容を記載し、以下のコマンドを実行してください。

```bash
npm run client
```

### クリーンアーキテクチャにおける interface の役割

本プロジェクトでは、責務ごとの依存関係の分離を意識し、interface（Port）を使って依存性逆転の原則を実現しています。

- InputPort：handler から usecase（ユースケース）を呼び出すためのインターフェース
- OutputPort：usecase から DB（Prisma）などの外部リソースを操作するためのインターフェース

これにより、ビジネスロジック（Interactor）は技術的な実装に依存せず、テストや拡張が容易になります。

---

### SOLID 原則との対応

- **単一責任の原則**：handler, interactor, repository など各層で責務が明確に分離されています。
- **オープン・クローズド原則**：Interactor や Repository の実装を差し替えても他層に影響を与えずに拡張できます。
- **リスコフの置換原則**：IEventRepository や IEventUseCase などのインターフェースを満たす実装であれば入れ替え可能です。
- **インターフェース分離の原則**：必要最小限のメソッドのみを持つ小さなインターフェースに分離されています。
- **依存関係逆転の原則**：Interactor は実装ではなく抽象（OutputPort）に依存し、adapter 層が依存を注入します。

---

### 参考資料

- https://hono.dev/examples/zod-openapi
- https://zenn.dev/praha/articles/d1d6462a27e37e
