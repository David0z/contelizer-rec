<script setup lang="ts">
import { ref } from "vue";
import { useUsers } from "@/composables/useUsers";
import { onBeforeMount } from "vue";
import UsersList from "@/components/exercise3/UsersList.vue";
import { useIntersectionObserver } from "@vueuse/core";
import UserEditModal from "@/components/exercise3/UserEditModal.vue";
import UserEditToast from "@/components/exercise3/UserEditToast.vue";

const { fetchUsers, usersCollection, isLoading, searchUsers, isSearchResult, resetCollection, openEdit, userToEdit, editUser } = useUsers();
const infiniteRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLInputElement | null>(null);

async function handleChange(e: Event) {
  if ((e.target as HTMLInputElement)!.value === "") {
    await resetCollection();
  }
}

useIntersectionObserver(
  infiniteRef,
  async () => {
    await fetchUsers();
  },
  { rootMargin: "200px" }
);

onBeforeMount(async () => {
  await fetchUsers();
});
</script>

<template>
  <main>
    <h1>Exercise 3</h1>
    <p>
      Napisz w Vue3 obsługę API dostępnego pod adresem
      <a href="https://gorest.co.in/" target="_blank">https://gorest.co.in/</a>. Aplikacja powinna posiadać widok listy
      użytkowników (pobranych z API) oraz mieć możliwość ich wyszukiwania i edycji istniejących wpisów.
    </p>
    <form class="d-flex mb-4" role="search" @submit.prevent="searchUsers(textRef?.value!)">
      <input
        ref="textRef"
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        @change="handleChange"
      />
      <button class="btn btn-primary" type="submit">Search</button>
    </form>
    <UsersList :users="usersCollection" @click="openEdit" />
    <div class="d-flex align-items-center" v-if="isLoading">
      <strong role="status">Loading...</strong>
      <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
    <div ref="infiniteRef" v-if="!isSearchResult" />
    <div v-else-if="isSearchResult && usersCollection.length === 0">No results found</div>
  </main>
  <UserEditModal :user-to-edit="userToEdit" :edit-user="editUser" />
  <UserEditToast />
</template>
