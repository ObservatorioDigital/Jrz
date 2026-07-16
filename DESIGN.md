# Observatorio Juárez — Especificación de Diseño (v3)

> **v3 (2026-07-02) — VIGENTE. Fidelidad al mockup original del usuario.**
> El archivo `2356f2b2-cfd6-4fcd-9fa1-86a21e2dcdb9.png` (raíz del proyecto) es la
> ÚNICA referencia visual. Las v1 (dossier cartoon) y v2 (editorial sobrio) quedan
> descartadas: el usuario las rechazó por desviarse de su idea original.
>
> ## Sistema visual v3 — dashboard cívico claro (del mockup)
> - **Página:** fondo gris claro frío (#F0F1F3); tarjetas BLANCAS con radius
>   10-12px y sombra suave difusa (0 1px 3px rgba(16,24,40,.08), 0 4px 12px
>   rgba(16,24,40,.06)). Nada de hairlines duras como marco principal.
> - **Tipografía:** display **"Oswald"** 600/700 EN MAYÚSCULAS para titulares
>   grandes y títulos de sección (condensada, cuadrada, fuerte — lo que pidió el
>   usuario); cuerpo y UI **"Public Sans"** 400/500/600/700. Nada de serifas.
> - **Colores:** tinta #1E2328; gris texto secundario #5A6472; ROJO #A6271F
>   (botones primarios, números, acentos); VERDE BOSQUE #1E5B3C (chips de iconos,
>   bullets, botón secundario); crema SOLO como acento mínimo. Iconos en chips
>   circulares verde oscuro o rojo con glifo blanco.
> - **Estructura fiel al mockup:** nav blanco con logo lupa + links + botón rojo;
>   hero = FOTO de Juárez a sangre completa (assets/hero-juarez.jpg) con overlay
>   oscuro suave, botón play arriba, H1 Oswald blanco gigante en caps, subtítulo,
>   form de email inline (input blanco + botón rojo SUSCRÍBETE); franja de 4 stats
>   como TARJETA BLANCA FLOTANTE que traslapa el borde inferior del hero (chip
>   icono circular + número grande rojo/verde + etiqueta gris 2 líneas);
>   3 tarjetas blancas (Infografía con lista de temas con iconitos + dona
>   conic-gradient a la derecha + link "Ver infografía completa →"; Video 16:9
>   con play; Galería 2×3 + link "Ver galería completa →"); banda divisoria clara
>   con icono de reloj en círculo rojo y título Oswald caps "LÍNEA DEL TIEMPO /
>   CRONOLOGÍA DEL REZAGO EN CD. JUÁREZ" (la timeline completa vive debajo, en
>   tarjetas blancas); 2 tarjetas de mapas (bullets verdes/rojos + mapa Leaflet +
>   botón verde "Explorar mapa →" / botón rojo "Consultar denuncias →"); franja de
>   memes (tarjetas oscuras, texto blanco impact, flechas ‹ ›); footer barra clara
>   con el lema, "Cd. Juárez, Chihuahua, México" y bandera de México.
> - Motion: reveals suaves (fade-up ≤16px), counters, hovers con sombra que sube
>   un nivel. prefers-reduced-motion respetado.
> - Sigue vigente TODO lo de contrato DOM (sección 4) y ética (sección 5).

> **v2 (2026-07-02):** rediseño de dirección de arte. La v1 resultó demasiado
> "cartoon" (sombras duras desplazadas, bordes 2px, titulares Archivo Black en
> caps, cinta marquee tipo precaución). La v2 es sobria y editorial: periodismo
> de investigación serio. Ver sección 2-bis, que SUSTITUYE al sistema visual v1.

Sitio single-page estático (HTML + CSS + JS vanilla, sin frameworks ni build step).
Se abre con doble clic en `index.html`. Deploy futuro: Vercel/Hostinger como sitio estático.

## 1. Concepto y dirección estética

**Tono: dossier de periodismo de investigación fronterizo.** No es un blog ni una landing
corporativa: es un expediente ciudadano. Estética editorial seria — papel periódico,
tinta, sellos de "EXPEDIENTE", datos duros — con el desierto de Juárez como atmósfera
(tonos arena/óxido) y un rojo de alerta como acento dominante.

