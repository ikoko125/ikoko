<template>
  <div id="nuxt">
    <MainHeader/>
    <main>
    <Nuxt />
    </main>
    <MainFooter/>
  </div>
</template>
<script>
export default {
      data(){
        return{}
    },
    methods:{
      
    }
  
}
</script>
<style>
html,body{
  margin: 0;
  padding:0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
