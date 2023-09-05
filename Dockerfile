ARG version=18.17.0

FROM node:${version}

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

EXPOSE 4000

CMD ["npm","start"]
