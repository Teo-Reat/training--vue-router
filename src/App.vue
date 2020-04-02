<template>
    <div id="app">
        <h1>Some SPA</h1>
        <router-view name="header-top"></router-view>
        <transition name="company">
            <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
    </div>
</template>

<style>
    h1 {
        text-align: center;
    }
    /* base */
    .company {
        backface-visibility: hidden;
        z-index: 1;
    }

    /* moving */
    .company-move {
        transition: all 600ms ease-in-out 50ms;
    }

    /* appearing */
    .company-enter-active {
        transition: all 400ms ease-out;
    }

    /* disappearing */
    .company-leave-active {
        transition: all 200ms ease-in;
        position: absolute;
        z-index: 0;
    }

    /* appear at / disappear to */
    .company-enter,
    .company-leave-to {
        opacity: 0;
    }
</style>
