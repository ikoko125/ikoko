<template>
  <div>
    <Header/>
    <main>
    <Nuxt />
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Chakra+Petch:wght@700&family=Kosugi+Maru&family=Alef&family=Oswald:wght@400;700&family=Fredoka+One&family=Pattaya&family=Shippori+Mincho:wght@500;800&display=swap');
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
</style>