Lo memorable: el sitio se siente como un **expediente abierto contra el rezago de la
ciudad** — texturas de papel, encabezados tipo titular de periódico en condensada
gigante, números que cuentan (counters), y un lema que divide la página como cinta
de "precaución".

## 2. Sistema visual

### Paleta (CSS custom properties en `:root`)
```css
--ink:        #1A1714;  /* texto principal, casi negro cálido */
--paper:      #F4EFE6;  /* fondo base, papel envejecido */
--paper-dark: #E8E0D0;  /* paneles alternos */
--rust:       #9E2B25;  /* ROJO ALERTA - acento dominante (botones, subrayados, pins) */
--rust-dark:  #6E1B17;  /* hover / franjas */
--desert:     #C4A575;  /* arena, bordes, detalles */
--olive:      #4A5D3A;  /* verde institucional apagado (iconos, pins secundarios) */
--night:      #14100D;  /* secciones oscuras (hero, denuncias, footer) */
--paper-on-night: #EDE6D6; /* texto sobre oscuro */
```
Regla: fondos claros (papel) para secciones informativas; fondos `--night` para hero,
mapa de denuncias y footer. El rojo `--rust` se usa con intención, nunca decorativo.

### Tipografía (Google Fonts, cargar en `<head>`)
- **Display / titulares:** `"Archivo Black"` — todo caps, tracking apretado, tamaños
  grandes (clamp(2.5rem, 7vw, 5.5rem) en hero).
- **Subtítulos / etiquetas / nav:** `"Archivo"` (weights 500–700), caps con
  letter-spacing 0.08em para etiquetas tipo "SECCIÓN 01 — INFOGRAFÍA".
- **Cuerpo:** `"Newsreader"` (serif editorial, weights 400/600, itálica para citas).
- Nada de Inter/Roboto/system-ui.

### Texturas y detalles
- Grain/noise sutil sobre secciones oscuras (SVG feTurbulence inline como
  background-image data-URI, opacity ~0.06).
- Bordes de 2px sólidos `--ink` en tarjetas (estilo prensa impresa), sombras duras
  desplazadas (`box-shadow: 6px 6px 0 var(--ink)`), NO sombras difusas suaves.
- Etiquetas de sección numeradas: "01 / INFOGRAFÍA", "02 / GALERÍA"… con línea
  horizontal que cruza.
- Separador-lema entre bloques: franja diagonal-repetida tipo cinta de precaución
  en `--rust` con texto en marquee lento.

### Motion
- Hero: título aparece con reveal escalonado (cada palabra sube con
  `animation-delay`), CSS only.
- Counters de la franja de estadísticas: animación numérica al entrar en viewport
  (IntersectionObserver, JS).
- Scroll-reveal genérico: elementos con clase `.reveal` reciben `.visible`
  (IntersectionObserver) → fade-up 0.6s.
- Marquee del lema: CSS `@keyframes` translateX infinito.
- Hover en tarjetas: la sombra dura crece 2px y la tarjeta se desplaza -2px.
- Respetar `prefers-reduced-motion`.

## 2-bis. Sistema visual v2 — SOBRIO / EDITORIAL (vigente)

Referencia mental: reportaje especial de un diario serio (El País/NYT
investigaciones) + informe institucional. Autoridad, no protesta gráfica.

### Paleta v2
```css
--ink:        #17150F;  /* casi negro cálido */
--paper:      #F7F5EF;  /* fondo claro, sin amarillear demasiado */
--paper-dark: #EDEAE1;  /* paneles alternos */
--rust:       #8C1D18;  /* rojo profundo — SOLO acentos: links, datos, subrayados finos */
--rust-dark:  #5E1310;
--desert:     #B39B6E;  /* dorado apagado, solo detalles mínimos (filetes, numeración) */
--olive:      #44523A;
--night:      #12100B;
--paper-on-night: #EAE6DB;
--hairline:   rgba(23,21,15,0.18);           /* bordes finos sobre claro */
--hairline-night: rgba(234,230,219,0.22);    /* bordes finos sobre oscuro */
```

