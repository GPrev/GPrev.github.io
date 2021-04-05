<template>
  <div class="div-body">
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  text-decoration: none;
  padding: 10px 30px;
}

.button:hover {
  color: var(--primary-contrast);
  background-color: rgba(var(--secondary-rgb), 0.2);
}

.div-body {
  background-color: var(--primary);
  z-index: -100;
}

:root {
  --primary: #35495e;
  --primary-contrast: #e4f0ff;
  --secondary: #d7a319;
  --secondary-contrast: #344365;

  --primary-rgb: 53, 73, 94;
  --secondary-rgb: 215, 163, 25;
}
</style>
