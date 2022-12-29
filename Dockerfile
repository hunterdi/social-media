FROM node:16.13.2-slim
EXPOSE 3000 3001

# RUN mkdir /app && chown -R node:node /app

# USER node

# COPY package.json /app/
# RUN cd /app && yarn

# WORKDIR /app

# COPY --chown=node:node . /app

# RUN yarn build

# CMD [ "yarn", "api:start:dev" ]

RUN npm install -g @nestjs/cli@9.1.4

USER node

WORKDIR /home/node/app