### Tipografía v2
- **Titulares:** `"Source Serif 4"` (weights 600/700), **sentence case** (NO all-caps),
  tracking normal o ligeramente negativo. Tamaños grandes pero elegantes.
- **Etiquetas/nav/botones:** `"Archivo"` 500/600 en caps pequeñas con
  letter-spacing 0.12em y tamaño reducido (0.7–0.78rem). Archivo Black se ELIMINA
  (solo puede quedar, opcionalmente, en el logotipo del nav a tamaño pequeño).
- **Cuerpo/citas:** `"Newsreader"` se mantiene (400/600, itálica en citas).
- Números de estadísticas: Source Serif 4 700, grandes, en --ink (no en rojo);
  la etiqueta debajo en Archivo caps pequeñas.

### Reglas de estilo v2 (sustituyen a las v1)
- **Bordes:** 1px `--hairline` (nunca 2px sólidos --ink). Tarjetas = fondo papel,
  hairline, radius 0, SIN sombra (o sombra difusa casi imperceptible
  `0 1px 2px rgba(0,0,0,0.06)` como máximo). PROHIBIDAS las sombras duras
  desplazadas (`6px 6px 0`).
- **Hover de tarjetas:** solo cambio sutil (borde se oscurece o fondo pasa a
  --paper-dark). Sin desplazamientos ni sombras que crezcan.
- **Cinta marquee de precaución: ELIMINADA.** El lema entre secciones pasa a ser
  un separador tipográfico sobrio: línea fina, lema centrado en Newsreader
  itálica, línea fina (estilo "epígrafe" de periódico).
- **Etiquetas de sección:** "01 / Infografía" en Archivo caps pequeñas
  color --desert + filete fino; sin cajas/badges con fondo.
- **Botones:** planos, rectangulares; primario = fondo --ink texto papel; el rojo
  --rust solo para el CTA más importante (Reportar/Consultar denuncias). Hover:
  oscurecer. Sin sombras.
- **Hero:** se mantiene fondo --night + skyline con X roja (bajar la intensidad
  del drop-shadow rojo), pero el H1 pasa a Source Serif 4 en sentence case:
  "Ciudad Juárez, bajo la lupa" con "bajo la lupa" en itálica o con subrayado
  fino --rust de 2px. El reveal escalonado se conserva pero más discreto
  (fade-up suave, sin saltos grandes).
- **Barras de infografía:** más delgadas (6px), fondo hairline, relleno --rust;
  porcentaje en Source Serif 600.
- **Pins de mapas:** puntos de 12px con anillo blanco fino (ya existen) — ok,
  pero popups con hairline y sin sombra dura.
- **Memes:** la sección se conserva (es contenido, no decoración) pero el marco
  se neutraliza: tarjetas con hairline, texto de meme puede seguir en una sans
  bold condensada (es el género del meme) aunque SIN text-shadow duro de 2px;
  la introducción de la sección en tono editorial serio.
- **Timeline:** línea central 1px hairline, puntos de 8px --rust, tarjetas
  hairline sin sombra; fechas en Archivo caps pequeñas --rust.
- **Grain:** se conserva solo en secciones --night, opacidad ≤0.04.
- **Motion:** conservar reveals y counters, pero curvas suaves y distancias
  cortas (translateY ≤ 16px). Nada de marquees.

## 3. Estructura del sitio (orden vertical)

1. **Nav sticky** `#nav` — fondo `--paper` con borde inferior 2px `--ink`. Logo texto
   "OBSERVATORIO JUÁREZ" (Archivo Black) con una lupa SVG inline. Links: Inicio,
   El Proyecto, Infografía, Galería, Cronología, Mapas, Denuncias, Memes.
   Botón destacado "Reportar" en `--rust`. Hamburguesa en móvil (JS toggle).

