
# UserFlow API Documentation

Esta documentación detalla las rutas de la API de UserFlow, incluyendo los métodos HTTP, parámetros y ejemplos de respuestas.

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

## Usuarios

### Obtener todos los usuarios

- **URL:** `/users`
- **Método:** `GET`
- **Descripción:** Obtener una lista de todos los usuarios.
- **Parámetros de URL:** Ninguno
- **Respuesta Exitosa:**
  - **Código:** 200
  - **Cuerpo:**
    ```json
    [
      {
        "id": 1,
        "email": "example1@example.com",
        "createdAt": "2024-06-01T12:34:56.789Z",
        "updatedAt": "2024-06-01T12:34:56.789Z"
      },
      {
        "id": 2,
        "email": "example2@example.com",
        "createdAt": "2024-06-01T12:34:56.789Z",
        "updatedAt": "2024-06-01T12:34:56.789Z"
      }
    ]
    ```

### Obtener un usuario por ID

- **URL:** `/users/:id`
- **Método:** `GET`
- **Descripción:** Obtener los detalles de un usuario específico por su ID.
- **Parámetros de URL:**
  - `id` - ID del usuario
- **Respuesta Exitosa:**
  - **Código:** 200
  - **Cuerpo:**
    ```json
    {
      "id": 1,
      "email": "example1@example.com",
      "createdAt": "2024-06-01T12:34:56.789Z",
      "updatedAt": "2024-06-01T12:34:56.789Z"
    }
    ```

### Crear un nuevo usuario

- **URL:** `/users`
- **Método:** `POST`
- **Descripción:** Crear un nuevo usuario.
- **Cuerpo de la Solicitud:**
  - `email` - Email del usuario (String)
  - `password` - Contraseña del usuario (String)
- **Respuesta Exitosa:**
  - **Código:** 201
  - **Cuerpo:**
    ```json
    {
      "id": 3,
      "email": "example3@example.com",
      "createdAt": "2024-06-01T12:34:56.789Z",
      "updatedAt": "2024-06-01T12:34:56.789Z"
    }
    ```

### Actualizar un usuario por ID

- **URL:** `/users/:id`
- **Método:** `PUT`
- **Descripción:** Actualizar los detalles de un usuario específico por su ID.
- **Parámetros de URL:**
  - `id` - ID del usuario
- **Cuerpo de la Solicitud:**
  - `email` - Nuevo email del usuario (String)
  - `password` - Nueva contraseña del usuario (String)
- **Respuesta Exitosa:**
  - **Código:** 200
  - **Cuerpo:**
    ```json
    {
      "id": 1,
      "email": "updated@example.com",
      "createdAt": "2024-06-01T12:34:56.789Z",
      "updatedAt": "2024-06-02T12:34:56.789Z"
    }
    ```

### Eliminar un usuario por ID

- **URL:** `/users/:id`
- **Método:** `DELETE`
- **Descripción:** Eliminar un usuario específico por su ID.
- **Parámetros de URL:**
  - `id` - ID del usuario
- **Respuesta Exitosa:**
  - **Código:** 204
  - **Cuerpo:** Ninguno

## Autenticación

### Registro de usuario

- **URL:** `/auth/register`
- **Método:** `POST`
- **Descripción:** Registrar un nuevo usuario.
- **Cuerpo de la Solicitud:**
  - `email` - Email del usuario (String)
  - `password` - Contraseña del usuario (String)
- **Respuesta Exitosa:**
  - **Código:** 201
  - **Cuerpo:**
    ```json
    {
      "id": 3,
      "email": "newuser@example.com",
      "createdAt": "2024-06-01T12:34:56.789Z",
      "updatedAt": "2024-06-01T12:34:56.789Z"
    }
    ```

### Inicio de sesión de usuario

- **URL:** `/auth/login`
- **Método:** `POST`
- **Descripción:** Iniciar sesión de un usuario.
- **Cuerpo de la Solicitud:**
  - `email` - Email del usuario (String)
  - `password` - Contraseña del usuario (String)
- **Respuesta Exitosa:**
  - **Código:** 200
  - **Cuerpo:**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

## Respuestas de Error Comunes

- **400 Bad Request:** Solicitud malformada o parámetros inválidos.
- **401 Unauthorized:** Autenticación fallida o falta de token.
- **403 Forbidden:** Acceso denegado.
- **404 Not Found:** Recurso no encontrado.
- **500 Internal Server Error:** Error en el servidor.