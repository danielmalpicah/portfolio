# danielmalpica.dev

Portafolio personal de Daniel Malpica — desarrollo web y automatizaciones.

**En vivo:** [danielmalpica.dev](https://danielmalpica.dev)

## Stack

- [Astro 6](https://astro.build) — sitio estático, cero JavaScript en runtime
- CSS puro con design tokens (dark glassmorphism)
- i18n nativo de Astro: español en `/`, inglés en `/en/`
- Deploy automático en Vercel desde `main`

## Estructura

```
src/
├── i18n/ui.ts        # Todas las strings ES/EN — único archivo a editar para textos
├── layouts/Layout.astro  # SEO (canonical, hreflang, OG), tokens CSS globales
├── components/       # Secciones: Navbar, Hero, About, Services, Stack, Projects, Contact, Footer
└── pages/
    ├── index.astro       # Español (idioma por defecto)
    └── en/index.astro    # Inglés
```

## Comandos

| Comando           | Acción                                |
| :---------------- | :------------------------------------ |
| `npm install`     | Instalar dependencias                 |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Build de producción en `./dist/`      |
| `npm run preview` | Previsualizar el build local          |

## Convenciones

- Todo el texto visible vive en `src/i18n/ui.ts` — los componentes reciben las traducciones por props
- No se menciona ubicación geográfica en el contenido
- Commits en inglés, concisos y atómicos
