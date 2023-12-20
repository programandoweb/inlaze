#!/bin/bash

# Construir la imagen de Docker
docker rmi programandoweb/inlaze:front
docker build -t programandoweb/inlaze:front .

# Subir la imagen a Docker Hub (asegúrate de haber iniciado sesión antes de ejecutar este comando)
docker stop inlaze
docker rm inlaze

# Ejecutar el contenedor Docker
docker run -d --name inlaze -p 3000:3000 --restart=always programandoweb/inlaze:front
