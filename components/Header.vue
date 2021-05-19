<template>
    <header>
        <!-- <img src="/logo.gif"> -->
        <ul>
            <li><nuxt-link to="unco">unco</nuxt-link></li>
            <li><nuxt-link to="unco">unco</nuxt-link></li>
            <li><nuxt-link to="unco">unco</nuxt-link></li>
        </ul>
    </header>
</template>

<style scoped>
    ul * {
        list-style: none;
        ;
    }
    ul li{
        display:inline;
    }

    ul{
        padding: 0;
    }
    a{
        display: block;
        padding: 1rem;
        text-align: center;
        background-color: #222;
    }
</style>