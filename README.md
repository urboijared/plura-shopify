# plura-shopify

Tema de Shopify (Online Store 2.0) para PLURA: software digital con la identidad de la marca (isotipo de nodos, paleta de la familia POS · CRM · Finanzas · Suite · Connect).

## Conectar a la tienda

1. En Shopify: **Tienda online → Temas → Agregar tema → Conectar desde GitHub**.
2. Elige `urboijared/plura-shopify` y la rama a usar.
3. Personaliza desde el editor de temas y publícalo.

Los cambios hechos en el editor se sincronizan de vuelta al repo como commits.

## Estructura

- `layout/` – `theme.liquid` y `password.liquid`
- `sections/` – portada (`hero`), familia de productos (píldoras de color), características, colección destacada, FAQ, llamado a la acción y las secciones principales (producto, colección, carrito, búsqueda, blog, página, 404, contraseña)
- `snippets/` – isotipo (color, monocromo y con halo), tarjeta de producto, precio, iconos
- `assets/` – `base.css`, `theme.js` (opcional: el tema funciona sin JS), fuentes Nunito e IBM Plex Mono (licencia OFL)
- `templates/` – plantillas JSON
- `locales/es.default.json` – textos en español

## Color de cada producto

Las tarjetas y la página de producto toman el color de la familia en este orden:

1. Metacampo `custom.color_plura` (`blue`, `amber`, `green`, `ink`, `magenta` o en español: `azul`, `ambar`, `verde`, `tinta`, `magenta`).
2. Etiqueta del producto `color:azul`, `color:verde`, etc.
3. El handle: contiene `pos` → azul, `crm` → ámbar, `finanzas` → verde, `suite` → tinta, `connect` → magenta.

## Pendiente

- Textos entre corchetes (`[...]`) en la portada, FAQ y página de producto.
- Elegir la colección de planes en la sección **Colección destacada**.
- Crear los menús `main-menu` y `footer` en **Contenido → Menús**.
- La tipografía original del logotipo (Typo Grotesk Rounded) es una versión demo sin licencia comercial; se reemplazó por Nunito. Si compras la licencia web, agrega el archivo en `assets/` y cambia `--font-display` en `snippets/css-variables.liquid`.
