### INSTANT
Proyecto de red social estilo Instagram usando React/Redux sin uso de API's.
---
###PROYECTO TERMINADO (SOLO POSIBLES CAMBIOS LEVES)
---

El objetivo de este proyecto es afianzar mis conocimientos en react/redux usando localhost y json server para la base de datos.
Si bien el proyecto nunca sera deployado, el mismo puede ser descargado por cualquiera para fines educativos, ya sea por si quieren hacer alguna aplicacion similar, si simplemente quieren mirar el codigo de curiosidad o cualquier otro motivo.
El proyecto no cuenta con sistema de login/register, si no que ya viene creado para "loggearse" automaticamente con una cuenta de muestra la cual podras modificar cambiando su nombre, fotos, haciendo posts, siguiendo gente, etc, y todos esos cambios quedaran guardados en el archivo db.json el cual al levantarlo con json server simula una base de datos.

Para ejecutar el proyecto hay que hacer *npm start* en una consola, mientras hacemos *npm run server* en otra, de esta manera levantamos base de datos en un host y pagina en otro (el proyecto viene configurado para buscar los datos en localhost/3001 y usa localhost/3000 para la pagina, si en tu caso se levantan en otros puertos, vas a tener que cambiar manualmente todos los links por el link correspondiente o configurar node para levantar el servidor en 3001 y la pagina en 3000)


###RECOMENDACIONES
---
Al postear y no tener una base de datos, la solucion fue transformar las imagenes en Base64 con el uso de *readAsDataURL*, lo que trae el problema de que dependiendo de la imagen a subir, la transformacion a string puede llegar a crear un texto de miles de caracteres, asi que recomiendo que no se realicen posts en exceso o que en caso de hacerlos, se devuelva el archivo *db.json* a su estado original
