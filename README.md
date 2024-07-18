# UserFlow

UserFlow es una API diseñada para gestionar un CRUD de clientes, incorporando un sistema de autenticación basado en API keys. Los usuarios registrados pueden generar y utilizar una API key única para interactuar de manera segura con el backend.

## Endpoints

### Usuarios Autenticación

- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Inicio de sesión de usuario
- `POST /api/users/regenerate-api-key` - Regenera la API Key del usuario autenticado

### Clientes

- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener un usuario por ID
- `POST /users` - Crear un nuevo usuario
- `PUT /users/:id` - Actualizar un usuario por ID
- `DELETE /users/:id` - Eliminar un usuario por ID

## API-documentation

Archivo : ```API-documentation.md```

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
- **ES6**: Versión de JavaScript con nuevas características.

## Herramientas

- Visual Studio Code (VSCode)
- Insomnia
- Git & GitHub
- MySQL Workbench

## Estructura del Proyecto

```
UserFlow/
├── prisma/
│ ├── migrations/
│ └── schema.prisma
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── clientController.js
│ │ └── userController.js
│ ├── middlewares/
│ │ └── authMiddleware.js
│ ├── routes/
│ │ ├── client.Routes.js
│ │ └── user.Routes.js
│ ├── utils/
│ └── index.js
├── .env.example
├── .gitignore
├── API-documentation.md
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

- **Dia/Mes/Año** : 16-06-2024

### Historial de Actualizaciones

- **16-06-2024**: Se definieron los endpoints y se agregaron las rutas iniciales.
- **15-06-2024**: Se agregó la estructura básica del proyecto y las configuraciones iniciales.
- **15-06-2024**: Inicio del proyecto UserFlow.
