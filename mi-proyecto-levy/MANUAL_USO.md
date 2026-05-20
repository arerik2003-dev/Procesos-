# Manual de Uso - Plataforma Procesos Estocásticos

## 🎓 Descripción General

Esta es una plataforma académica profesional diseñada para facilitar el estudio y visualización de Procesos Estocásticos en FES Acatlán, UNAM. La interfaz ha sido completamente rediseñada siguiendo estándares de diseño universitario con identidad institucional.

---

## 🚀 Cómo Usar la Plataforma

### 1. **Vista de Inicio**
Al abrir la plataforma, verás:
- **Header superior** con logo y navegación
- **Sidebar izquierdo** con índice de todos los temas organizados por categoría
- **Área central** con bienvenida y tarjetas informativas que describen características

### 2. **Navegar por Temas**
```
Paso 1: Ubica tu categoría en el sidebar (ej: "Movimiento Browniano")
Paso 2: Haz clic en el tema específico que deseas revisar
Paso 3: El contenido se cargará automáticamente en el área central
```

**Indicadores Visuales:**
- El tema seleccionado se resaltará con fondo azul claro
- Una línea dorada aparecerá en el borde izquierdo
- El texto cambiará a azul marino

### 3. **Vista Detallada de un Tema**
Una vez seleccionado un tema verás:

**a) Botón "Volver al Inicio"**
   - Ubicado en la parte superior
   - Te regresa a la página de bienvenida

**b) Card con Información del Tema**
   - Título principal del tema (ej: "Puente Browniano")
   - Metadatos en 3 columnas:
     * **Autor:** Quién preparó el material
     * **Categoría:** Área temática
     * **Fecha:** Cuándo se publicó

**c) Visor de PDF**
   - Visualización incrustada del documento
   - Controles de zoom, descarga y búsqueda integrados
   - Altura 600px con scroll interno si es necesario

### 4. **Interacciones Frecuentes**

```
❯ Cambiar de tema:
  • Simplemente haz clic en otro tema del sidebar
  • El contenido se actualiza automáticamente

❯ Volver a inicio:
  • Presiona el botón "← Volver al Inicio"
  • O haz clic en el logo "Procesos Estocásticos"

❯ Descargar PDF:
  • Usa el ícono de descarga en el visor PDF
  • El archivo se guardará en tu carpeta de descargas

❯ Imprimir tema:
  • Abre las herramientas de desarrollador (F12)
  • Usa la función de impresión del navegador
```

---

## 📱 Responsividad por Dispositivo

### 📱 Dispositivos Móviles (< 768px)
```
┌─────────────┐
│ HEADER      │
├─────────────┤
│ CONTENIDO   │
│ (fullwidth) │
│             │
│ Sidebar     │
│ colapsable  │
├─────────────┤
│ FOOTER      │
└─────────────┘
```
- El sidebar puede ocultarse para aprovechar espacio
- Las tarjetas se muestran en 1 columna
- Metadatos apilados verticalmente

### 💻 Computadoras de Escritorio (≥ 768px)
```
┌──────────────────────────────┐
│ HEADER                       │
├────────────┬─────────────────┤
│  SIDEBAR   │   CONTENIDO     │
│  (320px)   │   (flexible)    │
│            │                 │
├────────────┴─────────────────┤
│ FOOTER                       │
└──────────────────────────────┘
```
- Sidebar siempre visible y fijo
- Layout óptimo con máximo ancho
- Tarjetas en 3 columnas

---

## 🎨 Guía de Colores (Para Referencia)

| Color | Código | Uso |
|-------|--------|-----|
| Azul Marino | #003366 | Encabezado, botones primarios, acentos |
| Oro Institucional | #D4AF37 | Líneas decorativas, énfasis |
| Gris Fondo | #F8FAFC | Fondo general de página |
| Gris Texto | #1E293B | Texto principal |
| Blanco | #FFFFFF | Tarjetas, contenido |
| Azul Claro | #EFF6FF | Fondos secundarios, hover |

---

## 🔧 Guía de Desarrollo

### Estructura de Archivos
```
src/
├── app/
│   ├── page.tsx              ← Página principal (rediseñada)
│   ├── layout.tsx            ← Layout global
│   └── globals.css           ← Estilos globales
├── components/
│   ├── UI/
│   │   ├── Button.tsx        ← Botón reutilizable
│   │   ├── Card.tsx          ← Card reutilizable
│   │   └── Badge.tsx         ← Badge reutilizable
│   ├── PDFViewer.tsx         ← Visor de PDF
│   └── ... (otros componentes)
├── data/
│   └── presentaciones.json   ← Datos de los temas
└── utils/
    └── ... (funciones auxiliares)
```

### Agregar un Nuevo Tema

**1. Actualizar `presentaciones.json`:**
```json
{
  "id": 15,
  "titulo": "Nuevo Tema Aquí",
  "autor": "Nombre del Autor",
  "fecha": "2026-05-19",
  "category": "Nombre de Categoría",
  "pdfUrl": "/pdfs/ruta-del-archivo.pdf"
}
```

**2. Asegurate de:**
- El archivo PDF esté en `/public/pdfs/`
- El **id** sea único
- La **categoría** corresponda a una existente (o agrégala si es nueva)
- El **formato de fecha** sea YYYY-MM-DD

