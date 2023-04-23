FROM node:18.16.0-bullseye-slim

EXPOSE 80
RUN npm install -g npm@9.6.5
RUN yarn add ts-node -g
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY tsconfig.json ./
COPY operations/ ./operations/
COPY repositories ./repositories/
COPY index.ts ./
COPY types.d.ts ./

ENTRYPOINT ["npx", "ts-node", "index.ts"]
