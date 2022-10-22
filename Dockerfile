FROM node:14-alpine as build-step

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine
EXPOSE 80
COPY --from=build-step /app/nginx/conf.d /etc/nginx/conf.d
COPY --from=build-step /app/dist /usr/share/nginx/html