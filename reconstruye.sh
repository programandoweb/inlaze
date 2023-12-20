#!/bin/bash

# Nombre del contenedor2
CONTAINER_NAME2="inlaze"

if [ "$(docker ps -q -f name=${CONTAINER_NAME2})" ]; then
    echo "Deteniendo el contenedor ${CONTAINER_NAME2}..."
    docker stop ${CONTAINER_NAME2}
fi

# Eliminar el contenedor si existe
if [ "$(docker ps -aq -f name=${CONTAINER_NAME2})" ]; then
    echo "Eliminando el contenedor ${CONTAINER_NAME2}..."
    docker rm ${CONTAINER_NAME2}
fi

# Ejecutar el contenedor MariaDB
echo "Ejecutando el contenedor ${CONTAINER_NAME2}..."
#docker pull programandoweb/${CONTAINER_NAME2}:front
docker run -d --name ${CONTAINER_NAME2} -p 3000:3000 --restart=always programandoweb/${CONTAINER_NAME2}:front
