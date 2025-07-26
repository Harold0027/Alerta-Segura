Alerta Segura

Alerta Segura es un sistema web comunitario diseñado para que los ciudadanos de Lima Norte puedan reportar de forma rápida y sencilla incidentes que afectan su entorno, como robos, fallas en el alumbrado público, acumulación de basura o emergencias médicas. Este proyecto busca fortalecer la seguridad ciudadana y mejorar la comunicación entre vecinos y autoridades locales. A través de una plataforma digital accesible, se facilita el registro, seguimiento y visualización de reportes comunitarios en tiempo real.


Funcionalidades

- Registro e inicio de sesión de usuarios.
- Creación de reportes con descripción, ubicación y evidencia multimedia.
- Visualización de reportes en tiempo real.
- Gestión y clasificación de reportes por parte de moderadores.
- Seguimiento del estado del incidente (pendiente, derivado, resuelto).
- Visualización de reportes en mapa.
- Calificación del servicio recibido.
- Exportación de estadísticas (opcional).


Arquitectura del Proyecto

Frontend: HTML, CSS, JavaScript (o framework como React/Vue)
Backend: Node.js / Express (puede usarse PHP, Java o Python)
Base de datos: MySQL / PostgreSQL
Diseño: Figma
Gestión de tareas: Trello


Estructura de Base de Datos (modelo físico)

Tabla: `Usuario`
| Campo       | Tipo           | Restricciones                      |
|-------------|----------------|------------------------------------|
| id_usuario  | INT            | PRIMARY KEY, AUTO_INCREMENT        |
| nombre      | VARCHAR(100)   | NOT NULL                           |
| correo      | VARCHAR(100)   | UNIQUE, NOT NULL                   |
| contraseña  | VARCHAR(100)   | NOT NULL                           |
| rol         | VARCHAR(20)    | DEFAULT 'ciudadano'                |

Tabla: `Incidente`
| Campo           | Tipo           | Restricciones                     |
|----------------|----------------|-----------------------------------|
| id_incidente   | INT            | PRIMARY KEY, AUTO_INCREMENT       |
| tipo_incidente | VARCHAR(50)    | NOT NULL                          |
| descripcion    | TEXT           |                                   |
| ubicacion      | VARCHAR(150)   | NOT NULL                          |
| prioridad      | VARCHAR(10)    | DEFAULT 'media'                   |
| estado         | VARCHAR(20)    | DEFAULT 'pendiente'               |
| fecha_reporte  | DATETIME       | DEFAULT CURRENT_TIMESTAMP         |
| id_usuario     | INT            | FOREIGN KEY → Usuario(id_usuario) |


Roles en el Sistema

Vecino (usuario): Reporta incidentes y consulta el estado.
Moderador: Valida y deriva los reportes.
Autoridades: Atienden los reportes clasificados.
Juntas vecinales / Empresas (opcional): Coordinan o patrocinan.


Instrucciones para contribuir

Haz un fork del proyecto
Crea una rama
Realiza tus cambios y haz commit
Sube tu rama
Abre un Pull Request


Licencia

Este proyecto es de código abierto y puede ser adaptado o reutilizado para fines académicos o comunitarios.


