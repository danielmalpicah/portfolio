// Run with: node scripts/generate-og.mjs
// Generates public/og.png — the Open Graph image for the portfolio

import { Resvg, initWasm } from '@resvg/resvg-wasm';
import satori from 'satori';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Init WASM (accepts Buffer in Node.js)
const wasmBuffer = readFileSync(
  resolve(__dirname, '../node_modules/@resvg/resvg-wasm/index_bg.wasm')
);
await initWasm(wasmBuffer);

// Fetch Inter font weights from Google Fonts
async function fetchFont(weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`,
    {
      headers: {
        // Older Android UA → Google Fonts returns TTF (not WOFF2); satori only supports TTF/OTF
        'User-Agent': 'Mozilla/5.0 (Linux; Android 4.4; Nexus 4 Build/KRT16S)',
      },
    }
  ).then((r) => r.text());

  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff2)'\)/)?.[1];
  if (!url) throw new Error(`Font URL not found for weight ${weight}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

const [fontSemibold, fontExtrabold] = await Promise.all([
  fetchFont(600),
  fetchFont(800),
]);

const svg = await satori(
  {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '64px 72px',
        backgroundColor: '#0a0a0a',
        position: 'relative',
      },
      children: [
        // Gradient bar at top
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '5px',
              background: 'linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)',
            },
            children: '',
          },
        },
        // DM. monogram top-right
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '48px',
              right: '72px',
              fontSize: '32px',
              fontWeight: 800,
              color: '#7c3aed',
              letterSpacing: '-1px',
            },
            children: 'DM.',
          },
        },
        // Main content
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column' },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '82px',
                    fontWeight: 800,
                    color: '#f4f4f5',
                    lineHeight: '1',
                    letterSpacing: '-3px',
                  },
                  children: 'Daniel Malpica',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#71717a',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    marginTop: '18px',
                  },
                  children: 'Desarrollo Web & Automatizaciones',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#06b6d4',
                    marginTop: '44px',
                  },
                  children: 'danielmalpica.dev',
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: fontSemibold, weight: 600, style: 'normal' },
      { name: 'Inter', data: fontExtrabold, weight: 800, style: 'normal' },
    ],
  }
);

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
const pngBuffer = resvg.render().asPng();

const outputPath = resolve(__dirname, '../public/og.png');
writeFileSync(outputPath, pngBuffer);
console.log('✅  OG image generated → public/og.png (' + pngBuffer.length + ' bytes)');
