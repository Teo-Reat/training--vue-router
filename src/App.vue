<template>
    <div id="app">
        <h1>Some SPA</h1>
        <app-header></app-header>
        <router-view></router-view>
<!--        <home></home>-->
    </div>
</template>

<script>
    import Header from "./components/Header";

    export default {
        components: {
            // Home: Home
            appHeader: Header
        }
    }
</script>

<style>
    h1 {
        text-align: center;
    }
</style>
