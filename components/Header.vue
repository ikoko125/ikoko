<template>
    <header id="header" :class="{ '-fixed': scrollY > 600 }">
        <!-- <img src="/logo.gif"> -->
          <p id="topi"><nuxt-link to="/">top</nuxt-link></p>
        <ul>
            <li><nuxt-link to="/news">News</nuxt-link></li>
            <li><nuxt-link to="">Works</nuxt-link></li>
            <li><nuxt-link to="fanfic">fanfic</nuxt-link></li>
        </ul>
    </header>
</template>
<script>

export default {
  data() {
    return {
      // 座標を指定
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Kosugi+Maru&family=Oswald:wght@400;700&family=Fredoka+One&family=Pattaya&family=Shippori+Mincho:wght@500;800&display=swap');
    header{
        background-color: #202337;
        width: 100%;
        transition: 0.6s;
    }
    #topi{
      margin-right: 5rem;
      display: inline-block;
    }
    ul{
      display: inline;
      width: auto;
    }
    ul * {
        list-style: none;
        ;
    }
    ul li{
        display:inline-block;
    }
    .-fixed{
        position: fixed  !important;
        top:0;
        box-shadow: 0 -0.3rem 1rem 0.5rem #f1f1f1;
    }
    .-fixed:hover{
        box-shadow: 0 -0.3rem 1rem 0.5rem #2273c4;
    }
    ul{
    justify-content: flex-start;
    padding-top: 23px;
        padding: 0;
        align-content: center;
        vertical-align: middle;
    }
    header a, #topi a{
    display: block;
    color: #f1f1f1;
    text-decoration: none;
    margin: 0 1.5rem;
    padding: 0.65rem 1rem;
    font-size: 1.35rem;
    /* font-family: 'Shippori Mincho', serif; */
    /* font-family: 'Pattaya', sans-serif; */
    font-family: 'Fredoka One', cursive;
    letter-spacing: 0.1rem;
    font-weight: 700;
    transition: 0.5s color;
    }
    a:hover{
        color:#1087d7
    }
</style>