<template>
    <header id="header" :class="{ '-fixed': scrollY > 600 }">
        <!-- <img src="/logo.gif"> -->
          <p id="topi"><nuxt-link to="/"><img id="tlogo" alt="logo" src="/image/jp.png"></nuxt-link></p>
        <ul>
            <li><nuxt-link to="/news">News</nuxt-link></li>
            <li><nuxt-link to="">Works</nuxt-link></li>
            <li><nuxt-link to="fanfic">fanfic</nuxt-link></li>
        </ul>
        <div id="hd-r" @click="mn">
          <img alt="menu" src="/image/menu.png">
          </div>
          <div id="mnt" v-if="mnt">
            <div id="mntc">
              <div class="menu" v-if="mnt">
                <p>news</p>
              </div>
              <div class="menu" v-if="mnt">
                <p>works</p>
              </div>
              <div class="menu" v-if="mnt">
                <p>fanfic</p>
              </div>
            </div>
              <div id="menux">
              <div class="menux" v-if="mnt" @click="mnt = false">
                <p>X CLOSE</p>
              </div>
              </div>
          </div>
    </header>
</template>
<script>

export default {
  data() {
    return {
      // 座標を指定
      scrollY: 0,
      mnt: false
    }
  },
  mounted() {
    // fetch cards
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    mn(){
        this.mnt = true;
      },
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style lang="scss" scoped>
    #mnt{
      display: none;
      grid-template-rows: 2fr 1fr;
      top: 0;
      transition: 0.5s;
      position:fixed;
      width: 100%;
      height: 100%;
      z-index: 10000;
      animation: 1s forwards mnta;
      #mntc{
        display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      }
      .menu{
        padding: 1.5rem 2.5rem;
        border-radius: 1.5rem;
        font-size: 2rem;
        background-color: #f1f1f1;
        display: inline-block;
      animation: 1s forwards mntamenu;
    font-family: 'Fredoka One', cursive;
    color: #353535;
      }
    }
    #menux{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .menux{
        padding: 0.65rem 1.5rem;
        border-radius: 1.5rem;
        font-size: 1.25rem;
        background-color: #f1f1f1;
        display: inline-block;
      animation: 1s forwards mntamenu;
    font-family: 'Fredoka One', cursive;
    color: #353535;
      }
    @keyframes mnta {
      0%{
        background-color: transparent;
      }
      100%{
        background-color: #0009;
      }
    }
    @keyframes mntamenu {
      0%{
        transform: scale(0);
      }
      100%{
        transform: scale(1);
      }
    }
    header{
        z-index: 15;
        background-color: #202337;
        width: 100%;
        transition: 0.6s;
    }
    #topi{
      margin-right: 5rem;
      display: inline-block;
      vertical-align: middle;

      
    }
    
      #tlogo{
        display: block;
        height: 30px;
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
    #hd-r{
      background-color: #1087d7;
      display: none;
      padding: 0.3rem;
      justify-content: center;
      img{
        width: 1rem;
      }
    }
    #mn{
      color: #f1f1f1;
    }
    @media screen and (max-width:800px) {
      #mnt{
        
      display: grid;
      }
      #hd-r{
      display: flex;
      }
      #topi{
        display: flex;
        justify-content: center;
        margin: 0;
      }
      ul{
        display: none;
      }
    }
</style>