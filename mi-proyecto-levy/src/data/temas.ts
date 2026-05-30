// src/data/temas.ts

interface TemaAcademico {
  titulo: string;
  definicionTeorica: string;
  conceptosClave: string[];
  aplicacionPractica: string;
}

export const temas: Record<string, TemaAcademico> = {
  "Fundamentos": {
    titulo: "Fundamentos de Procesos Estocásticos",
    definicionTeorica: "Establece las bases teóricas para el estudio de los procesos estocásticos, abarcando la teoría de la medida, la construcción de funciones de distribución y el uso de transformadas (Laplace, Fourier) para analizar sus propiedades. Fundamental para comprender la aleatoriedad en el tiempo.",
    conceptosClave: ["Espacio de probabilidad", "Medida de probabilidad", "Función de distribución", "Transformada de Laplace", "Convergencia estocástica"],
    aplicacionPractica: "Esencial en modelado financiero para valoración de activos y en procesamiento de señales para análisis espectral."
  },
  "Ramificación": {
    titulo: "Procesos de Ramificación",
    definicionTeorica: "Modelos matemáticos que describen la evolución de poblaciones donde los individuos se reproducen y mueren de forma aleatoria. Se enfoca en la probabilidad de extinción y el crecimiento poblacional bajo diversas condiciones.",
    conceptosClave: ["Proceso de Galton-Watson", "Probabilidad de extinción", "Media de descendencia", "Generación", "Supervivencia"],
    aplicacionPractica: "Utilizado en biología poblacional para el estudio de la extinción de especies y en epidemiología para modelar la propagación de virus."
  },
  "Renovación": {
    titulo: "Procesos de Renovación",
    definicionTeorica: "Procesos que modelan la ocurrencia de eventos en el tiempo, donde la duración entre eventos sucesivos son variables aleatorias independientes e idénticamente distribuidas. Se centra en la frecuencia de ocurrencia y los tiempos de espera.",
    conceptosClave: ["Tiempos de llegada", "Número de renovaciones", "Tasa de fallo", "Ecuación de renovación", "Teorema de límite central para renovación"],
    aplicacionPractica: "Aplicado en ingeniería de fiabilidad para analizar la vida útil de componentes y en gestión de inventarios para optimizar pedidos."
  },
  "Martingalas": {
    titulo: "Martingalas",
    definicionTeorica: "Una secuencia de variables aleatorias adaptada a una filtración, donde la esperanza condicional del siguiente valor, dado el historial hasta el presente, es igual al valor presente. Concepto central en la teoría de procesos estocásticos y finanzas.",
    conceptosClave: ["Filtración", "Esperanza condicional", "Teorema de paro opcional", "Submartingala", "Supermartingala"],
    aplicacionPractica: "Fundamental en la teoría de fijación de precios de opciones financieras y en la modelización de estrategias de juego justas."
  },
  "Cadenas de Markov": {
    titulo: "Cadenas de Markov",
    definicionTeorica: "Procesos estocásticos que exhiben la propiedad de Markov, donde la probabilidad de transición a un estado futuro solo depende del estado actual y no de la secuencia de eventos previos. Analizan el comportamiento a largo plazo de sistemas dinámicos.",
    conceptosClave: ["Espacio de estados", "Matriz de transición", "Propiedad de Markov", "Clases de comunicación", "Distribución estacionaria"],
    aplicacionPractica: "Usado en modelado de meteorología, algoritmos de PageRank de Google y en genética para el seguimiento de herencia de rasgos."
  },
  "Movimiento Browniano": {
    titulo: "Movimiento Browniano",
    definicionTeorica: "Un proceso estocástico de tiempo continuo que modela el movimiento aleatorio de partículas en un fluido, caracterizado por incrementos independientes y estacionarios distribuidos normalmente. Es fundamental en la física y las finanzas matemáticas.",
    conceptosClave: ["Proceso de Wiener", "Incrementos independientes", "Variación cuadrática", "Propiedad de Markov", "Lema de Itô"],
    aplicacionPractica: "Base para el modelo Black-Scholes en finanzas y para simular la difusión de contaminantes en ingeniería ambiental."
  },
  "Cálculo Estocástico": {
    titulo: "Cálculo Estocástico",
    definicionTeorica: "Extensión del cálculo tradicional para funciones de procesos estocásticos, principalmente involucrando la integral de Itô y las ecuaciones diferenciales estocásticas (EDE). Esencial para modelar sistemas bajo incertidumbre continua.",
    conceptosClave: ["Integral de Itô", "Diferencial de Itô", "Ecuaciones Diferenciales Estocásticas (EDE)", "Fórmula de Itô", "Procesos de difusión"],
    aplicacionPractica: "Se aplica en la valoración de derivados financieros, optimización de carteras y en la descripción de sistemas complejos en neurociencia y física."
  },
   "Teoría de Colas": {
    titulo: "Teoría de Colas",
    definicionTeorica: "Estudia los sistemas de espera, analizando el comportamiento de las colas, los tiempos de servicio y las distribuciones de llegada. Busca optimizar el rendimiento de sistemas con recursos limitados y demanda aleatoria.",
    conceptosClave: ["Tasa de llegada", "Tasa de servicio", "Utilización", "Longitud de cola", "Tiempo de espera"],
    aplicacionPractica: "Fundamental en la gestión de operaciones, diseño de centros de llamadas y optimización de flujos de trabajo en manufactura."
  },
  "Procesos Epidemiológicos": {
    titulo: "Procesos Epidemiológicos",
    definicionTeorica: "Modelos estocásticos que describen la propagación de enfermedades infecciosas en una población, considerando factores como tasas de infección, recuperación y susceptibilidad. Permiten predecir la evolución de epidemias.",
    conceptosClave: ["Modelo SIR", "Número reproductivo básico (R0)", "Tasa de infección", "Período infeccioso", "Umbral epidémico"],
    aplicacionPractica: "Esencial en salud pública para planificar intervenciones, gestionar brotes y evaluar el impacto de las campañas de vacunación."
  }
};
