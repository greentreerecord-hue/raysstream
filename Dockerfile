FROM node:18
WORKDIR /app
COPY . . 
RUN corepack enable
RUN pnpm install
RUN pnpm --filter@raysstream/web build 
CMD
("pnpm","--filter","@raysstream/web","start,
")