FROM node:12.18.3-alpine3.9

WORKDIR /usr/src/app

COPY ./react_app/package.json .
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp

COPY ./react_app .

RUN npm run build

RUN npm install -g serve