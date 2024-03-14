FROM node:18-alpine3.18

WORKDIR /build
COPY . .
RUN rm package-lock.json
RUN rm -rf node_modules
RUN npm i
CMD npm run test