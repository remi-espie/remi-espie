FROM node:lts-alpine AS build

USER 1001

WORKDIR /app

COPY yarn.lock package.json ssr.config.ts tsconfig.json ./
RUN yarn install

COPY src public ./
RUN yarn build:ssr

FROM bitnami/node:latest AS prod

USER 1001

COPY --from=build /app/.output /app/portfolio

RUN node /app/portfolio/server/index.mjs