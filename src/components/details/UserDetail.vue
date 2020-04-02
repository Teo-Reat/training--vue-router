<template>
    <div>
        <h1>User Detail</h1>
        <p>
            Yo-ho-ho! User loaded has ID: {{ $route.params.id }}
        </p>
        <div>
            <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'">Edit User</router-link>
            <app-return-button></app-return-button>
        </div>
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