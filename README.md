# School Website

El sitio web tiene varias secciones públicas incluyendo Home, Nuestro Colegio, Proyectos institucionales, Niveles Academicos, Admisiones, Noticias y contacto. Tambien cuenta con una sección privada para el Panel de Administración donde se gestionan todos estos recursos y cuenta con roles y permisos específicos. 


## Tecnologías Utilizadas

- **Vite**: Un entorno de desarrollo rápido y optimizado para aplicaciones web.
- **React**: Biblioteca para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo.
- **NextUI**: Biblioteca de UI.
- **Tremor/react**: Biblioteca para mostrar graficos.


## Configuración de Entorno

Crea un archivo .env en la raíz del proyecto para gestionar las variables de entorno. Un ejemplo de archivo .env podría ser:

```makefile
    NODE_ENV=development
    VITE_API=http://localhost:3000/api/v1
    VITE_SUBDOMAIN=administration-panel
```

# Ejecución en Local

Para iniciar la ejecución en entorno de desarrollo, utiliza el siguiente comando:
```sh
    npm run dev
```

# Ejecución en Producción
Para ejecutar la API en producción necesitas configurar las credenciales en el archivo .env y ejecutar los siguientes comandos:

```sh 
    docker-compose build 
    docker-compose up -d 
```