FROM node:18-alpine

WORKDIR /app

COPY . .

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm install

# 🔥 THIS IS THE FIX (correct way)
RUN npx prisma generate --schema=packages/db/prisma/schema.prisma

RUN pnpm --filter @raysstream/web build

CMD ["pnpm", "--filter", "@raysstream/web", "start"]  

 
