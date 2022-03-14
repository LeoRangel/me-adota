import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  // Font
  --primary-font: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

  // Color
  --primary-color: #F2A007;
  --primary-color-l: #FCE4B6;
  --primary-color-d: #AB7507;
  --gray-1: #25292D;
  --gray-2: #40474F;
  --gray-3: #65707B;
  --gray-4: #B0B8BF;
  --gray-5: #F1F2F3;
  --gray-6: #FFFFFF;

  // Spacing -> 1rem = 16px
  --spacing-1: .25rem; // 4px
  --spacing-2: .5rem; // 8px
  --spacing-3: .75rem; // 12px
  --spacing-4: 1rem; // 16px
  --spacing-5: 1.5rem; // 24px
  --spacing-6: 2rem; // 32px
  --spacing-7: 3rem; // 48px
  --spacing-8: 3.75rem; // 60px

  // Padding
  --pd-container: 0 var(--spacing-5);

  // Radius
  --border-radius-1: .5rem;
  --border-radius-2: .75rem;
  --border-radius-3: 1rem;

  // Shadow
  --shadow-1: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  --shadow-2: 0px 0.25rem 1.5rem rgba(0, 0, 0, 0.25);
  // --shadow-2: 0 .5rem 1rem rgba(0,0,0,.15)!important;

  // Transition
  --bg-transition: background .5s;
}

[data-theme="dark"] {
  // Color
  --gray-1: #F1F2F3;
  --gray-2: #B0B8BF;
  --gray-3: #65707B;
  --gray-4: #40474F;
  --gray-5: #25292D;
  --gray-6: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  font-size: 16px;
  font-family: var(--primary-font);
  color: var(--gray-1);
  background-color: var(--gray-5);
  position: relative;
  overflow-x: hidden;
  transition: var(--bg-transition);
}
`;