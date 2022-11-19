import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


/* Fonts Used */

@font-face{
  font-family: 'Montserrat';
  src: url(/fonts/montserrat.ttf);
}

@font-face{
  font-family: 'Helvetica';
  font-weight: 900;
  src: url(/fonts/helvetica.ttf);
}

@font-face{
  font-family: 'DM Sans';
  src: url(/fonts/dm-sans.ttf);
}

/* Fonts Used End */



/* ------------------------------------------------------------------ */



/* Fonts Size and Rem selection */

html{
  background-color: #000;
  font-size: 16px;
}

@media screen and (max-width: 800px) {
  
  html{
    font-size: 15px;
  }

}

@media screen and (max-width: 600px) {
  
  html{
    font-size: 14px;
  }

}

@media screen and (max-width: 400px) {
  
  html{
    font-size: 13px;
  }

}

@media screen and (max-width: 300px) {
  
  html{
    font-size: 12px;
  }

}

@media screen and (max-width: 200px) {
  
  html{
    font-size: 11px;
  }

}

@media screen and (max-width: 100px) {
  
  html{
    font-size: 10px;
  }

}

@media screen and (max-width: 80px) {
  
  html{
    font-size: 9px;
  }

}

@media screen and (max-width: 50px) {
  
  html{
    font-size: 8px;
  }

}

@media screen and (max-height: 400px) {
  
  html{
    font-size: 10px;
  }

}


h1 {
  font-size: 2pc;
  line-height: 3pc;
}

h2 {
  font-size: 1.8pc;
  line-height: 3pc;
}

h3 {
  font-size: 1.6pc;
  line-height: 2.5pc;
}

h4 {
  font-size: 1.4pc;
  line-height: 2.5pc;
}

h5 {
  font-size: 1.2pc;
  line-height: 2pc;
}

h6 {
  font-size: 1pc;
  line-height: 1.8pc;
}


/* Fonts Size and Rem selection END */



/* ------------------------------------------------------------------ */



/* Base Elements Styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  font-family: inherit;
  font-size: inherit;
  word-break: break-word;
  line-height: inherit;
}

body {
  min-height: 100vh;
  font-size: .9pc;
  line-height: 1.7pc;
  font-family: Montserrat, Times, 'Times New Roman', serif;
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

body > #root {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

body > #root > .App {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  > div {
    z-index: 50;
  }
}

.absolute-invisibility{
  position: absolute;
  display: none;
  width: 0; height: 0;
  border: 0; outline: 0;
  background: transparent;
}

a{
  color: #0FF0A9;
}

button{
  border: 1px solid grey;
  background-color: transparent;
  outline: 0 none;
  cursor: pointer;
  padding: 0 .5rem;
}

img {
  display: block;
  max-width: 100%;
}


/* Base Elements Styles */



/* ------------------------------------------------------------------ */


/* Magnifing Glass */

.el-img-magnifier-glass {
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 100px;
  height: 100px;
}

/* Magnifing Glass ENDS */


/* ------------------------------------------------------------------ */


/* Custom Scroll bar */

::-webkit-scrollbar {
  width: .3rem;
  height: .3rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.118);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0FF0A9;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #0FF0A9;
}

/* Custom Scroll bar END */

/* ------------------------------------------------------------------ */



/* Autocomplete for Input */

.el-autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.el-autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
}

.el-autocomplete-items div:hover {
  /*when hovering an item:*/
  background-color: #e9e9e9;
}

.el-autocomplete-active {
  /*when navigating through the items using the arrow keys:*/
  background-color: DodgerBlue !important;
  color: #ffffff;
}

/* Autocomplete for Input ENDS */



/* ------------------------------------------------------------------ */


input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

/* ------------------------------------------------------------------ */

@keyframes opacity-in {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes scale-in {
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
}

`

export default GlobalStyle;