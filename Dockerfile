FROM node
WORKDIR /NEST-API
COPY . .
COPY ./docker-entrypoint.sh /home/NEST-API/docker-entrypoint.sh
RUN npm i
RUN chmod +x /home/NEST-API/docker-entrypoint.sh
EXPOSE 8080
ENTRYPOINT ["/home/NEST-API/docker-entrypoint.sh"]
