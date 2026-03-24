const Acerca = () => {
  return (
    <div className="aboutpage">
      <h1 className="title-login">Trabajo Integrador</h1>

      <h3>Descripción del proyecto</h3>
      <p>
        Esta pagina es una réplica de WhatsApp creada como proyecto final
        en un curso de Desarrollo Web Frontend. Incluye funcionalidades como
        registro de usuarios, envío de mensajes y mantenimiento de sesión
        utilizando React Context.
      </p>

      <h3>Funcionalidades principale</h3>
      <p>
        - Creación de cuentas e inicio de sesión.<br />
        - Guardado de sesión con Context y localStorage.<br />
        - Intercambio de mensajes entre usuarios.<br />
        - Navegación entre secciones públicas y privadas con React Router.
      </p>

      <h3>Herramientas utilizadas</h3>
      <p>
        React, React Router, Vite, JavaScript, HTML y CSS
      </p>

      <h3>Decisiones de desarrollo</h3>
      <p>
        Se decidió usar React Context para gestionar el estado del usuario y
        localStorage para conservar la sesión tras recargar la página. Además,
        se organizó el proyecto en componentes reutilizables para facilitar
        su mantenimiento y la integracion de mejoras a futuro.
      </p>

      <h3>Observaciones</h3>
      <p>
        La interfaz se mantiene simple, con el objetivo de enfocarse en la
        funcionalidad y la correcta persistencia de datos.
      </p>

      <a href="/">Volver a inicio de sesión</a>
    </div>
  )
}

export { Acerca }