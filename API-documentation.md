# UserFlow API Documentation

## Introducción

Esta documentación describe las rutas y métodos disponibles en la API de UserFlow. La API requiere autenticación mediante API Key o JWT para acceder a ciertas funcionalidades.

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

## Autenticación

### Registro de Usuario

#### POST /api/users/register

Crea un nuevo usuario en la plataforma.

```javascript
Body:
{
  "name": "Nombre del usuario",
  "lastName": "Apellido del usuario",
  "email": "correo@ejemplo.com",
  "password": "contraseña"
}

Respuesta exitosa (201):
{
  "message": "Usuario registrado exitosamente.",
  "apiKey": "nueva_api_key_generada"
}
```

### Inicio de Sesión

#### POST /api/users/login

Inicia sesión con las credenciales proporcionadas y obtiene un token JWT.

```javascript
Body:
{
  "email": "correo@ejemplo.com",
  "password": "contraseña"
}

Respuesta exitosa (200):
{
  "token": "token_jwt"
}
```

### Regenerar API Key

#### POST /api/users/regenerate-api-key

Regenera la API Key del usuario autenticado. Requiere un token JWT en el encabezado Authorization.

```javascript
Respuesta exitosa (200):
{
  "message": "API Key actualizada correctamente.",
  "apiKey": "nueva_api_key_generada"
}
```

## Clientes

### Obtener Todos los Clientes

#### GET /api/clients

Obtiene todos los clientes asociados al usuario autenticado.

```javascript
Respuesta exitosa (200):
[
  {
    "id": 1,
    "name": "Nombre del cliente",
    "email": "correo@cliente.com",
    "createdAt": "fecha_de_creación",
    "updatedAt": "última_actualización"
  },
  ...
]
```

### Obtener Cliente por ID

#### GET /api/clients/:id

Obtiene un cliente específico por su ID. Requiere un token JWT en el encabezado Authorization.

```javascript
Respuesta exitosa (200):
{
  "id": 1,
  "name": "Nombre del cliente",
  "email": "correo@cliente.com",
  "createdAt": "fecha_de_creación",
  "updatedAt": "última_actualización"
}
```

### Crear Nuevo Cliente

#### POST /api/clients

Crea un nuevo cliente asociado al usuario autenticado. Requiere un token JWT en el encabezado Authorization.

```javascript
Body:
{
  "name": "Nombre del cliente",
  "lastName": "Apellido del cliente",
  "email": "correo@cliente.com",
  "password": "contraseña"
}

Respuesta exitosa (201):
{
  "id": 1,
  "name": "Nombre del cliente",
  "email": "correo@cliente.com",
  "createdAt": "fecha_de_creación",
  "updatedAt": "última_actualización"
}
```

### Actualizar Cliente por ID

#### PUT /api/clients/:id

Actualiza los detalles de un cliente específico por su ID. Requiere un token JWT en el encabezado Authorization.

```javascript
Body:
{
  "name": "Nuevo nombre del cliente",
  "lastName": "Nuevo apellido del cliente",
  "email": "nuevo_correo@cliente.com"
}

Respuesta exitosa (200):
{
  "id": 1,
  "name": "Nuevo nombre del cliente",
  "email": "nuevo_correo@cliente.com",
  "createdAt": "fecha_de_creación",
  "updatedAt": "última_actualización"
}
```

### Eliminar Cliente por ID

#### DELETE /api/clients/:id

Elimina un cliente específico por su ID. Requiere un token JWT en el encabezado Authorization.

```javascript
Respuesta exitosa (200):
{
  "message": "Cliente eliminado correctamente."
}
```
