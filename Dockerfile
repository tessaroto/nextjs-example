FROM node:12-alpine

RUN apk update \
		&& apk upgrade \
		&& apk add bash \
		&& apk add curl
		
WORKDIR /usr/app

COPY . /usr/app/

RUN npm clean-install --production \
		&& npm run-script build

# Add node-user user so we aren't running as root.
RUN adduser -S node-user -h /usr/app \
    && chown -R node-user /usr/app

USER node-user

EXPOSE 3000

CMD ["npm", "start"]
