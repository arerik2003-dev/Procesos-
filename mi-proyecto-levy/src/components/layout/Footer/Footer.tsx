import Style from "./Footer.module.css";

function Footer() {
  const year = new Date();

  return (
    <footer className={Style.footer}>
      <div className={Style.text}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{ color: "#d08700" }}>
                Institución
              </h3>
              <p className="text-xs sm:text-sm text-blue-100">
                Facultad de Estudios Superiores Acatlán
                <br />
                Universidad Nacional Autónoma de México
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{ color: "#d08700" }}>
                Carrera
              </h3>
              <p className="text-xs sm:text-sm text-blue-100">
                Matemáticas Aplicadas y Computación
                <br />
                Procesos Estocásticos
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{ color: "#d08700" }}>
                Contacto
              </h3>
              <p className="text-xs sm:text-sm text-blue-100">
                Semestre 2026-1
                <br />
                Grupo: 2751
              </p>
            </div>
          </div>
        </div>

        <p className={`${Style["footer-p"]} text-xs sm:text-sm`}>
          © {year.getFullYear()}. FES Acatlán, UNAM. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
