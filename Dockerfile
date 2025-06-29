# voting-system-web/Dockerfile
FROM node:20

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

RUN yarn global add serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
