FROM node:lts-alpine AS build

WORKDIR /app

COPY yarn.lock package.json ./
RUN yarn install

COPY . .
RUN yarn build

FROM bitnami/nginx:latest AS prod

COPY --from=build /app/dist /var/www/html/portfolio

COPY --from=build /app/nginx.conf /opt/bitnami/nginx/conf/server_blocks/my_server_block.conf
