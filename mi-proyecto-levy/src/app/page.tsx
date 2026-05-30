import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col relative">
      {/* Hero Background - Biblioteca Central */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("/images/biblioteca_central.jpg")' 
        }}
      />

      {/* Contenido Hero */}
      <div className="flex-1 relative z-10 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg text-center px-4">Procesos Estocásticos</h1>
        <Link 
          href="/materiales"
          className="bg-transparent border-2 border-[#BB8800] text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#BB8800] transition-all duration-300 shadow-xl backdrop-blur-sm"
        >
          Acceder a Materiales
        </Link>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-[#001f54]/90 text-white p-6 text-center border-t border-[#BB8800]">
        <div className="flex justify-between px-8 text-sm">
          <span>UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO</span>
          <span>FES Acatlán</span>
        </div>
      </footer>
    </main>
  );
}
