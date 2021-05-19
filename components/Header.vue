<template>
    <header>
        <!-- <img src="/logo.gif"> -->
        <ul>
            <li><nuxt-link to="">About</nuxt-link></li>
            <li><nuxt-link to="">Works</nuxt-link></li>
            <li><nuxt-link to="">fanfic</nuxt-link></li>
        </ul>
    </header>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Kosugi+Maru&family=Oswald:wght@400;700&family=Fredoka+One&family=Pattaya&family=Shippori+Mincho:wght@500;800&display=swap');
    header{
        background-color: #202337;
    }
    ul * {
        list-style: none;
        ;
    }
    ul li{
        display:inline-block;
    }

    ul{
            display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-top: 23px;
        padding: 0;
        align-content: center;
        vertical-align: middle;
    }
    a{
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