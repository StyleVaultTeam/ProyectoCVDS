import { createGlobalStyle } from 'styled-components';

export const screenSizes = {
  movil: `(min-width: 320px) and (max-width: 530px)`,
  tablet: `(min-width: 531px) and (max-width: 1024px)`,
  escritorio: `(min-width: 1025px) and (max-width: 1920px)`,
};

export const EstilosGlobales = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Galano Grotesque', 'Raleway', system-ui, -apple-system, Segoe UI, Ubuntu, Cantarell,
    Noto Sans, sans-serif;
  -webkit-text-size-adjust: 100%;


  /* Color principal de la aplicación */
  --brand-hue: 218;
  --brand-saturation: 100%;
  --brand-lightness: 23%;

  /* colores adicionales, gama de grises, fundamentales y del sistema */
  --color-icono:rgb(209, 170, 102);
  --color-1: rgb(50, 51, 128);
  
  --color-gris: hsl(216 45% 11%);
  --color-gris-1: hsl(217 23% 20%);
  --color-gris-2: hsl(216 14% 29%);
  --color-gris-3: hsl(216 6% 46%);
  --color-gris-4: hsl(216 5% 64%);
  --color-gris-5: hsl(216 5% 82%);
  --color-gris-6: hsl(210 4% 91%);
  --color-gris-7: hsl(240 4% 95%);

  --color-blanco: hsl(0 100% 100%);
  --color-negro: hsl(0 0% 18%);


  --font-family-primario: 'Montserrat';
  --font-family-secundario: 'Raleway';
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --size-factor: 1;
  --fundamental: clamp(0.8125rem, 0.8vmax, 1rem);

  --golden-tittle-max: calc(var(--fundamental) * 1.62);
  --golden-tittle-mid: calc((var(--fundamental) * 1.62) * var(--size-factor));
  --golden-tittle-min: calc(var(--golden-tittle-max) - 6.5px);
  --golden-subtittle-max: calc(var(--fundamental) * 1.47);
  --golden-subtittle-mid: calc((var(--fundamental) * 1.47) * var(--size-factor));
  --golden-subtittle-min: calc(var(--golden-subtittle-max) - 5.9px);
  --golden-paragraph-max: calc(var(--fundamental) * 1.4);
  --golden-paragraph-mid: calc((var(--fundamental) * 1.25) * var(--size-factor));
  --golden-paragraph-min: calc((var(--fundamental) * 1.25) - 5.3px);
  --golden-label-max: calc(var(--fundamental) * 1.21);
  --golden-label-mid: calc((var(--fundamental) * 1.21) * var(--size-factor));
  --golden-label-min: calc(var(--golden-label-max) - 4.8px);
  --golden-warning-max: calc(var(--fundamental) * 1.1);
  --golden-warning-mid: calc((var(--fundamental) * 1.1) * var(--size-factor));
  --golden-warning-min: calc(var(--golden-warning-max) - 4.4px);

  --titulo: clamp(var(--golden-tittle-min),
      var(--golden-tittle-mid),
      var(--golden-tittle-max));
  --subtitulo: clamp(var(--golden-subtittle-min),
      var(--golden-subtittle-mid),
      var(--golden-subtittle-max));
  --parrafo: clamp(var(--golden-paragraph-min),
      var(--golden-paragraph-mid),
      var(--golden-paragraph-max));
  --etiqueta: clamp(var(--golden-label-min),
      var(--golden-label-mid),
      var(--golden-label-max));
  --mensages: clamp(var(--golden-warning-min),
      var(--golden-warning-mid),
      var(--golden-warning-max));

  --icons-size: clamp(1.25rem, 1.2vmax, 1.5rem);
  --custom-border-radius: 0.625em;


:root {
  --primario: var(--color-1);
  --secundario: var(--color-2);
  --color-primario-text: var(--color-negro);
  --color-secundario-text: var(--color-blanco);
  --primera-superficie: var(--color-blanco);
  --shadow-1: var(--color-gris-5) 0px 8px 24px;
  --shadow-2: var(--color-gris-5) 1.95px 1.95px 2.6px;
  --shadow-3: var(--color-gris-5) 0px 1px 4px;
  --shadow-4: var(--color-gris-4) 0px 3px 8px;
  --shadow-5: var(--color-gris-7) 0px 1px 1px 0px inset,
    var(--color-gris-5) 0px 50px 100px -20px,
    var(--color-gris-5) 0px 30px 60px -30px;
  --shadow-6: var(--color-gris-5) 0px 2px 5px -1px,
    var(--color-gris-5) 0px 1px 3px -1px;
  --shadow-7: var(--color-gris-6) 0px 4px 12px;
  --shadow-8: var(--color-gris-6) 0px 2px 8px 0px;
  --color-modals: #d6d6d799;
}