2. **Hero** `#inicio` — fondo `--night` con grain + un skyline/montañas de Juárez en
   SVG inline silueteado (la sierra de Juárez con la "X" roja de El Chamizal como
   silueta reconocible, en `--rust`). Contenido:
   - Etiqueta pequeña: "OBSERVATORIO CIUDADANO — CD. JUÁREZ, CHIH."
   - Título animado (H1): "CIUDAD JUÁREZ BAJO LA LUPA" con reveal escalonado y
     "BAJO LA LUPA" subrayado en `--rust`.
   - Subtítulo serif: "Observatorio crítico de la realidad económica y social de
     Ciudad Juárez. Servicios públicos, seguridad y rendición de cuentas."
   - **Video introductorio (1 min):** recuadro 16:9 con borde 2px `--paper-on-night`,
     placeholder con botón play grande (SVG). Al hacer clic muestra mensaje
     "Video próximamente" (o abre modal `#video-modal` listo para recibir un
     embed de YouTube — dejar `data-video-id=""` preparado).
   - Form de suscripción: input email + botón "SUSCRÍBETE" (solo front, al enviar
     muestra mensaje de confirmación, no hay backend).

3. **Franja de estadísticas** `#stats` — 4 counters sobre `--paper`, borde superior e
   inferior 2px: 96 colonias reportando · 245 días documentados · 465 reportes
   ciudadanos · 36,000 vistas acumuladas. Números en Archivo Black `--rust`.

4. **Grid de 3 columnas** `#panorama` (en móvil se apila):
   - **Infografía** `#infografia` — "Temas más señalados": lista con icono SVG +
     barra horizontal de porcentaje por tema: Baches (32%), Basura/Limpia (24%),
     Alumbrado (18%), Obra pública abandonada (14%), Patrullas/Seguridad (12%).
     Las barras se animan (width) al entrar en viewport. Fuente de datos:
     `data.js → TEMAS`.
   - **Sobre el proyecto** `#proyecto` — texto editorial breve (3 párrafos serif)
     explicando qué es el observatorio, por qué vigilar al gobierno municipal, y
     cómo participar. Cita destacada con borde izquierdo `--rust`.
   - **Galería fotográfica** `#galeria` — "Los días difíciles de Juárez": grid 2×3 de
     placeholders (divs con gradiente + etiqueta del tema: "Bache — Col. Anáhuac",
     etc., desde `data.js → FOTOS`). Clic abre lightbox `#lightbox` (JS) con caption.
     Nota visible: "Fotografías ciudadanas — envía la tuya".

