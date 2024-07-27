# UserFlow

UserFlow es una API diseñada para gestionar un CRUD de clientes, incorporando un sistema de autenticación basado en API keys. Los usuarios registrados pueden generar y utilizar una API key única para interactuar de manera segura con el backend.

## Despliegue

El proyecto UserFlow ha sido desplegado en [Render](https://render.com). Puedes acceder a la aplicación en el siguiente enlace:

- **URL de la aplicación**: [https://userflow-7y2o.onrender.com](https://userflow-7y2o.onrender.com)

### Documentación de la API

La documentación de la API generada con Swagger está disponible en el siguiente enlace:

- **Swagger Docs**: [https://userflow-7y2o.onrender.com/api-docs](https://userflow-7y2o.onrender.com/api-docs)

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web minimalista para Node.js.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **Prisma**: ORM para consultas de bases de datos en Node.js.
- **Morgan**: Middleware para registrar solicitudes HTTP.
- **JSON Web Token (JWT)**: Estándar para crear tokens de acceso.
- **Bcrypt**: Biblioteca para hashing de contraseñas.
- **dotenv**: Módulo para gestionar variables de entorno.
- **uuid**: Librería para generar identificadores únicos universales.
- **CORS**: Middleware para habilitar Cross-Origin Resource Sharing en la aplicación.
- **ES6**: Versión de JavaScript con nuevas características.
- **Swagger**: Herramienta para generar documentación y pruebas de APIs RESTful.

## Herramientas

- Visual Studio Code (VSCode)
- Insomnia
- Git & GitHub
- MySQL Workbench

## Estructura del Proyecto

```

UserFlow/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/v1
│   │   ├── clientController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── authApiKeyMiddleware.js
│   │   └── authTokenMiddleware.js
│   ├── models/v1
│   │   ├── clientModel.js
│   │   └── userModel.js
│   ├── routes/v1
│   │   ├── client.Routes.js
│   │   ├── home.Routes.js
│   │   └── user.Routes.js
│   ├── utils/
│   │   ├── corsOptions.js
│   │   ├── generateApiKey.js
│   │   ├── generateJWT.js
│   │   └── hashPassword.js
│   └── index.js
├── swagger/v1
│   ├── components/
│   │   ├── schemas/
│   │   │   ├── UserRegistration.js
│   │   │   ├── UserLogin.js
│   │   │   ├── Client.js
│   │   │   ├── ClientInput.js
│   │   │   └── ClientUpdateInput.js
│   │   └── securitySchemes/
│   │       ├── apiKeyAuth.js
│   │       └── bearerAuth.js
│   ├── paths/
│   │   ├── clients/
│   │   │   ├── getAllClients.js
│   │   │   ├── createClient.js
│   │   │   └── clientById.js
│   │   └── users/
│   │       ├── deleteUser.js
│   │       ├── register.js
│   │       ├── login.js
│   │       └── regenerateApiKey.js
│   ├── info.js
│   ├── servers.js
│   ├── main.js
│   └── swaggerSpec.js
├── .env.example
├── .gitignore
├── package.json
└── README.md

```

## Contribución

¡Contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva feature'`).
4. Haz push a la rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Última Actualización

- **Dia/Mes/Año** : 26-07-2024

### Historial de Actualizaciones

- **26-07-2024**: Implementación de CORS para habilitar Cross-Origin Resource Sharing.
- **26-07-2024**: Despliegue del proyecto en Render.
- **25-07-2024**: Refactorizacion de Codigo.
- **23-07-2024**: Implementación de la ruta / para verificar el estado del servidor con enlaces a la documentación de Swagger.
- **20-07-2024**: Implementacion de Swagger
- **16-07-2024**: Se definieron los endpoints y se agregaron las rutas iniciales.
- **15-07-2024**: Se agregó la estructura básica del proyecto y las configuraciones iniciales.
- **15-07-2024**: Inicio del proyecto UserFlow.
