# Chat UTN - Trabajo Práctico Final

Aplicación web de mensajería desarrollada como trabajo práctico final para la materia Desarrollo Web Frontend.

El proyecto consiste en un sistema de chat con gestión de usuarios, persistencia de sesión y navegación entre distintas vistas, aplicando conceptos modernos de React.

## Funcionalidades

### Funcionalidades obligatorias

* Registro de usuario (`/registro`)
* Validaciones de formulario:

  * Nombre (mínimo 3 caracteres)
  * Email (formato válido)
  * Contraseña (mínimo 6 caracteres)
* Persistencia de usuario con Context
* Sesión mantenida incluso al recargar la página
* Página pública de documentación (`/acerca`)
* Sistema de chat funcional
* Diseño responsive (incluye menú lateral ocultable en mobile)

### Funcionalidades extra

* Login / Logout
* Sidebar responsive con botón hamburguesa
* UI personalizada (tema rojo/gris)
* Buscador de usuarios en tiempo real
* Mensajes dinámicos

## Tecnologías utilizadas

* React
* Vite
* JavaScript (ES6+)
* CSS3 (Flexbox + Responsive Design)
* React Context API
* React Router

## Estructura del proyecto

src/
* components/
  * Aside.jsx
  * Chat.jsx
* context/
  * ChatContext.jsx
* pages/
  * Login.jsx
  * Register.jsx
  * About.jsx
* styles/
  * main.css
* App.jsx


## Instalación y ejecución

1. Clonar el repositorio:

bash
git clone https://github.com/Lautaroibarra/tp-integrador


2. Entrar a la carpeta:

bash
cd tp-integrador

3. Instalar dependencias:

bash
npm install

4. Ejecutar el proyecto:

bash
npm run dev

## Deploy

El proyecto está preparado para ser desplegado en:

* Vercel

Pasos básicos:

1. Subir el repositorio a GitHub
2. Conectar con Vercel
3. Deploy automático

## Decisiones de desarrollo

* Uso de Context API para manejar estado global
* Separación en componentes (Aside, Chat)
* Implementación de diseño responsive tipo aplicación móvil
* Manejo de rutas con React Router
* Validaciones del lado del cliente para mejorar UX

## Página de documentación

El proyecto incluye una página accesible públicamente:

/acerca

Contiene:

* Explicación del proyecto
* Tecnologías utilizadas
* Decisiones técnicas
* Observaciones personales

## Dificultades encontradas

* Manejo de estado entre componentes (Aside y Chat)
* Implementación del menú responsive
* Persistencia del usuario al recargar la página
* Adaptación de SVG a JSX

## Autor

**Lautaro Agustín Ibarra**

## Estado del proyecto

Funcional
Cumple con los requisitos obligatorios
Listo para deploy

---

## Links

* Repositorio: https://github.com/Lautaroibarra/tp-integrador
* Deploy: tp-integrador-pearl.vercel.app
* DeepWiki: https://deepwiki.com/Lautaroibarra/tp-integrador