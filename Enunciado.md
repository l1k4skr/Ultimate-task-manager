# Desafío: “App de Gestión de Tareas Colaborativa”

## Objetivo

Desarrollar una aplicación web para la gestión de tareas colaborativas que permita a los usuarios crear, asignar y seguir el progreso de las tareas dentro de un equipo.

## Requisitos

1. **Registro e Inicio de Sesión:**
    - Permitir a los usuarios registrarse con un correo electrónico y una contraseña.
    - Implementar la autenticación de usuarios.
2. **Perfil de Usuario:**
    - Cada usuario debe tener un perfil con información básica (nombre, correo, foto de perfil).
3. **Gestión de Equipos:**
    - Los usuarios pueden crear equipos y añadir otros usuarios a sus equipos.
    - Cada equipo debe tener un nombre y una descripción.
4. **Gestión de Tareas:**
    - Los usuarios pueden crear tareas con un título, descripción, fecha límite y estado (pendiente, en progreso, completada).
    - Las tareas pueden ser asignadas a uno o más miembros del equipo.
5. **Visualización de Tareas:**
    - Mostrar una lista de tareas con la posibilidad de filtrar por estado, fecha límite, y miembro asignado.
    - Implementar una vista tipo kanban para gestionar las tareas de manera visual.
6. **Notificaciones:**
    - Enviar notificaciones a los usuarios cuando se les asigne una nueva tarea o cuando una tarea cambie de estado.
7. **Comentarios en Tareas:**
    - Permitir a los usuarios agregar comentarios a las tareas para facilitar la colaboración.
8. **Historial de Actividades:**
    - Registrar las actividades relacionadas con las tareas (creación, asignación, cambio de estado, comentarios) y mostrarlas en un historial.

## Herramientas y Tecnologías Sugeridas

- **Frontend:**
    - HTML, CSS, JavaScript
    - Framework: React, Angular o Vue.js
    - Librerías: Bootstrap, Tailwind CSS
- **Backend:**
    - Lenguajes: Node.js, Python, Ruby
    - Framework: Express.js (Node.js), Django (Python), Ruby on Rails
    - Base de Datos: MongoDB, PostgreSQL, MySQL
- **Autenticación:**
    - JWT (JSON Web Tokens)
    - OAuth (si decides permitir el inicio de sesión con Google, Facebook, etc.)
- **Despliegue:**
    - Heroku, Netlify, Vercel, AWS, DigitalOcean