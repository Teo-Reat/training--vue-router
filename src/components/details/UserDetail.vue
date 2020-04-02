<template>
    <div>
        <h2>User Detail</h2>
        <p>Yo-ho-ho! User loaded has ID: {{ $route.params.id }}</p>
        <div>
            <router-link tag="button" :to="link">Edit User</router-link>
            <app-return-button></app-return-button>
        </div>
    </div>

</template>

<script>
    import ReturnButton from "../ReturnButton";

    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en', q: 100
                    },
                    hash: '#data'
                }
            }
        },
        components: {
            appReturnButton: ReturnButton
        }
    }
</script>

<style scoped>

</style>