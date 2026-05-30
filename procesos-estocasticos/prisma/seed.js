// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const presentationsData = [
  {
    title: "Modelo de Urnas de Pólya",
    author: "Andrea Jaimes Molina",
    date: new Date("2024-04-18"),
    difficulty: "INTERMEDIO",
    content: `## Modelo de Urnas de Pólya

### Definición
El modelo de urnas de Pólya es un proceso estocástico que describe la evolución de una urna que contiene bolas de diferentes colores.

### Ecuaciones fundamentales

$$ P(\\text{bola blanca en paso } n+1 | \\text{historia}) = \\frac{B_n + \\alpha}{B_n + R_n + \\alpha + \\beta} $$

### Propiedad de intercambiabilidad
Las variables indicadoras de extracción son intercambiables:

$$ P(X_1 = x_1, ..., X_n = x_n) = \\frac{\\prod_{i=1}^k (a_i + (m_i-1)d)}{\\prod_{j=0}^{n-1} (a + jd)} $$`,
    equations: [
      "P(\\text{bola blanca}) = \\frac{B + \\alpha}{B + R + \\alpha + \\beta}",
      "\\lim_{n \\to \\infty} \\frac{B_n}{n} \\sim \\text{Beta}(\\alpha, \\beta)",
      "E[X_{n+1} | \\mathcal{F}_n] = \\frac{B_n + \\alpha}{B_n + R_n + \\alpha + \\beta}"
    ],
    tags: ["urna", "polya", "beta", "intercambiabilidad"]
  },
  {
    title: "Procesos de Recompensa de Renovación",
    author: "Erik Iván Juárez Rodríguez",
    date: new Date("2024-04-18"),
    difficulty: "AVANZADO",
    content: `## Procesos de Recompensa de Renovación

### Teorema de Renovación-Recompensa

$$ \\lim_{t \\to \\infty} \\frac{R(t)}{t} = \\frac{E[R]}{E[\\tau]} $$

donde $R(t)$ es la recompensa acumulada hasta tiempo $t$.

### Ecuación de renovación

$$ m(t) = F(t) + \\int_0^t m(t-s) dF(s) $$`,
    equations: [
      "\\lim_{t \\to \\infty} \\frac{R(t)}{t} = \\frac{E[R]}{E[\\tau]}",
      "m(t) = \\sum_{n=1}^{\\infty} F^{n*}(t)",
      "E[R(t)] = \\frac{E[R]}{E[\\tau]} t + o(t)"
    ],
    tags: ["renovación", "recompensa", "teorema límite"]
  },
  {
    title: "Desigualdades de Doob",
    author: "Pedro Iván Landaverde Mora",
    date: new Date("2024-04-09"),
    difficulty: "AVANZADO",
    content: `## Desigualdades de Doob para Martingalas

### Desigualdad maximal de Doob

$$ P(\\sup_{0 \\leq s \\leq t} M_s \\geq \\lambda) \\leq \\frac{E[M_t^+]}{\\lambda} $$

### Desigualdad L^p de Doob

$$ E[\\sup_{0 \\leq s \\leq t} |M_s|^p] \\leq \\left(\\frac{p}{p-1}\\right)^p E[|M_t|^p] $$`,
    equations: [
      "P(\\sup_{s \\leq t} M_s \\geq \\lambda) \\leq \\frac{E[M_t^+]}{\\lambda}",
      "E[\\sup_{s \\leq t} |M_s|^p] \\leq \\left(\\frac{p}{p-1}\\right)^p E[|M_t|^p]",
      "\\|M^*\\|_p \\leq \\frac{p}{p-1} \\|M_t\\|_p"
    ],
    tags: ["doob", "martingala", "desigualdad"]
  },
  {
    title: "H Transformada",
    author: "Andrés Alejandro López Medina",
    date: new Date("2024-04-09"),
    difficulty: "AVANZADO",
    content: `## H-Transformada de Procesos de Markov

### Definición
Dada una función armónica h > 0, la h-transformada de un proceso de Markov X es:

$$ P_x^h(X_t \\in dy) = \\frac{h(y)}{h(x)} P_x(X_t \\in dy) $$

### Propiedades
El proceso transformado conserva la propiedad de Markov.`,
    equations: [
      "P_x^h(X_t \\in dy) = \\frac{h(y)}{h(x)} P_x(X_t \\in dy)",
      "\\mathcal{L}^h f = \\frac{1}{h} \\mathcal{L}(hf)",
      "h(x) = E_x[h(X_t)] \\text{ para todo } t"
    ],
    tags: ["h-transformada", "markov", "armónica"]
  },
  {
    title: "Generador Infinitesimal en Tiempo Continuo",
    author: "Ricardo López Ramírez",
    date: new Date("2024-04-09"),
    difficulty: "AVANZADO",
    content: `## Generador Infinitesimal

### Definición
Para un proceso de Markov en tiempo continuo:

$$ \\mathcal{L}f(x) = \\lim_{t \\downarrow 0} \\frac{E_x[f(X_t)] - f(x)}{t} $$

### Ecuación backward de Kolmogorov

$$ \\frac{\\partial}{\\partial t} u(t,x) = \\mathcal{L}u(t,x) $$`,
    equations: [
      "\\mathcal{L}f(x) = \\lim_{t \\to 0} \\frac{E_x[f(X_t)] - f(x)}{t}",
      "\\frac{\\partial u}{\\partial t} = \\mathcal{L}u",
      "P_t = e^{t\\mathcal{L}}"
    ],
    tags: ["generador", "infinitesimal", "kolmogorov"]
  },
  {
    title: "Teorema de Límite Central para Cadenas de Markov",
    author: "Daniel Alberto Luna Escamilla",
    date: new Date("2024-04-18"),
    difficulty: "AVANZADO",
    content: `## TLC para Cadenas de Markov

### Teorema
Sea $X_n$ una cadena de Markov ergódica con distribución estacionaria $\\pi$. Entonces:

$$ \\sqrt{n}(\\frac{1}{n}\\sum_{k=1}^n f(X_k) - \\pi(f)) \\xrightarrow{d} N(0, \\sigma^2_f) $$

### Varianza asintótica

$$ \\sigma^2_f = Var_{\\pi}(f) + 2\\sum_{k=1}^{\\infty} Cov_{\\pi}(f(X_0), f(X_k)) $$`,
    equations: [
      "\\sqrt{n}(\\bar{f}_n - \\pi(f)) \\xrightarrow{d} N(0, \\sigma^2_f)",
      "\\sigma^2_f = \\text{Var}_\\pi(f) + 2\\sum_{k=1}^{\\infty} \\text{Cov}_\\pi(f(X_0), f(X_k))",
      "\\tau = \\sum_{k=0}^{\\infty} (\\text{Corr}(f(X_0), f(X_k)))"
    ],
    tags: ["tlc", "markov", "ergódico", "varianza asintótica"]
  },
  {
    title: "Teorema de Donsker",
    author: "Guillermo Luna Martínez Escobar",
    date: new Date("2024-04-09"),
    difficulty: "AVANZADO",
    content: `## Teorema de Donsker (Principio de Invarianza)

### Enunciado
Sea $\\{S_n\\}$ una caminata aleatoria con $E[\\xi_i]=0$ y $Var(\\xi_i)=1$. Definimos:

$$ X_n(t) = \\frac{S_{\\lfloor nt \\rfloor}}{\\sqrt{n}}, \\quad t \\in [0,1] $$

Entonces $X_n$ converge débilmente a un movimiento browniano estándar $B(t)$.

### Convergencia en el espacio C[0,1]

$$ X_n \\Rightarrow B \\quad \\text{en } C[0,1] $$`,
    equations: [
      "X_n(t) = \\frac{S_{\\lfloor nt \\rfloor}}{\\sqrt{n}}",
      "\\lim_{n \\to \\infty} P(\\sup_{t \\leq 1} |X_n(t)| \\leq x) = P(\\sup_{t \\leq 1} |B(t)| \\leq x)",
      "\\frac{S_{[nt]}}{\\sqrt{n}} \\xrightarrow{d} B(t)"
    ],
    tags: ["donsker", "invariance", "browniano", "teorema límite"]
  },
  {
    title: "Propiedades del Movimiento Browniano",
    author: "Arath Yahir Montero Hernández",
    date: new Date("2024-04-18"),
    difficulty: "INTERMEDIO",
    content: `## Propiedades del Movimiento Browniano

### Propiedades fundamentales

1. **Incrementos independientes y estacionarios**
2. **Continuidad de trayectorias**
3. **Autosimilitud**: $B(at) \\stackrel{d}{=} \\sqrt{a}B(t)$

### Ley del logaritmo iterado

$$ \\limsup_{t \\to \\infty} \\frac{B(t)}{\\sqrt{2t \\log \\log t}} = 1 \\quad \\text{c.s.} $$`,
    equations: [
      "B(t) \\sim N(0, t)",
      "\\text{Cov}(B(s), B(t)) = \\min(s, t)",
      "\\limsup_{t \\to \\infty} \\frac{B(t)}{\\sqrt{2t \\log \\log t}} = 1 \\text{ c.s.}"
    ],
    tags: ["browniano", "continuidad", "autosimilitud", "logaritmo iterado"]
  },
  {
    title: "Integral Estocástica Discreta",
    author: "Daniel Pineda Ortega",
    date: new Date("2024-04-09"),
    difficulty: "INTERMEDIO",
    content: `## Integral Estocástica en Tiempo Discreto

### Definición
Para un proceso predecible $H_n$ y una martingala $M_n$:

$$ (H \\cdot M)_n = \\sum_{k=1}^n H_k \\Delta M_k $$

donde $\\Delta M_k = M_k - M_{k-1}$.

### Propiedades

$$ E[(H \\cdot M)_n] = 0 $$
$$ E[(H \\cdot M)_n^2] = E[\\sum_{k=1}^n H_k^2 \\Delta \\langle M \\rangle_k] $$`,
    equations: [
      "(H \\cdot M)_n = \\sum_{k=1}^n H_k \\Delta M_k",
      "E[(H \\cdot M)_n] = 0",
      "E[(H \\cdot M)_n^2] = E[\\sum_{k=1}^n H_k^2 \\Delta \\langle M \\rangle_k]"
    ],
    tags: ["integral estocástica", "discreta", "martingala"]
  },
  {
    title: "Lema de Borel-Cantelli",
    author: "Emiliano Ruiz Sánchez",
    date: new Date("2024-04-09"),
    difficulty: "INTERMEDIO",
    content: `## Lema de Borel-Cantelli

### Primer lema
Si $\\sum_{n=1}^{\\infty} P(A_n) < \\infty$, entonces $P(\\limsup A_n) = 0$.

### Segundo lema
Si $\\{A_n\\}$ son independientes y $\\sum_{n=1}^{\\infty} P(A_n) = \\infty$, entonces $P(\\limsup A_n) = 1$.

### Ley 0-1

$$ P(\\limsup A_n) \\in \\{0,1\\} $$`,
    equations: [
      "\\sum P(A_n) < \\infty \\Rightarrow P(\\limsup A_n) = 0",
      "\\sum P(A_n) = \\infty \\Rightarrow P(\\limsup A_n) = 1",
      "\\limsup A_n = \\bigcap_{n=1}^{\\infty} \\bigcup_{k=n}^{\\infty} A_k"
    ],
    tags: ["borelcantelli", "ley 0-1", "independencia"]
  },
  {
    title: "Procesos de Poisson Puntuales",
    author: "Vanesa Sebastián Cervantes",
    date: new Date("2024-04-18"),
    difficulty: "INTERMEDIO",
    content: `## Procesos de Poisson Puntuales

### Definición
Un proceso de Poisson puntual en $\\mathbb{R}^d$ con intensidad $\\lambda$ satisface:

1. Para cualquier conjunto $A$, $N(A) \\sim \\text{Poisson}(\\lambda |A|)$
2. Si $A_1,...,A_n$ son disjuntos, $N(A_i)$ son independientes

### Función generadora de probabilidad

$$ G(u) = \\exp\\left(\\lambda \\int (u(x) - 1) dx\\right) $$`,
    equations: [
      "P(N(A) = n) = \\frac{(\\lambda |A|)^n e^{-\\lambda |A|}}{n!}",
      "E[\\int f dN] = \\lambda \\int f dx",
      "\\text{Var}(\\int f dN) = \\lambda \\int f^2 dx"
    ],
    tags: ["poisson", "puntual", "medida aleatoria"]
  },
  {
    title: "Teoría de Colas (Sistemas de Espera)",
    author: "Josué Trinidad Potrero",
    date: new Date("2024-04-18"),
    difficulty: "INTERMEDIO",
    content: `## Teoría de Colas M/M/1

### Notación de Kendall
M/M/1: llegadas Poisson, tiempos de servicio exponenciales, 1 servidor.

### Ecuaciones de balance

$$ \\lambda \\pi_{n-1} = \\mu \\pi_n $$

### Distribución estacionaria

$$ \\pi_n = (1 - \\rho)\\rho^n, \\quad \\rho = \\frac{\\lambda}{\\mu} < 1 $$`,
    equations: [
      "\\pi_n = (1 - \\rho)\\rho^n",
      "L = \\sum_{n=0}^{\\infty} n\\pi_n = \\frac{\\rho}{1-\\rho}",
      "W = \\frac{L}{\\lambda} = \\frac{1/\\mu}{1-\\rho}"
    ],
    tags: ["colas", "mm1", "poisson", "exponencial"]
  },
  {
    title: "Procesos de Cox (Proceso Doblemente Estocástico)",
    author: "Leonardo Daniel Velázquez García",
    date: new Date("2024-04-18"),
    difficulty: "AVANZADO",
    content: `## Procesos de Cox

### Definición
Un proceso de Cox es un proceso de Poisson con intensidad aleatoria $\\Lambda(t)$:

$$ N(t) | \\Lambda \\sim \\text{Poisson}(\\int_0^t \\Lambda(s) ds) $$

### Propiedades

$$ P(N(t)=n) = E\\left[\\frac{(\\int_0^t \\Lambda(s) ds)^n}{n!} e^{-\\int_0^t \\Lambda(s) ds}\\right] $$

### Sobredispersión

$$ \\text{Var}(N(t)) = E[\\text{Var}(N(t)|\\Lambda)] + \\text{Var}(E[N(t)|\\Lambda]) > E[N(t)] $$`,
    equations: [
      "N|\\Lambda \\sim \\text{Poisson}(\\int \\Lambda)",
      "E[N(t)] = E[\\int_0^t \\Lambda(s) ds]",
      "\\text{Var}(N(t)) = E[\\int \\Lambda] + \\text{Var}(\\int \\Lambda)"
    ],
    tags: ["cox", "doblemente estocástico", "sobredispersión"]
  },
  {
    title: "Procesos de Ramificación",
    author: "Gustavo Emiliano Villoria Saucedo",
    date: new Date("2024-04-09"),
    difficulty: "AVANZADO",
    content: `## Procesos de Ramificación (Galton-Watson)

### Definición
Sea $Z_n$ el tamaño de la población en generación n:

$$ Z_{n+1} = \\sum_{i=1}^{Z_n} X_{n,i} $$

donde $X_{n,i}$ son i.i.d. con función generadora $f(s)$.

### Probabilidad de extinción

$$ q = \\lim_{n \\to \\infty} P(Z_n = 0 | Z_0 = 1) $$

La extinción es segura si y solo si $q=1$:

$$ q = f(q) $$`,
    equations: [
      "f(s) = E[s^{X}]",
      "q = f(q)",
      "E[Z_n] = \\mu^n \\text{ donde } \\mu = E[X]"
    ],
    tags: ["ramificación", "galton-watson", "extinción"]
  }
]

