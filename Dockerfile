# --- Build stage ---
    FROM node:20-bullseye AS builder

    WORKDIR /app
    COPY . .
    
    RUN npm ci
    RUN npx prisma generate
    RUN npm run build
    RUN npm prune --production
    
    # --- Production stage ---
    FROM node:20-bullseye AS runner
    
    WORKDIR /app
    RUN addgroup --system --gid 1001 nodejs
    RUN adduser --system --uid 1001 grpcuser

    # ↓ ここを runner ステージに追加
    COPY --from=builder --chown=grpcuser:nodejs /app/dist ./dist
    COPY --from=builder --chown=grpcuser:nodejs /app/proto ./proto
    COPY --from=builder --chown=grpcuser:nodejs /app/node_modules ./node_modules
    COPY --from=builder --chown=grpcuser:nodejs /app/prisma ./prisma
    COPY --from=builder --chown=grpcuser:nodejs /app/package.json ./package.json
    
    USER grpcuser
    EXPOSE 50051
    
    CMD ["node", "/app/dist/src/server.js"]
    