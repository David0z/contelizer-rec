<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-inverse navbar-sticky-top">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <RouterLink class="navbar-brand" to="/">Project name</RouterLink>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li :class="{active: $route.path === '/exercise1'}">
            <RouterLink to="/exercise1">Exercise 1</RouterLink>
          </li>
          <li :class="{active: $route.path === '/exercise2'}">
            <RouterLink to="/exercise2">Exercise 2</RouterLink>
          </li>
          <li :class="{active: $route.path === '/exercise3'}">
            <RouterLink to="/exercise3">Exercise 3</RouterLink>
          </li>
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
