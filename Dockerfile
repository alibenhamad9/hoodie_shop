FROM nginx:alpine

LABEL maintainer="votre.email@exemple.com"
LABEL version="1.0"
LABEL description="Site web DS1 conteneurisé"

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]