# Tarjeta de Presentación Profesional - Juan Manuel Fernández

Una página web moderna, minimalista y responsive diseñada como tarjeta de presentación profesional. Showcase de tu perfil académico, investigación, publicaciones y contacto.

## 🎨 Características

- **Diseño Minimalista & Moderno**: Colores corporativos (azul + verde) con animaciones sutiles
- **Completamente Responsive**: Optimizada para móvil, tablet y desktop
- **Blog Dinámico**: Sección para artículos sobre IA, investigación y educación
- **Navegación Sticky**: Barra de navegación fija con enlaces activos destacados
- **Formulario de Contacto**: Formulario funcional para mensajes
- **Sin Dependencias Externas**: HTML5, CSS3 y JavaScript vanilla puro
- **SEO-Friendly**: Meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
.
├── index.html           # Página principal
├── css/
│   └── styles.css       # Estilos (CSS Grid, Flexbox, animaciones)
├── js/
│   └── script.js        # Lógica interactiva (navegación, formulario, blog)
├── README.md            # Este archivo
└── DEPLOY.md            # Instrucciones de deployment
```

## 🚀 Deployment en GitHub Pages

### Opción 1: Crear un nuevo repositorio

1. **Crea un repositorio en GitHub** con el nombre `username.github.io`
   - Reemplaza `username` por tu usuario de GitHub

2. **Clona el repositorio**:
   ```bash
   git clone https://github.com/username/username.github.io.git
   cd username.github.io
   ```

3. **Copia los archivos** (index.html, css/, js/) a la carpeta del repositorio

4. **Haz commit y push**:
   ```bash
   git add .
   git commit -m "Initial commit: professional portfolio website"
   git push -u origin main
   ```

5. **Tu sitio estará en vivo en**: `https://username.github.io`

### Opción 2: Usar un repositorio existente

1. **Ve a Settings > Pages** en tu repositorio
2. **Branch**: Selecciona `main` y `/root`
3. **Guarda**: GitHub publicará tu sitio en `https://username.github.io/nombre-repo`

## 🛠️ Personalización

### Actualizar tu Información

Edita `index.html`:

- **Nombre y título**: Busca `<h1 class="hero-title">` en la sección Hero
- **Descripción**: Actualiza `<p class="hero-description">`
- **Emails**: Modifica los enlaces `mailto:` en la sección Contacto
- **Links externos**: ORCID, GitHub, LICDIA, etc.
- **Proyectos y publicaciones**: Edita las secciones correspondientes

### Actualizar Blog

En `js/script.js`, modifica el array `blogPosts`:

```javascript
const blogPosts = [
    {
        title: "Tu título de artículo",
        date: "1 de Enero, 2025",
        excerpt: "Descripción corta del artículo...",
        slug: "url-amigable"
    },
    // Agregar más posts
];
```

### Cambiar Colores

En `css/styles.css`, modifica las variables en `:root`:

```css
:root {
    --primary-color: #0066cc;      /* Azul principal */
    --secondary-color: #00a86b;    /* Verde secundario */
    --text-dark: #1a1a1a;          /* Texto oscuro */
    --dark-bg: #f8f9fa;            /* Fondo gris claro */
}
```

### Agregar Secciones

Copia la estructura de una sección existente en HTML y actualiza el CSS según necesites.

## 📱 Responsive Design

La página está optimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Móvil**: Hasta 767px

Los breakpoints están definidos en `css/styles.css` al final del archivo.

## 📧 Formulario de Contacto

El formulario actualmente:
1. Valida campos requeridos
2. Muestra confirmación visual
3. Limpia los campos automáticamente

Para recibir mensajes reales, puedes integrar con:
- **Formspree.io** (gratuito, sin backend)
- **Netlify Forms**
- **Tu propio backend**

## 🎯 SEO & Meta Tags

Actualiza en `<head>` de `index.html`:

```html
<title>Tu Nombre - Tu Profesión</title>
<meta name="description" content="Tu descripción profesional...">
```

## 🔍 Testear Localmente

```bash
# Usa Python (versión 3)
python -m http.server 8000

# O usa Node.js con http-server
npx http-server

# O abre directamente en el navegador:
# file:///ruta/a/tu/index.html
```

Luego accede a `http://localhost:8000`

## 📊 Análisis

Para agregar Google Analytics:

```html
<!-- Agregá esto antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🤝 Contribuciones & Mejoras

Algunas ideas para expandir:
- Agregar sección de testimonios
- Integrar cargas dinámicas de publicaciones desde ORCID API
- Agregar modo oscuro
- Crear gallery de proyectos
- Integrar calendario de disponibilidad
- Agregar descargar CV en PDF

## ⚖️ Licencia

Este proyecto es de uso personal. Siéntete libre de personalizarlo y compartirlo.

## 📞 Soporte

Para preguntas o cambios:
- jmfernandez@unlu.edu.ar
- jmfernandez@itba.edu.ar

---

**Creado con ❤️ para profesionales académicos en IA y Ciencia de Datos**