**3. La página se actualizará automáticamente**

### Agregar una Nueva Categoría

Si tu nuevo tema es de una categoría no existente:

**1. En `src/app/page.tsx`, actualiza el array `categorias`:**
```tsx
const categorias = [
  "Ramificación",
  "Renovación",
  // ... categorías existentes ...
  "Mi Nueva Categoría"    ← Agregar aquí
];
```

**2. Usa esa categoría en el JSON de `presentaciones.json`**

**3. El sidebar se reorganizará automáticamente**

### Personalizar Estilos

**Colores Institucionales** están en `tailwind.config.js`:
```javascript
'unam-blue': {
  900: '#003366',  ← Cambiar azul principal aquí
  // ... otros tonos
}
```

**Componentes Reutilizables** están en `src/components/UI/`:
- `Button.tsx` - Para botones
- `Card.tsx` - Para contenedores
- `Badge.tsx` - Para etiquetas

### Modificar Footer

En `src/app/page.tsx`, busca la sección `<footer>`:
```tsx
<footer className="bg-blue-900 text-white...">
  {/* Actualiza información aquí */}
</footer>
```

### Cambiar Metadatos del Header

En `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Tu Título Aquí",
  description: "Tu descripción aquí",
  // ...
};
```

---

## 🧩 Componentes Reutilizables

### Button Component
```tsx
import Button from "@/components/UI/Button";

// Variante Primary
<Button variant="primary" size="md">
  Enviar
</Button>

// Variante Secondary
<Button variant="secondary" size="sm">
  Cancelar
</Button>

// Variante Outline
<Button variant="outline" size="lg">
  Ver Más
</Button>

// Props disponibles:
// - variant: 'primary' | 'secondary' | 'outline' (default: 'primary')
// - size: 'sm' | 'md' | 'lg' (default: 'md')
// - className: string (override personalizado)
// - Soporta todos los atributos HTML de <button>
```

### Card Component
```tsx
import Card from "@/components/UI/Card";

<Card shadow="sm" className="p-6">
  Contenido aquí
</Card>

// Props disponibles:
// - shadow: 'sm' | 'md' | 'lg' | 'none' (default: 'sm')
// - className: string (clases adicionales)
// - children: ReactNode
```

### Badge Component
```tsx
import Badge from "@/components/UI/Badge";

<Badge 
  label="Categoría"
  value="Movimiento Browniano"
  variant="primary"
/>

// Props disponibles:
// - label: string (etiqueta en mayúsculas)
// - value: string (contenido del badge)
// - variant: 'default' | 'primary' | 'success' | 'warning'
```

---

## 🐛 Solución de Problemas

### PDF no se ve
**Problema:** El PDF no carga o aparece en blanco
**Solución:**
1. Verifica que el archivo PDF existe en `/public/pdfs/`
2. Confirma el path en `presentaciones.json` es correcto
3. Intenta con otro PDF para descartar problema del archivo
4. Revisa la consola del navegador (F12) para mensajes de error

### Tema no aparece en sidebar
**Problema:** Agregué un tema pero no aparece
**Solución:**
1. Verifica que el JSON sea válido (sin comas faltantes)
2. Confirma que la **categoría** coincide con una en el array `categorias`
3. Reinicia el servidor de desarrollo (`npm run dev`)
4. Limpia el caché del navegador (Ctrl+Shift+Del)

### Estilos no aplican
**Problema:** Los cambios CSS no se ven
**Solución:**
1. En `tailwind.config.js`, asegúrate que usas nombres de clases válidos
2. Reinicia el servidor (`npm run dev`)
3. Limpia caché: npm run build

### El layout se ve desalineado
**Problema:** Header, sidebar o footer fuera de lugar
**Solución:**
1. Verifica que `sticky`, `fixed`, `absolute` se usan correctamente
2. Confirma que `z-index` no causa conflictos
3. Revisa que no hay estilos CSS globales conflictivos

---

## 📊 Estadísticas de la Plataforma

**Temas Disponibles:** 14  
**Categorías:** 7  
**Autores:** 14 contribuidores  
**Tamaño de Fondos:** ~2.5 MB (PDFs)  
**Responsividad:** Mobile-first, todas las pantallas  
**Rendimiento:** Optimizado para cargas rápidas  

---

## 📞 Contacto y Soporte

Para preguntas, mejoras o reportar problemas:
- **Institución:** Facultad de Estudios Superiores Acatlán, UNAM
- **Carrera:** Ingeniería en Computación
- **Seminario:** Procesos Estocásticos
- **Semestre:** 2026-1
- **Grupo:** 2751

---

## 📜 Licencia y Derechos

© 2026 FES Acatlán, UNAM  
Todos los derechos reservados.  
Sitio desarrollado con fines académicos.

---

## ✅ Checklist de Mantenimiento Mensual

- [ ] Verificar que todos los PDFs se cargan correctamente
- [ ] Revisar links del header y footer
- [ ] Comprobar responsividad en diferentes dispositivos
- [ ] Actualizar metadatos si es necesario
- [ ] Revisar performance en Google PageSpeed
- [ ] Hacer backup de `presentaciones.json`
- [ ] Revisar accesibilidad con herramientas de testing

---

**Última actualización:** 19 de mayo de 2026  
**Versión:** 2.0 (Rediseño Completo)
