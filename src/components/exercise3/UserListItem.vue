<script lang="ts" setup>
import { type User } from "@/services/modules/goRest/types";
const props = defineProps<{
  user: User;
}>();

const { email, gender, name, status, id } = props.user;
</script>

<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title"><b>Name: </b>{{ name }}</h5>
      <p class="card-text">
        <span><b>Email: </b>{{ email }}</span>
        <br />
        <span><b>Gender: </b>{{ gender }}</span>
        <br />
        <span><b>Status: </b>{{ status }}</span>
      </p>
      <button class="btn btn-primary w-100" :data-id="id" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
    </div>
  </div>
</template>
