# Servidor del Awesome profile cards

En este proyecto vamos a desarrollar nuestro primer servidor web.

### Objetivos

- Consolidar el aprendizaje de las tecnologías Node JS y Express JS para aprender a escuchar peticiones desde los navegadores.
- Consolidar el aprendizaje de SQL para trabajar con bases de datos y guardar los datos de las usuarias de forma persistente.
- Consolidar el aprendizaje de API Rest para saber cómo estructurar y organizar las comunicaciones entre un navegador y un servidor de forma óptima.
- Ser capaces de realizar un proyecto web completo, sin necesidad de solicitar ayuda a ningún otro equipo de desarrollo.
- Ser capaces de poner en producción un proyecto completo: front end + back end.
  Mejorar la comunicación entre los miembros del equipo y con otros equipos de desarrollo.

### Caso de uso

Con este servidor podemos demostrar que tenemos un perfil full stack (front end + back end) y que somos desarrolladoras versátiles capaces de trabajar en cualquier departamento técnico de una empresa de desarrollo.

### Especificaciones

En el módulo 3 hemos utilizado un servidor desarrollado por las profesoras de Adalab. Puesto que el objetivo de este proyecto es replicar la funcionalidad de dicho servidor, vamos a utilizarlo de guía para saber qué debemos desarrollar.

#### Crear una nueva tarjeta a través del API

La web envía una petición con datos al servidor para crear una tarjeta. La información de esta petición la podemos ver en el anexo del proyecto del módulo 2.

#### Visualizar una tarjeta existente a través del motor de plantillas

Cada vez que se crea una tarjeta desde la web, el servidor asocia una URL a cada tarjeta.

Cuando se accede a esta URL el servidor debe mostrar una página con los datos de la tarjeta:

- Datos de la usuaria
- Foto de la usuaria
- Colores de la tarjeta

#### Servidor de estáticos

En el módulo 3 estamos utilizando el servidor GitHub Pages para publicar nuestras web. Ahora vamos a crear nuestro propio servidor.

#### Servidor de producción

Una vez finalizado el servidor lo publicaremos o lo desplegaremos (que es lo mismo) en un servidor real, para que cualquier usuaria pueda acceder a nuestra página.

### Historias de usuario

Para la gestión del proyecto, usaremos historias de usuario, que es una herramienta para definir las características de un producto que hemos visto en detalle durante el curso.

#### API

- Creación de un servidor básico.
- Creación de un API Rest para poder crear tarjetas, guardándolas en un array del servidor.

#### Servidor de estáticos

- Creación de un servidor de estáticos para poder servir la página del módulo 3 desde el nuevo servidor.

#### Motor de plantillas

- Creación de un motor de plantillas para poder visualizar las tarjetas creadas.

#### Bases de datos

- En la primera historia hemos guardado las tarjetas creadas en un array del servidor.
- En esta historia debemos guardar las tarjetas en base de datos.
- Cuando una usuaria visualice una tarjeta debemos recuperar esa información desde la base de datos para poder mostrarla.
