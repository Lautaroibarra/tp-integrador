const Acerca = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">Trabajo Integrador</h1>

      <h3 className="about-subtitle">Descripción del proyecto</h3>
      <p className="about-text">
        Esta pagina es una réplica de WhatsApp creada como proyecto final
        en un curso de Desarrollo Web Frontend. Incluye funcionalidades como
        registro de usuarios, envío de mensajes y mantenimiento de sesión
        utilizando React Context.
      </p>

      <h3 className="about-subtitle">Funcionalidades principales</h3>
      <p className="about-text">
        - Creación de cuentas e inicio de sesión.<br />
        - Guardado de sesión con Context y localStorage.<br />
        - Intercambio de mensajes entre usuarios.<br />
        - Navegación entre secciones públicas y privadas con React Router.
      </p>

      <h3 className="about-subtitle">Herramientas utilizadas</h3>
      <p className="about-text">
        React, React Router, Vite, JavaScript, HTML y CSS
      </p>

      <h3 className="about-subtitle">Decisiones de desarrollo</h3>
      <p className="about-text">
        Se decidió usar React Context para gestionar el estado del usuario y
        localStorage para conservar la sesión tras recargar la página. Además,
        se organizó el proyecto en componentes reutilizables para facilitar
        su mantenimiento y la integracion de mejoras a futuro.
      </p>

      <h3 className="about-subtitle">Observaciones</h3>
      <p className="about-text">
        La interfaz se mantiene simple, con el objetivo de enfocarse en la
        funcionalidad y la correcta persistencia de datos.
      </p>

      <a className="about-link" href="/Login">Volver a inicio de sesión</a>
    </div>
  );
};

export { Acerca };