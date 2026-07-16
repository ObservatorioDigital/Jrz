# Observatorio Juárez

Sitio estático del observatorio ciudadano de Ciudad Juárez: servicios públicos,
seguridad y rendición de cuentas.

## Cómo verlo

No requiere build ni dependencias: abrir `index.html` en el navegador, o servirlo
con cualquier servidor estático:

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Estructura

```
index.html        Markup completo del sitio (single page)
css/styles.css    Todos los estilos (variables de diseño en :root)
js/data.js        TODO EL CONTENIDO EDITABLE: temas, cronología, notas del blog,
                  expedientes (PERSONAJES), videos (TRANZAS), memes, denuncias
js/main.js        Interactividad (vanilla JS, sin dependencias)
assets/           Imágenes y videos: hero, personajes/, videos/, notas/, memes/
```

## Secciones

- **Panorama**: infografía, video introductorio y el cartel "Los más buscados".
- **Notas**: blog con lector modal y comentarios (localStorage).
- **Expedientes**: fichas de personajes señalados, con notas de prensa enlazadas.
- **Las tranzas del más chueco**: videoteca de videos verticales.
- **Cronología**: línea de tiempo de casos documentados 2022–2026.
- **Mapas**: baches en vivo (iframe de bachesjrz.com) y mapa de denuncias (Leaflet).

## Deploy

Es un sitio 100% estático: funciona en GitHub Pages, Vercel, Netlify u Hostinger
sin configuración. Los mapas y las fuentes tipográficas requieren internet (CDN).

Para editar contenido (agregar un expediente, un video o una nota), todo está en
`js/data.js` con comentarios que explican cada estructura.
