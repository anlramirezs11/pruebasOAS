FROM node:10

COPY ["package.json", "package-lock.json", "/usr/app/"]

WORKDIR /usr/app

RUN npm install -g @angular/cli
RUN npm install

COPY [".", "/usr/app/"]

EXPOSE 4200

