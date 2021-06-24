<template>
<div id="aaa" :class="{ 'view': scrollY > 6 }" >
    <h1 id="bbb" :class="{ 'view': scrollY > 6 }">TEST</h1>
    <h2 :class="{ 'view': scrollY > 16 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 16 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 26 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 26 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 36 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 36 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 46 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 46 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 56 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 66 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 76 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 86 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 96 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 106 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 116 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 116 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 116 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 116 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 116 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 116 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 116 }">TEST</h2>
    <h2 :class="{ 'view': scrollY > 116 }">TEST</h2>
    <p @click="test">aaa</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            viewx : false,
        }
    },
  mounted() {
    // fetch cards
    window.addEventListener('scroll', this.handleScroll)
  },
    methods:{
        window:onload = function(){
            this.viewx = false;
            setTimeout(this.viewx = !this.viewx, 2000);
        },
        test() {
            this.viewx = !this.viewx;
        },
        handleScroll() {
            this.scrollY = window.scrollY
        }
    },
}
</script>

<style lang="scss" scoped>
    h1, h2{
        margin: 10rem 0;
        color: #444;
    }
    .view{
        color: #466;
    }
</style>