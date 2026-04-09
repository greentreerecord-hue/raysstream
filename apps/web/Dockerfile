FROM node:18-alpine

WORKDIR /app

COPY . .

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm install
RUN pnpm exec prisma generate--schema-packages/db/prism/schema.prisma 
RUN pnpm --filter @raysstream/db prisma generate
RUN pnpm --filter @raysstream/web build

CMD ["pnpm", "--filter", "@raysstream/web", "start"] 


 
