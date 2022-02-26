FROM node:14

RUN mkdir /final

WORKDIR /final

COPY ./package.json /final

RUN yarn install

COPY . /final

RUN yarn build

CMD ["yarn", "dev"]