import css from 'styled-jsx/css'

export default css.global`

    :root{
      
      /* COLORS */
      /* outsider colors */
      --color-white-dirty: #F8F2EB;
      --color-grey-light: #E4E4E4;
      --color-grey-blue: #AAB2BE;
      --color-grey: #646A79;

      /* ifood colors */
      --color-offwhite: #F7F7F7;
      --color-white: #FFFFFF;
      --color-lightgrey: #F2F2F2;
      --color-regulargrey: #DCDCDC;
      --color-mediumgrey: #A6A6A6;
      --color-heavygrey: #717171;
      --color-black: #3E3E3E;
      --color-ifood: #EA1D2C;
      --color-avocado: #50A773;
      --color-blueberry: #2E6788;
      --color-mustard: #E7A74E;
      --color-orange: #FF7752;
      --color-bubblegum: #FCEBEA;

      /* MAIN */
      --main-text-color: var(--color-black);
      --main-font-weight: var(--font-weight-regular);
      --main-background-color: var(--color-white);



      /* FONT WEIGHT */
      --font-weight-light: 300;
      --font-weight-medium: 500;
      --font-weight-regular: normal;
      --font-weight-bold: bold;

      /* BORDER RADIUS */
      --border-radius-soft: 4px;

      /* CONDENSED SHADOW */
      --condensed-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);
      --smallsized-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24);
      --diffuse-shadow: 0px 12px 21px rgba(64, 64, 64, 0.21);
      --drop-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

      /* SCREEN SIZES */
      --screen-size-mobile: 576px;
      --screen-size-tablet: 768px;
      --screen-size-large: 1200px;
  }

  body {
      font-family: 'SulSans', Helvetica, sans-serif !important;
      font-weight: var(--main-font-weight);
      font-size: 16px;
      color: var(--main-text-color);
  }

  a {
      text-decoration: none;
      font-size: 16px;
      color: unset;
  } 

`