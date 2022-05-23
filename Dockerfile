FROM node:14.19 AS builder

# Create app directory
## For Hot-Reloading, the docker-compose file should add the volume at the same directory,e.g volumes: - .:/app
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

COPY . .

RUN npm run build


FROM node:14.19-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.output ./.output

## Expose NUXT PORT
EXPOSE 3000

# SET NUXT ENV
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

HEALTHCHECK CMD curl --fail --duration=10s --timeout=5s http://0.0.0.0:3000 || exit 1

CMD [ "npm", "run", "start" ]
