FROM alpine:3.16

# for useradd/usermod commands
RUN echo http://dl-2.alpinelinux.org/alpine/edge/community/ >> /etc/apk/repositories
RUN apk add -U shadow

RUN apk add nodejs npm
RUN apk add git
RUN apk update

RUN useradd -m -u 1000 david
USER david
WORKDIR /home/david