# UserFlow

UserFlow es una API diseñada para gestionar un CRUD de usuarios, incorporando un sistema de autenticación basado en API keys. Los usuarios registrados pueden generar y utilizar una API key única para interactuar de manera segura con el backend.

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web minimalista para Node.js.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **Prisma**: ORM para consultas de bases de datos en Node.js.
- **Morgan**: Middleware para registrar solicitudes HTTP.
- **JSON Web Token (JWT)**: Estándar para crear tokens de acceso.
- **Bcrypt**: Biblioteca para hashing de contraseñas.
- **dotenv**: Módulo para gestionar variables de entorno.
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
│ │ └── userController.js
│ ├── middlewares/
│ │ └── authMiddleware.js
│ ├── models/
│ │ └── user.js
│ ├── routes/
│ │ └── user.Routes.js
│ ├── utils/
│ └── index.js
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

- **Dia/Mes/Año** : 16-06-2024

### Historial de Actualizaciones

- **16-06-2024**: Se definieron los endpoints y se agregaron las rutas iniciales.
- **15-06-2024**: Se agregó la estructura básica del proyecto y las configuraciones iniciales.
- **15-06-2024**: Inicio del proyecto UserFlow.
