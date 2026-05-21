import { ST } from "next/dist/shared/lib/utils";
import Style from "./Footer.module.css";

function Footer() {
  const year = new Date();

  return (
    <footer className={Style.footer}>
      {/* <div className={Style.yellowPart}></div>
       */}
      <div className={Style.text}>
        
        <div className="max-w-7xl mx-auto px-6 py-8" style={{marginBottom:"20px"}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" style={{display:"flex",gap:"30px"}}>
            <div style={{textAlign:"start",width:"fit-content"}}>
              <h3 className="font-bold mb-2" style={{color:"#d08700"}}>Institución</h3>
              <p className="text-sm text-blue-100">
                Facultad de Estudios Superiores Acatlán<br/>
                Universidad Nacional Autónoma de México
              </p>
            </div>
            <div style={{textAlign:"start",width:"fit-content"}}>
              <h3 className="font-bold text-yellow-600 mb-2"style={{color:"#d08700"}}>Carrera</h3>
              <p className="text-sm text-blue-100">
                Ingeniería en Computación<br/>
                Seminario de Procesos Estocásticos
              </p>
            </div>
            <div style={{textAlign:"start",width:"fit-content"}}>
              <h3 className="font-bold text-yellow-600 mb-2"style={{color:"#d08700"}}>Contacto</h3>
              <p className="text-sm text-blue-100">
                Semestre 2026-1<br/>
                Grupo: 2751
              </p>
            </div>
          </div>
        </div>

        <p className={Style['footer-p']}>
          © {year.getFullYear()}. FES Acatlán, UNAM. Todos los derechos reservados.
        </p>
      </div>
      {/* <div className={Style.yellowPartOpuest}></div> */}
    </footer>
  )
}

export default Footer;
