<template>
    <div>
        <h2>User Start</h2>
        <ul>
            <router-link
                    to="/user/1"
                    tag="li"
                    active-class="active"><a>User 1</a></router-link>
            <router-link
                    to="/user/2"
                    tag="li"
                    active-class="active"><a>User 2</a></router-link>
            <router-link
                    to="/user/3"
                    tag="li"
                    active-class="active"><a>User 3</a></router-link>
        </ul>
        <app-return-button></app-return-button>
    </div>

</template>

<script>
    import ReturnButton from "../ReturnButton";
    export default {
        components: {
            appReturnButton: ReturnButton
        }
    }
</script>

<style scoped>

</style>