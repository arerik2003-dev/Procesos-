# Guía Visual del Rediseño - Componentes y Estructura

## 🎨 PALETA DE COLORES INSTITUCIONAL

```
┌─────────────────────────────────────────────────────────────┐
│ AZUL MARINO PRINCIPAL (#003366)                            │
│ Uso: Header, Sidebar, Botones primarios, Acentos           │
│ RGB: 0, 51, 102 | HSL: 210°, 100%, 20%                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ORO/DORADO VIEJO (#D4AF37)                                 │
│ Uso: Líneas decorativas, Énfasis, Bordes de selección      │
│ RGB: 212, 175, 55 | HSL: 43°, 64%, 52%                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ GRIS CLARO (#F8FAFC)                                       │
│ Uso: Fondo general de la página                            │
│ RGB: 248, 250, 252 | HSL: 216°, 14%, 98%                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ GRIS OSCURO/ANTRACITA (#1E293B)                            │
│ Uso: Texto principal, Elementos oscuros                    │
│ RGB: 30, 41, 59 | HSL: 215°, 33%, 17%                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 📐 ESTRUCTURA DE LAYOUT

```
┌────────────────────────────────────────────────────────────────────┐
│ HEADER (sticky top-0)                                              │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ [Logo ∑] Procesos Estocásticos          | Home | Materiales │   │
│ │          FES Acatlán - UNAM             | Contacto            │   │
│ └──────────────────────────────────────────────────────────────┘   │
│ ────────────────────────────────────────────────────────────────────│
└────────────────────────────────────────────────────────────────────┘

┌──── MAIN CONTENT ────────────────────────────────────────────────────┐
│                                                                      │
│ ┌───────────────────┐  ┌─────────────────────────────────────────┐ │
│ │   SIDEBAR         │  │   CONTENIDO PRINCIPAL                  │ │
│ │ w-80 (320px)      │  │   flex-1 (ancho fluido)               │ │
│ │                   │  │                                        │ │
│ │ 📑 ÍNDICE TEMAS   │  │  ┌──────────────────────────────────┐ │ │
│ │                   │  │  │ SECCIÓN BIENVENIDA              │ │ │
│ │ ▸ Ramificación    │  │  │ ═════════════════════════════  │ │ │
│ │   • Tema 1        │  │  │ Título Principal                │ │ │
│ │   • Tema 2        │  │  │ Párrafo Introductorio           │ │ │
│ │                   │  │  │                                 │ │ │
│ │ ▸ Renovación      │  │  │ [Tarjeta] [Tarjeta] [Tarjeta] │ │ │
│ │   • Tema 3        │  │  │                                 │ │ │
│ │                   │  │  │ [Llamada a la Acción]          │ │ │
│ │ ▸ Martingalas     │  │  │                                 │ │ │
│ │   • Tema 4        │  │  └──────────────────────────────────┘ │ │
│ │   • Tema 5        │  │                                        │ │
│ │   • Tema 6        │  │   O SI SE SELECCIONA:                 │ │
│ │                   │  │                                        │ │
│ │ ▸ Cadenas Markov  │  │  [← Volver]                          │ │
│ │   • Tema 7        │  │                                        │ │
│ │   • Tema 8        │  │  ┌──────────────────────────────────┐ │ │
│ │   • Tema 9        │  │  │ TÍTULO DEL TEMA    (text-3xl)  │ │ │
│ │                   │  │  ├──────────────────────────────────┤ │ │
│ │ ▸ Movimiento      │  │  │ Autor | Categoría | Fecha       │ │ │
│ │   Browniano       │  │  └──────────────────────────────────┘ │ │
│ │   • Tema 10       │  │                                        │ │
│ │   • Tema 11       │  │  ┌──────────────────────────────────┐ │ │
│ │                   │  │  │ 📄 Vista Previa del Documento   │ │ │
│ │ ▸ Fundamentos     │  │  ├──────────────────────────────────┤ │ │
│ │   • Tema 12       │  │  │  [PDF EMBED 600px]               │ │ │
│ │                   │  │  │                                  │ │ │
│ │ ▸ Poisson         │  │  └──────────────────────────────────┘ │ │
│ │   • Tema 13       │  │                                        │ │
│ │   • Tema 14       │  │                                        │ │
│ │   • Tema 15       │  │                                        │ │
│ │                   │  │                                        │ │
│ └───────────────────┘  └─────────────────────────────────────────┘ │
│                                                                      │
└──── / MAIN CONTENT ──────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ FOOTER (fixed bottom)                                              │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ Institución          │  Carrera           │  Contacto       │   │
│ │ FES Acatlán          │  Ing. Computación  │  Semestre 2026  │   │
│ │ UNAM                 │  Seminario Procesos│  Grupo: 2751    │   │
│ └──────────────────────────────────────────────────────────────┘   │
│ © 2026 FES Acatlán, UNAM. Todos los derechos reservados.           │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🎴 COMPONENTES DETALLADOS

