# plura-shopify

Tema de Shopify (Online Store 2.0) para PLURA: software digital con la identidad de la marca (isotipo de nodos, paleta de la familia POS · CRM · Finanzas · Suite · Connect).

## Conectar a la tienda

1. En Shopify: **Tienda online → Temas → Agregar tema → Conectar desde GitHub**.
2. Elige `urboijared/plura-shopify` y la rama a usar.
3. Personaliza desde el editor de temas y publícalo.

Los cambios hechos en el editor se sincronizan de vuelta al repo como commits.

## Portada

Réplica del sitio de PLURA (Astro) como secciones editables:

1. **Portada**: insignia, título en dos tonos, botones y panel de la app (datos, barras y línea editables; también puedes subir una captura real).
2. **Franja de ventajas**: un solo login, en la nube, soporte cercano.
3. **Módulos** (`#suite`): POS, CRM y Finanzas con lista de funciones; cada uno puede enlazar a un producto de Shopify.
4. **Funciones** (`#funciones`): cuadrícula de 6 celdas.
5. **Cómo funciona**: 3 pasos.
6. **Precios** (`#precios`): planes con cambio mensual/anual; cada plan puede enlazar a un producto para comprarlo.
7. **Testimonios**, **Preguntas frecuentes** (`#faq`) y **Formulario de contacto** (`#contacto`, llega al correo de la tienda).

## Configuración del tema

- **Modo de color**: claro, oscuro o automático (según el sistema del visitante). Colores editables para cada modo.
- **Idioma**: el botón ES/EN aparece cuando publicas inglés en *Configuración → Idiomas*. Los textos del tema ya están en `locales/en.json`; el contenido de las secciones se traduce con la app *Translate & Adapt*.
- **Fuentes**: Geist y Geist Mono (licencia OFL), incluidas en `assets/`.

## Menús que debes crear (Contenido → Menús)

- `main-menu`: Suite `/#suite`, Funciones `/#funciones`, Precios `/#precios`, FAQ `/#faq`, Blog `/blogs/news`
- `footer-producto`, `footer-empresa` y `footer` (Legal)

## Pendiente

- Textos entre corchetes (`[...]`): testimonios reales y respuestas de la FAQ.
- Crear los productos (planes) en Shopify y vincularlos en las secciones Módulos y Precios.
