# 🚀 Guía de Deployment en GitHub Pages

## Paso a Paso: Publicar tu Tarjeta de Presentación

### Paso 1: Preparar tu Repositorio

#### Si no tienes un repositorio GitHub aún:

1. Ve a https://github.com/new
2. Crea un repositorio nuevo con el nombre exacto: **`{tu-usuario}.github.io`**
   - Reemplaza `{tu-usuario}` por tu nombre de usuario en GitHub
   - Ejemplo: si tu usuario es `jumafernandez`, el repo se llama `jumafernandez.github.io`

3. Marca **"Public"** (debe ser público para que GitHub Pages funcione)
4. Haz click en "Create repository"

### Paso 2: Clonar el Repositorio

Abre tu terminal (Command Prompt, Terminal o Git Bash) y ejecuta:

```bash
git clone https://github.com/tu-usuario/tu-usuario.github.io.git
cd tu-usuario.github.io
```

### Paso 3: Agregar tus Archivos

Copia estos archivos y carpetas a la carpeta del repositorio:

```
tu-usuario.github.io/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── README.md
└── .gitignore (opcional)
```

### Paso 4: Configurar Git

Si es la primera vez que usas Git, configura tu identidad:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@example.com"
```

### Paso 5: Hacer Commit y Push

```bash
# Agregar todos los archivos
git add .

# Crear commit con mensaje descriptivo
git commit -m "Initial commit: professional portfolio website"

# Subir cambios a GitHub
git push -u origin main
```

### Paso 6: Habilitar GitHub Pages (si no está automático)

1. Ve a tu repositorio en GitHub
2. Haz click en **Settings** (Configuración)
3. En el panel izquierdo, selecciona **Pages**
4. Bajo "Source", selecciona **Deploy from a branch**
5. Selecciona rama **main** y carpeta **/root**
6. Haz click en **Save**

### Paso 7: ¡Acceder a tu Sitio!

Tu sitio estará disponible en: **https://tu-usuario.github.io**

Espera unos 30 segundos a 1 minuto para que GitHub publique los cambios.

---

## 📝 Actualizar el Sitio después de Cambios

Cada vez que hagas cambios:

```bash
# 1. Haz tus cambios en los archivos

# 2. Agrega los cambios
git add .

# 3. Crea un commit
git commit -m "Descripción de los cambios"

# 4. Push a GitHub
git push
```

Los cambios se publicarán automáticamente en 30 segundos a 1 minuto.

---

## 🔧 Troubleshooting

### "No veo los cambios"
- Espera 1-2 minutos
- Limpia el cache del navegador: `Ctrl+Shift+Delete` (o `Cmd+Shift+Delete` en Mac)
- Recarga la página: `Ctrl+F5` (o `Cmd+Shift+R` en Mac)

### "Error 404 - Página no encontrada"
- Verifica que el repositorio se llama exactamente `tu-usuario.github.io`
- Asegúrate que es **Public**
- Verifica que tienes un archivo `index.html` en la raíz

### "El sitio se ve roto (sin estilos)"
- Asegúrate que los archivos de CSS están en `css/styles.css`
- Asegúrate que los archivos de JS están en `js/script.js`
- Recarga la página con `Ctrl+F5`

### "La navegación no funciona"
- Abre la consola del navegador: `F12`
- Busca mensajes de error en rojo
- Verifica que no hay errores de rutas en los archivos

---

## 🎨 Personalizar Dominio Personalizado (Opcional)

Si tienes tu propio dominio y quieres usarlo:

1. Ve a **Settings > Pages**
2. Bajo "Custom domain", ingresa tu dominio (ej: `jumafernandez.com`)
3. Sigue las instrucciones para configurar DNS

---

## 📱 Verificar en Móvil

Después de publicar, verifica que funciona en móvil:

1. Abre tu sitio en un navegador móvil
2. Verifica que el diseño se adapta correctamente
3. Prueba todos los links y formularios

---

## 📊 Monitorear tu Sitio

GitHub Pages proporciona estadísticas. Para verlas:

1. Ve a tu repositorio
2. Click en **Deployments** o **Pages**
3. Verás el estado de publicación

---

## 🔐 Seguridad & HTTPS

✅ GitHub Pages automáticamente:
- Proporciona HTTPS (conexión segura)
- Renueva certificados automáticamente
- Protege contra ataques DDoS

---

## 📚 Recursos Adicionales

- **Documentación oficial**: https://docs.github.com/en/pages
- **Git tutorial**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com/

---

## ✅ Checklist Final

- [ ] Creé el repositorio `tu-usuario.github.io` en GitHub
- [ ] Clonée el repositorio localmente
- [ ] Copié todos los archivos (HTML, CSS, JS)
- [ ] Hice commit y push de los cambios
- [ ] El sitio está disponible en `https://tu-usuario.github.io`
- [ ] Verifiqué que se ve bien en desktop y móvil
- [ ] Actualicé mi información personal en `index.html`
- [ ] Probé los links y formularios

---

**¡Listo! Tu tarjeta de presentación profesional está en vivo.** 🎉
