import { getUsers, editUser as editRequest } from "@/services/modules/goRest/goRest";
import { type User } from "@/services/modules/goRest/types";
import { ref } from "vue";
import * as bootstrap from 'bootstrap';
const PER_PAGE = 20;

export const useUsers = () => {
  const usersCollection = ref<User[]>([]);
  const currentPage = ref(1);
  const isLoading = ref(false);
  const noResults = ref(false);
  const isSearchResult = ref(false);
  const userToEdit = ref<User | null>(null);

  async function searchUsers(query: string) {
    isSearchResult.value = true;
    isLoading.value = true;

    const slug = `?name=${query}`;
    const { result, error } = await getUsers(slug);

    if (error) {
      isLoading.value = false;
      alert(error);
      return;
    }

    usersCollection.value = result ? result : [];
    isLoading.value = false;
  }

  async function fetchUsers() {
    if (!noResults.value && !isLoading.value) {
      isLoading.value = true;
      const slug = `?page=${currentPage.value}&per_page=${PER_PAGE}`;
      const { result, error } = await getUsers(slug);
      if (error) {
        isLoading.value = false;
        alert(error);
        return;
      }

      if (result && result.length === 0) {
        noResults.value = true;
      }

      usersCollection.value = [...usersCollection.value, ...(result ? result : [])];
      currentPage.value += 1;
      isLoading.value = false;
    }
  }

  async function resetCollection() {
    usersCollection.value = [];
    currentPage.value = 1;
    isLoading.value = false;
    noResults.value = false;
    isSearchResult.value = false;
    await fetchUsers();
  }

  function openEdit(e: Event) {
    if ((e.target as HTMLButtonElement)?.dataset.id) {
      userToEdit.value = usersCollection.value.find(
        (u) => u.id === parseInt((e.target as HTMLButtonElement)?.dataset.id as string)
      )!;
    }
  }

  async function editUser(e: Event) {
    const formData = new FormData(e.target as HTMLFormElement);

    const { result, error } = await editRequest(String(userToEdit.value?.id), formData);
    if (error) {
      isLoading.value = false;
      alert(error);
      return;
    }

    if (result) {
      const toastLiveExample = document.getElementById("liveToast");
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample!);
      toastBootstrap.show();
    }
  }

  return {
    usersCollection,
    fetchUsers,
    isLoading,
    searchUsers,
    isSearchResult,
    resetCollection,
    openEdit,
    userToEdit,
    editUser,
  };
};
