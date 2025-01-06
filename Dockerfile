FROM node:lts-alpine AS build

WORKDIR /app

COPY package-lock.json package.json app.config.ts tsconfig.json ./
RUN npm install

COPY src ./src
COPY public ./public
RUN npm run build

FROM node:lts-alpine AS prod

USER 1001

COPY --from=build /app/.output /app/portfolio

CMD ["node", "/app/portfolio/server/index.mjs"]
