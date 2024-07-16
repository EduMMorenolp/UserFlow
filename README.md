# UserFlow

UserFlow es una API diseñada para gestionar un CRUD de usuarios.

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

## Estructura del Proyecto

```
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
