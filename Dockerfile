FROM node:lts-alpine AS build

WORKDIR /app

COPY yarn.lock package.json ssr.config.ts tsconfig.json ./
RUN yarn install

COPY src ./src
COPY public ./public
RUN yarn build:ssr

FROM node:lts-alpine AS prod

USER 1001

COPY --from=build /app/.output /app/portfolio

CMD ["node", "/app/portfolio/server/index.mjs"]