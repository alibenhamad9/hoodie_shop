FROM nginx:alpine

LABEL maintainer="votre.email@exemple.com"
LABEL version="1.0"
LABEL description="Site web DS1 conteneurisé"

COPY index.html  /usr/share/nginx/html/
COPY inscription.html  /usr/share/nginx/html/
COPY produits.html  /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY javascript.js /usr/share/nginx/html/
COPY hoodie-noir.png  /usr/share/nginx/html/
COPY hoodie-gris.png  /usr/share/nginx/html/
COPY hoodie-blanc.png /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]