@media (prefers-color-scheme: dark) {
  :root {
  --primario: var(--color-1);
  --secundario: var(--color-2);
  --color-primario-text: var(--color-negro);
  --color-secundario-text: var(--color-blanco);
  --primera-superficie: var(--color-blanco);
  --shadow-1: var(--color-gris-5) 0px 8px 24px;
  --shadow-2: var(--color-gris-5) 1.95px 1.95px 2.6px;
  --shadow-3: var(--color-gris-5) 0px 1px 4px;
  --shadow-4: var(--color-gris-4) 0px 3px 8px;
  --shadow-5: var(--color-gris-7) 0px 1px 1px 0px inset,
    var(--color-gris-5) 0px 50px 100px -20px,
    var(--color-gris-5) 0px 30px 60px -30px;
  --shadow-6: var(--color-gris-5) 0px 2px 5px -1px,
    var(--color-gris-5) 0px 1px 3px -1px;
  --shadow-7: var(--color-gris-6) 0px 4px 12px;
  --shadow-8: var(--color-gris-6) 0px 2px 8px 0px;
  --color-modals: #d6d6d799;
   
  }
}

html[data-theme='dark'] {
   --primario: var(--color-1);
  --secundario: var(--color-2);
  --color-primario-text: var(--color-negro);
  --color-secundario-text: var(--color-blanco);
  --primera-superficie: var(--color-blanco);
  --shadow-1: var(--color-gris-5) 0px 8px 24px;
  --shadow-2: var(--color-gris-5) 1.95px 1.95px 2.6px;
  --shadow-3: var(--color-gris-5) 0px 1px 4px;
  --shadow-4: var(--color-gris-4) 0px 3px 8px;
  --shadow-5: var(--color-gris-7) 0px 1px 1px 0px inset,
    var(--color-gris-5) 0px 50px 100px -20px,
    var(--color-gris-5) 0px 30px 60px -30px;
  --shadow-6: var(--color-gris-5) 0px 2px 5px -1px,
    var(--color-gris-5) 0px 1px 3px -1px;
  --shadow-7: var(--color-gris-6) 0px 4px 12px;
  --shadow-8: var(--color-gris-6) 0px 2px 8px 0px;
  --color-modals: #d6d6d799;
   
}

html[data-theme='light'] {
   --primario: var(--color-1);
  --secundario: var(--color-2);
  --color-primario-text: var(--color-negro);
  --color-secundario-text: var(--color-blanco);
  --primera-superficie: var(--color-blanco);
  --shadow-1: var(--color-gris-5) 0px 8px 24px;
  --shadow-2: var(--color-gris-5) 1.95px 1.95px 2.6px;
  --shadow-3: var(--color-gris-5) 0px 1px 4px;
  --shadow-4: var(--color-gris-4) 0px 3px 8px;
  --shadow-5: var(--color-gris-7) 0px 1px 1px 0px inset,
    var(--color-gris-5) 0px 50px 100px -20px,
    var(--color-gris-5) 0px 30px 60px -30px;
  --shadow-6: var(--color-gris-5) 0px 2px 5px -1px,
    var(--color-gris-5) 0px 1px 3px -1px;
  --shadow-7: var(--color-gris-6) 0px 4px 12px;
  --shadow-8: var(--color-gris-6) 0px 2px 8px 0px;
  --color-modals: #d6d6d799;
}

html[data-theme='dim'] {
    --primario: var(--color-1);
  --secundario: var(--color-2);
  --color-primario-text: var(--color-negro);
  --color-secundario-text: var(--color-blanco);
  --primera-superficie: var(--color-blanco);
  --shadow-1: var(--color-gris-5) 0px 8px 24px;
  --shadow-2: var(--color-gris-5) 1.95px 1.95px 2.6px;
  --shadow-3: var(--color-gris-5) 0px 1px 4px;
  --shadow-4: var(--color-gris-4) 0px 3px 8px;
  --shadow-5: var(--color-gris-7) 0px 1px 1px 0px inset,
    var(--color-gris-5) 0px 50px 100px -20px,
    var(--color-gris-5) 0px 30px 60px -30px;
  --shadow-6: var(--color-gris-5) 0px 2px 5px -1px,
    var(--color-gris-5) 0px 1px 3px -1px;
  --shadow-7: var(--color-gris-6) 0px 4px 12px;
  --shadow-8: var(--color-gris-6) 0px 2px 8px 0px;
  --color-modals: #d6d6d799;
}

 }
`;