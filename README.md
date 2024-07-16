# UserFlow

UserFlow es una API diseñada para gestionar un CRUD de usuarios. Utiliza Node.js, Express, MySQL y Prisma, siguiendo el patrón MVC para su estructura.

## Tecnologías Usadas

- Node.js
- Express
- MySQL
- Prisma
- Morgan
- JSON Web Token (JWT)
- Bcrypt

## Herramientas

- Visual Studio Code (VSCode)
- Postman
- Git & GitHub
- MySQL Workbench

## Endpoints

### Usuarios
- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener un usuario por ID
- `POST /users` - Crear un nuevo usuario
- `PUT /users/:id` - Actualizar un usuario por ID
- `DELETE /users/:id` - Eliminar un usuario por ID

### Autenticación
- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Inicio de sesión de usuario

## Estructura del Proyecto

UserFlow/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── userController.js
│ ├── middlewares/
│ │ └── authMiddleware.js
│ ├── models/
│ │ └── user.js
│ ├── routes/
│ │ └── userRoutes.js
│ ├── utils/
│ └── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md

## Contribución

¡Contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva feature'`).
4. Haz push a la rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia. Consulta el archivo [LICENSE](LICENSE) para más detalles.
