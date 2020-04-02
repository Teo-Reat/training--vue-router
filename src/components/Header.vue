<template>
    <div>
        <ul>
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    ul {
        margin: 0 auto;
        padding: 0;
        width: 200px;
        list-style-type: none;
    }
    a {
        padding: 10px 20px;
        display: block;
        text-decoration: none;
    }
    a:hover {
        background: blue;
        color: white;
    }
    .active a {
        color: white;
        background: darkblue;
        cursor: default;
    }
</style>