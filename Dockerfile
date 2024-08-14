FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/dist .

RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", ".", "-l", "5173"]