### SIDEBAR ITEM (No seleccionado)
```
┌────────────────────────────────┐
│ text-xs font-semibold          │
│ text-gray-500 uppercase        │
│ CATEGORÍA NOMBRE ($gap: 3)     │
│                                │
│ ├─ border-l-3 border-yellow-600│
│ │                              │
│ │ ┌──────────────────────────┐ │
│ │ │ • Tema Específico        │ │
│ │ │   text-gray-700          │ │
│ │ │   py-2.5 px-3            │ │
│ │ │   rounded-md             │ │
│ │ │   hover:bg-gray-50       │ │
│ │ │   hover:text-blue-900    │ │
│ │ └──────────────────────────┘ │
│ │                              │
│ │ ┌──────────────────────────┐ │
│ │ │ • Otro Tema              │ │
│ │ └──────────────────────────┘ │
│ │                              │
│ └──────────────────────────────┘
│                                │
│ ($gap: 8 entre grupos)         │
└────────────────────────────────┘
```

### SIDEBAR ITEM (Seleccionado)
```
┌────────────────────────────────┐
│ ┌──────────────────────────────┐│
│ │ • Tema Seleccionado          ││
│ │ bg-blue-50 (fondo azul claro)││
│ │ text-blue-900 (texto azul)   ││
│ │ border-l-2 border-yellow-600 ││
│ │ font-medium                  ││
│ │ py-2.5 px-3 rounded-md       ││
│ └──────────────────────────────┘│
└────────────────────────────────┘
```

### TARJETA INFORMATIVA
```
┌─────────────────────────────────────────┐
│ bg-white                                │
│ rounded-lg border border-gray-200       │
│ shadow-sm hover:shadow-md               │
│ hover:border-blue-900 (transición)      │
│ p-6                                     │
│                                         │
│ ┌──────────────────────────────────┐   │
│ │ 📊  (o ∫ o 📐)                   │   │
│ │ w-12 h-12 bg-blue-50             │   │
│ │ rounded-lg flex items-center     │   │
│ │ justify-center mb-4              │   │
│ └──────────────────────────────────┘   │
│                                         │
│ Material Interactivo (text-lg)          │
│ font-bold text-blue-900 mb-2            │
│                                         │
│ Accede a presentaciones, demostraciones  │
│ y modelos estocásticos diseñados...     │
│ text-gray-600 text-sm leading-relaxed   │
│                                         │
└─────────────────────────────────────────┘
```

### CARD DE METADATOS
```
┌────────────────────────────────────────────┐
│ bg-white border border-gray-200 p-8        │
│ rounded-lg shadow-sm                       │
│                                            │
│ Puente Browniano (text-3xl font-bold)     │
│ text-blue-900 mb-6                        │
│                                            │
│ ┌──────────────┬────────────────┬────────┐│
│ │   AUTOR      │   CATEGORÍA    │ FECHA  ││
│ ├──────────────┼────────────────┼────────┤│
│ │ Arath Yahir  │ [Movimiento  ] │ 19 may ││
│ │ Montero      │  Browniano    │ 2026   ││
│ │              │                │        ││
│ └──────────────┴────────────────┴────────┘│
│
│ border-b border-gray-200 pb-6              │
└────────────────────────────────────────────┘
```

### BOTÓN REUTILIZABLE

