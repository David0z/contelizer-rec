<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Project name</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li :class="{ active: $route.path === '/exercise1' }" class="nav-item">
            <RouterLink to="/exercise1" class="nav-link">Exercise 1</RouterLink>
          </li>
          <li :class="{ active: $route.path === '/exercise2' }" class="nav-item">
            <RouterLink to="/exercise2" class="nav-link">Exercise 2</RouterLink>
          </li>
          <li :class="{ active: $route.path === '/exercise3' }" class="nav-item">
            <RouterLink to="/exercise3" class="nav-link">Exercise 3</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
