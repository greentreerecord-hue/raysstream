FROM node:18

WORKDIR /app

COPY . .

RUN corepack enable
RUN pnpm install
RUN pnpm prisma generate
RUN pnpm --filter @raysstream/web build

EXPOSE 3000

CMD ["pnpm", "--filter", "@raysstream/web", "start"]  