```
┌─ VARIANTE: PRIMARY ──────────────────┐
│ bg-blue-900 text-white               │
│ hover:bg-blue-800                    │
│ rounded-lg font-medium transition    │
│ focus:ring-2 focus:ring-blue-900     │
└──────────────────────────────────────┘

┌─ VARIANTE: SECONDARY ────────────────┐
│ bg-blue-50 text-blue-900             │
│ hover:bg-blue-100                    │
│ rounded-lg font-medium transition    │
│ focus:ring-2 focus:ring-blue-900     │
└──────────────────────────────────────┘

┌─ VARIANTE: OUTLINE ──────────────────┐
│ border border-blue-900 text-blue-900 │
│ hover:bg-blue-50                     │
│ rounded-lg font-medium transition    │
│ focus:ring-2 focus:ring-blue-900     │
└──────────────────────────────────────┘

Tamaños: 
  sm: px-3 py-1.5 text-sm
  md: px-4 py-2 text-base    ← Default
  lg: px-6 py-3 text-lg
```

---

## 📱 RESPONSIVIDAD

### Mobile (< 768px)
```
HEADER compacto
Sidebar oculto o colapsado
Contenido a width: 100%
Grid de tarjetas: 1 columna
Metadatos: 1 columna
```

### Tablet (≥ 768px)
```
HEADER normal
Sidebar completo (320px)
Contenido responsive
Grid de tarjetas: 2-3 columnas
Metadatos: 2 columnas
```

### Desktop (≥ 1024px)
```
Layout completo
Sidebar sticky
Contenido con max-width
Grid de tarjetas: 3 columnas
Metadatos: 3 columnas en grid
```

---

## 🌈 TRANSICIONES Y EFECTOS

```
Botones:
  transition-colors duration-200
  
Cards:
  transition-all duration-200
  hover:shadow-md
  
Sidebar items:
  transition-all duration-200
  
Enlaces:
  transition-colors
  
Inputs/Selección:
  transition-colors duration-200
```

---

## 📐 ESPACIADO CONSISTENTE

```
Contenedor principal:        max-w-7xl mx-auto
Padding principal:           p-8
Sidebar:                     p-8
Gaps entre categorías:       gap-8
Gaps entre items:            gap-2 a gap-3
Card padding:                p-6 a p-8
Margin bottom:               mb-4, mb-6, mb-8, mb-12
```

---

## ✨ SOMBRAS Y BORDES

```
Shadow Styles:
  - shadow-sm:    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05)
  - shadow-md:    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)
  - academic:     0 2px 8px rgba(0, 51, 102, 0.1)

Border Styles:
  - border-gray-200:      para separaciones suaves
  - border-blue-900:      para énfasis
  - border-yellow-600:    para detalles decorativos
  - border-3:             líneas más prominentes
```

---

## 🎯 TOKENS DE DISEÑO

```
Colors:
  Primary:      #003366 (Azul Marino)
  Accent:       #D4AF37 (Oro)
  Background:   #F8FAFC (Gris Claro)
  Text:         #1E293B (Gris Oscuro)

Typography:
  Font Family:  Inter
  Line Height:  1.5 (default), 1.6 (body text)
  Letter Spacing: tracking-wider, tracking-widest

Spacing:
  1 = 0.25rem (4px)
  2 = 0.5rem  (8px)
  3 = 0.75rem (12px)
  4 = 1rem    (16px)
  6 = 1.5rem  (24px)
  8 = 2rem    (32px)

Border Radius:
  sm: 0.375rem  (6px)
  md: 0.5rem    (8px)
  lg: 0.75rem   (12px)
```

---

## 🚀 MEJORAS IMPLEMENTADAS

✅ **Jerarquía Visual Mejorada**
   - Títulos claros y distintivos
   - Subtítulos organizados
   - Contenido ordenado en secciones

✅ **Espaciado Limpio**
   - Márgenes amplios entre secciones
   - Padding consistente
   - Evita hacinamiento visual

✅ **Navegación Intuitiva**
   - Sidebar bien organizado
   - Botones con efecto hover
   - Feedback visual claro

✅ **Profesionalismo Académico**
   - Colores institucionales
   - Tipografía moderna
   - Diseño minimalista pero elegante

✅ **Accesibilidad**
   - Contraste de colores adecuado
   - Elementos interactivos claros
   - Responsive en todos los dispositivos
