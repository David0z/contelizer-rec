<script lang="ts" setup>
import { type User } from '@/services/modules/goRest/types'
import UserListItem from './UserListItem.vue';

const props = defineProps<{
  users: User[]
}>()
</script>

<template>
  <div class="d-flex flex-wrap gap-4 mb-5">
    <UserListItem v-for="(user) in props.users" :key="user.id" :user="user"/>
  </div>
</template>