async function main() {
  console.log('🌱 Sembrando base de datos con 14 presentaciones...')

  // Limpiar datos existentes
  await prisma.equation.deleteMany()
  await prisma.presentationTags.deleteMany()
  await prisma.tag.deleteMany()
  await prisma.presentation.deleteMany()
  await prisma.user.deleteMany()

  // Crear usuario admin
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.create({
    data: {
      email: 'admin@ejemplo.com',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN'
    }
  })

  // Crear las 14 presentaciones
  for (const pres of presentationsData) {
    await prisma.presentation.create({
      data: {
        title: pres.title,
        author: pres.author,
        description: `${pres.author} - ${pres.title}`,
        content: pres.content,
        date: pres.date,
        difficulty: pres.difficulty as any,
        authorId: admin.id,
        equations: {
          create: pres.equations.map((latex, idx) => ({
            latex,
            description: `Ecuación ${idx + 1}`,
            order: idx
          }))
        },
        tags: {
          connectOrCreate: pres.tags.map(tag => ({
            where: { name: tag },
            create: { name: tag }
          }))
        }
      }
    })
  }

  const count = await prisma.presentation.count()
  console.log(`✅ Base de datos sembrada con ${count} presentaciones`)
  console.log('👤 Usuario admin: admin@ejemplo.com / admin123')
  console.log('📊 Temas incluidos:')
  presentationsData.forEach((p, i) => console.log(`   ${i+1}. ${p.author} - ${p.title}`))
}

main()
  .catch(e => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })