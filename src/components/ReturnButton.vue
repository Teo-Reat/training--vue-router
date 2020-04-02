<template>
    <button @click="navigateToHome">Go to Home</button>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style>
    button {
        padding: 10px 20px;
        border: none;
        background: darkblue;
        color: white;
        font-size: 14px;
    }

    button:hover {
        background: blue;
        cursor: pointer;
    }
</style>