5. **Cronología** `#cronologia` — "LÍNEA DEL TIEMPO / CRONOLOGÍA DEL REZAGO EN
   CD. JUÁREZ". Fondo `--paper-dark`. Timeline VERTICAL con línea central 2px
   `--ink`, eventos alternados izquierda/derecha (en móvil todos a la derecha).
   6–8 eventos placeholder desde `data.js → CRONOLOGIA` (cada uno: fecha, título,
   descripción 1-2 líneas, categoría con color). Eventos con `.reveal`.
   IMPORTANTE: los eventos son placeholder editables, redactados como ejemplos
   genéricos verificables por el usuario después ("Ene 2025 — Colonias del
   surponiente reportan 3 semanas sin recolección de basura"), NO inventar hechos
   con nombres propios ni acusaciones específicas.

6. **Mapas (2 columnas)** `#mapas`:
   - **Mapa interactivo — servicios** `#mapa-servicios` (fondo papel): Leaflet +
     OpenStreetMap centrado en Juárez [31.6904, -106.4245], zoom 11. Filtros tipo
     chips (Baches / Basura / Alumbrado / Obras abandonadas) que muestran/ocultan
     capas. ~16 puntos placeholder en `data.js → PUNTOS_SERVICIOS` (coords reales
     dentro de la mancha urbana de Juárez, descripciones genéricas). Pins con
     divIcon de color por categoría (rust, olive, desert, ink).
   - **Mapa de denuncias — seguridad pública** `#mapa-denuncias` (panel `--night`):
     segundo mapa Leaflet con tile oscuro (CartoDB dark_matter). Categorías:
     Mal gobierno / Corrupción / Abusos policiacos / Casos en investigación.
     ~10 puntos placeholder GENÉRICOS (sin nombres de personas ni casos reales
     inventados: "Denuncia ciudadana — presunto abuso de autoridad, reportado a
     la CEDH", etc.) desde `data.js → PUNTOS_DENUNCIAS`. Botón "CONSULTAR
     DENUNCIAS" y disclaimer legal pequeño: "Contenido basado en reportes
     ciudadanos y notas públicas. Toda persona es inocente hasta que se demuestre
     lo contrario."
   - Leaflet 1.9.4 vía CDN unpkg (CSS y JS).

7. **Galería de memes** `#memes` — franja horizontal scrolleable (scroll-snap) sobre
   `--paper` con 8 tarjetas placeholder estilo meme: div con fondo de gradiente
   fuerte, texto Archivo Black arriba/abajo tipo impact ("CUANDO PROMETEN Y NO
   CUMPLEN", "BACHE TRAS BACHE", "ALUMBRADO: MODO AHORRO"…) desde
   `data.js → MEMES`. Flechas ‹ › para scroll (JS). Tono satírico general contra el
   rezago, sin nombres de personas.

8. **Footer** `#contacto` — fondo `--night`: lema "Una ciudad vigilada por su gente es
   una ciudad que puede cambiar.", email de contacto placeholder
   (contacto@observatoriojuarez.mx), redes (iconos SVG placeholder), mini-nav,
   "Cd. Juárez, Chihuahua, México" y disclaimer de proyecto ciudadano independiente.

## 4. Contrato DOM (para coordinar HTML ↔ JS)

El JS SOLO usa estos hooks (IDs/clases exactos):

| Hook | Elemento | Comportamiento JS |
|---|---|---|
| `#nav-toggle` / `#nav-menu` | botón hamburguesa / ul | toggle clase `.open` |
| `.counter[data-target="96"]` | span de cada stat | anima 0→target al ser visible |
| `.reveal` | cualquier bloque | añade `.visible` al entrar en viewport |
| `.tema-bar[data-pct="32"]` | barra de infografía | anima width 0→pct% al ser visible |
| `#galeria-grid` | contenedor galería | JS lo puebla desde `FOTOS` |
| `#lightbox` / `#lightbox-img` / `#lightbox-caption` / `#lightbox-close` | modal | abrir/cerrar |
| `#timeline` | contenedor cronología | JS lo puebla desde `CRONOLOGIA` |
| `#mapa-servicios` | div h≥420px | Leaflet mapa 1 |
| `#mapa-denuncias` | div h≥420px | Leaflet mapa 2 |
| `.map-filter[data-cat="baches"]` | chips filtro mapa 1 | toggle capa + clase `.active` |
| `#memes-track` / `#memes-prev` / `#memes-next` | carrusel | scrollBy ±ancho tarjeta |
| `#subscribe-form` / `#subscribe-msg` | form hero | preventDefault + mensaje ok |
| `#video-placeholder` / `#video-modal` | video hero | abre modal; si no hay video-id, mensaje "próximamente" |

Archivos JS: `js/data.js` (constantes TEMAS, FOTOS, CRONOLOGIA, PUNTOS_SERVICIOS,
PUNTOS_DENUNCIAS, MEMES) y `js/main.js` (todo el comportamiento). Cargar al final
del body: leaflet.js → data.js → main.js. `main.js` debe ser defensivo: si un hook
no existe, saltarlo sin romper (guard clauses), y si `L` (Leaflet) no cargó (sin
internet), mostrar en los divs de mapa un mensaje "El mapa requiere conexión".

## 5. Contenido y ética

- Todo el contenido es PLACEHOLDER editable: crítica al rezago urbano y demanda de
  rendición de cuentas en tono firme pero factual. NO inventar nombres de
  funcionarios, casos judiciales concretos ni cifras presentadas como reales sin
  fuente — usar formulaciones genéricas y marcar con [EDITAR] donde el usuario
  deba poner datos verificados.
- Español de México en todo el sitio. `lang="es-MX"`.
- Accesibilidad: contraste AA, alt/aria-label en todo, focus visible, semántica
  (header/main/section/footer), skip-link.

## 6. Archivos a entregar

```
index.html        ← todo el markup + fuentes + leaflet CSS por CDN
css/styles.css    ← todo el estilo (un solo archivo, variables en :root)
js/data.js        ← datos placeholder
js/main.js        ← interactividad
```
