# Stage 1
#Use explicit and deterministic Docker base image tags
#since tag number not specified, using SHA256 of lts version
FROM node:lts-alpine@sha256:8c94a0291133e16b92be5c667e0bc35930940dfa7be544fb142e25f8e4510a45 as build-step

#Optimize Node.js tooling for production
#ENV NODE_ENV production

RUN mkdir -p /app/angular-template

WORKDIR /app/angular-template

COPY ./package*.json /app/angular-template

#Install only production dependencies in the Node.js Docker image
#npm ci --only=production
#but for angular scripts we need angular/cli...therefore dev-dependencies
RUN npm install @angular/cli@12.2.0 \
    && npm ci

#Copy contents of current directory to working dir 
COPY . /app/angular-template
#COPY ./dist /app/angular-template

#build angular
RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine

#COPY --from=build-step /app/angular-template /usr/share/nginx/html
COPY --from=build-step /app/angular-template/dist /usr/share/nginx/html

#informs Docker that the nginx container listenes network port 80 at runtime
#port 80 and servername localhost is default configuration of nginx
EXPOSE 80

