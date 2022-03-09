#stage #1
FROM node:lts-alpine as build-step

RUN mkdir -p /app/angular-template

WORKDIR /app/angular-template

COPY ./package*.json /app/angular-template

#for angular scripts we need angular/cli...therefore dev-dependencies
RUN npm install @angular/cli@12.2.0 \
    && npm ci

#Copy contents of current directory to working dir 
COPY . /app/angular-template

#build angular
RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/angular-template/dist /usr/share/nginx/html

#informs Docker that the nginx container listenes network port 80 at runtime
#port 80 and servername localhost is default configuration of nginx
EXPOSE 80

