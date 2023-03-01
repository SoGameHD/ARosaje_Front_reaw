FROM node:18.14.1

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g npm@latest
RUN npm i -g @react/cli

RUN npm install

COPY . .

RUN npm run build

CMD npm start --host 0.0.0.0 --port 4200
