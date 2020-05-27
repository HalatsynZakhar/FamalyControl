
<template>
<nav class="navbar navbar-light">
    <div class="container">
    <a class="navbar-brand" href="index.html">Family control</a>
    <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
        <!-- Add "active" class when you're on that page" -->
        <router-link class="nav-link active" to="/">Home</router-link>
        </li>

        <li class="nav-item">
        <router-link class="nav-link" to="/about">
            <i class="ion-compose"></i>&nbsp;About
        </router-link>
        </li>

        <li class="nav-item">
        <router-link class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;Settings
        </router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link" to="/signUp">Sign up</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/signIn">Sign in</router-link>
        </li>

        <li class="nav-item">
        <router-link class="nav-link" to="/child">
            <i class="ion-compose"></i>&nbsp;Control
        </router-link>
        </li>
    </ul>
    </div>
</nav>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class NavBar extends Vue{






}


</script>

<style>

</style>