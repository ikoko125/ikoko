<template>
    <header id="header" :class="{ '-fixed': scrollY > 600 }">
        <!-- <img src="/logo.gif"> -->
          <p id="topi"><nuxt-link to="/"><Bantetsu id="tlogo"></Bantetsu></nuxt-link></p>
        <ul>
            <li><nuxt-link to="/">TOP</nuxt-link></li>
            <li><nuxt-link to="/news">News</nuxt-link></li>
            <li><nuxt-link to="/ASHI">ASHI</nuxt-link></li>
            <li><nuxt-link to="/">Gallery</nuxt-link></li>
        </ul>
        <div id="hd-r" @click="mn">
          <img alt="menu" src="/image/menu.png">
          </div>
          <div id="mnt" v-if="mnt" :class="{ 'disable': mnt > false }">
            <div id="mntc">
              <div class="menu" v-if="mnt" @click="mnt = false">
                <nuxt-link to="/"><p>TOP</p></nuxt-link>
              </div>
              <div class="menu" v-if="mnt" @click="mnt = false">
                <nuxt-link to="/news"><p>News</p></nuxt-link>
              </div>
              <div class="menu" v-if="mnt" @click="mnt = false">
                <nuxt-link to="/ASHI"><p>ASHI</p></nuxt-link>
              </div>
              <div class="menu" v-if="mnt" @click="mnt = false">
                <nuxt-link to="/"><p>Gallery</p></nuxt-link>
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
        width: 80%;
        text-align: center;
        user-select: none;
        cursor: pointer;
        padding: 0.7rem 1.3rem;
        border-radius: 1.5rem;
        background-color: #f1f1f1;
        display: inline-block;
      animation: 1s forwards mntamenu;
    a{
    font-family: 'Fredoka One', cursive;
    font-size: 2rem;
    color: #353535;
    }
    color: #353535;
    user-select: none;
    cursor: pointer;
    &:hover{
      transform: scale(1.05) !important;
    }
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
    user-select: none;
    cursor: pointer;
    &:hover{
      transform: scale(1.2);
    }
      }
    @keyframes mnta {
      0%{
        background-color: transparent;
        opacity: 0;
      }
      100%{
        background-color: #0009;
        opacity: 1;
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
        background-color: #f1f1f1;
        width: 100%;
        transition: 0.6s;
    }
    #topi{
      margin-right: 2.5rem;
      display: inline-block;
      vertical-align: middle;
      
    }
    
      #tlogo{
        display: block;
        height: 30px;
      }
    ul{
      display: inline-flex;
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
        box-shadow: 0 -0.3rem 1rem 0.5rem #202337;
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
    color: #3a3c46;
    text-decoration: none;
    padding: 0.65rem 2.25rem;
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
        height: 1rem;
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