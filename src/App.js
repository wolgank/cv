import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-text">
          <h1>Daniel Gutierrez Janampa</h1>
          <h2>Ingeniero de Software | Desarrollador Full-Stack</h2>
          <p>
            Desarrollador apasionado por crear soluciones tecnológicas
            innovadoras.
          </p>
        </div>
      </header>
      <main>
        {/* Sección: Áreas de Conocimiento */}
        <section className="knowledge">
          <h2>Áreas de Conocimiento</h2>
          <ul>
            <li>Desarrollo Web (Frontend y Backend)</li>
            <li>Inteligencia Artificial y Machine Learning</li>
            <li>DevOps y CI/CD</li>
            <li>Arquitectura de Software</li>
          </ul>
        </section>
        {/* Sección: Educación */}
        <section className="education">
          <h2>Educación</h2>
          <div className="education-item">
            <h3>Universidad Pontificia Universidad Católica del Perú</h3>
            <p>Ingeniero de Software</p>
          </div>
        </section>
        {/* Sección: Habilidades */}
        <section className="skills">
          <h2>Habilidades</h2>
          <div className="skill-list">
            <div className="skill-item">
              <h3>Lenguajes de Programación</h3>
              <p>C++ para programación orientada a funciones y a objetos</p>
              <p>Python para Machine Learning y tratamiento de datos</p>
              <p>Golang</p>
              <p>Java para desarrollo de aplicaciones Backend</p>
              <p>C#</p>
              <p>Assembly</p>
            </div>
            <div className="skill-item">
              <h3>Base de Datos</h3>
              <p>Conocimiento avanzado en bases de datos relacionales</p>
              <p>
                Experiencia trabajando con OracleSQL, MySQL, PSQL y MicrosoftSQL
              </p>
            </div>
            <div className="skill-item">
              <h3>Desarrollo Web</h3>
              <p>
                Desarrollo de aplicaciones web con JavaScript, React, Node.js y
                Vite
              </p>
              <p>Experiencia con C# para desarrollo Frontend</p>
            </div>
            <div className="skill-item">
              <h3>Backend</h3>
              <p>Desarrollo de aplicaciones con Java usando Spring Boot</p>
              <p>Aplicaciones Backend con Python usando FastAPI</p>
              <p>Desarrollo de Backend con NestJS y JavaScript</p>
            </div>
            <div className="skill-item">
              <h3>Versionamiento y Despliegue</h3>
              <p>Versionamiento con GitHub y GitLab</p>
              <p>Despliegue con AWS, EC2, RDS y Docker</p>
            </div>
            <div className="skill-item">
              <h3>Automatización</h3>
              <p>
                Automatización de procesos con AppScript en Gmail, Google Sheets
                y Google Forms
              </p>
            </div>
          </div>
        </section>
        {/* Sección: Idiomas */}
        <section className="languages">
          <h2>Idiomas</h2>
          <ul>
            <li>Español - Nativo</li>
            <li>Inglés - Avanzado</li>
          </ul>
        </section>
        {/* Sección: Proyectos */}
        <section className="projects">
          <h2>Proyectos Destacados</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>Bienestapp Ciencias</h3>
              <p>
                Plataforma para gestionar servicios de bienestar estudiantil.{" "}
                <a
                  href="https://bienestappciencias.inf.pucp.edu.pe/home"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver más
                </a>
              </p>
              <img src="bienestapp.png" alt="Homepage de bienestapp" />
            </div>
            <div className="project-item">
              <h3>Bots de discord</h3>
              <p>
                Bots encargados de responder preguntas frecuentes y verificar
                acceso.
              </p>
              <img src="bots.png" alt="Bots de Discord" />
            </div>
          </div>
        </section>

        {/* Sección: Contacto */}
        <section className="contact">
          <h2>Contacto</h2>
          <p>
            Correo:{" "}
            <a href="mailto:daniel.gutierrez@pucp.edu.pe">
              daniel.gutierrez@pucp.edu.pe
            </a>
          </p>
          <p>Teléfono: +51 973 573 803</p>
          <p>
            LinkedIn:{" "}
            <a href="www.linkedin.com/in/daniel-gutierrez-janampa">
              linkedin.com/in/daniel-gutierrez-janampa
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
