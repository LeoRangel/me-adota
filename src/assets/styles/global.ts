import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  // Font
  --primary-font: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

  // Color
  --primary-color: #F2A007;
  --primary-color-l: #FCE4B6;
  --primary-color-d: #AB7507;

  // Color gray constant
  --gray-1-const: #25292D;
  --gray-2-const: #40474F;
  --gray-3-const: #65707B;
  --gray-4-const: #B0B8BF;
  --gray-5-const: #F1F2F3;
  --gray-6-const: #FFFFFF;

  // Color gray toggle theme
  --gray-1: var(--gray-1-const);
  --gray-2: var(--gray-2-const);
  --gray-3: var(--gray-3-const);
  --gray-4: var(--gray-4-const);
  --gray-5: var(--gray-5-const);
  --gray-6: var(--gray-6-const);

  --bg-black-opacity-50: rgba(0,0,0,0.5);


  // Spacing -> 1rem = 16px
  --spacing-1: .25rem; // 4px
  --spacing-2: .5rem; // 8px
  --spacing-3: .75rem; // 12px
  --spacing-4: 1rem; // 16px
  --spacing-5: 1.5rem; // 24px
  --spacing-6: 2rem; // 32px
  --spacing-7: 3rem; // 48px
  --spacing-8: 3.75rem; // 60px
  --spacing-9: 4rem; // 64px

  // Radius
  --border-radius-1: .25rem;
  --border-radius-2: .75rem;
  --border-radius-3: 1rem;

  // Shadow
  --shadow-1: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  --shadow-2: 0 .5rem 1rem rgba(0,0,0,.15);
  --shadow-3: 0px 0.25rem 1.5rem rgba(0, 0, 0, 0.25);

  // Transition
  --bg-transition: background .5s;
}

[data-theme="dark"] {
  // Toggle theme
  --gray-1: var(--gray-6-const);
  --gray-2: var(--gray-5-const);
  --gray-3: var(--gray-4-const);
  --gray-4: var(--gray-3-const);
  --gray-5: var(--gray-2-const);
  --gray-6: var(--gray-1-const);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  margin: 0;
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
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: var(--spacing-6);
  font-weight: bold;
  line-height: 1.2;
}
h1 { font-size: 3.5rem; }
h2 { font-size: 2rem }
h3 { font-size: 1.8rem }
h4 { font-size: 1.5rem }
h5 { font-size: 1.3rem }
h6 { font-size: 1.2rem }

p {
  margin-bottom: var(--spacing-4);
}
p, span, small {
  color: var(--gray-3);
}

// Default Classes

.visually-hidden {
  // This class hides an element in all devices except for the Screen Readers
  position: absolute!important;
  width: 1px!important;
  height: 1px!important;
  padding: 0!important;
  margin: -1px!important;
  overflow: hidden!important;
  clip: rect(0,0,0,0)!important;
  white-space: nowrap!important;
  border: 0!important;
}

@media (min-width: 768px) {
  .hidden-when-md {
    display: flex !important;
  }
  .display-when-md {
    display: none !important;
  }
}
@media (max-width: 768px) {
  .hidden-when-md {
    display: none !important;
  }
  .display-when-md {
    display: flex !important;
  }
}
@media (min-width: 992px) {
  .hidden-when-lg {
    display: flex !important;
  }
  .display-when-lg {
    display: none !important;
  }
}
@media (max-width: 992px) {
  .hidden-when-lg {
    display: none !important;
  }
  .display-when-lg {
    display: flex !important;
  }
}
`;
