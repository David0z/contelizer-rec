<script lang="ts" setup>
import { type User } from "@/services/modules/goRest/types";

const props = defineProps<{
  userToEdit: User|null;
  editUser: (e: Event) => Promise<void>;
}>()

</script>

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form @submit.prevent="editUser">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="userEditName" class="form-label">Name</label>
              <input type="text" class="form-control" id="userEditName" name="name" placeholder="Name" :value="props.userToEdit?.name"/>
            </div>
            <div class="mb-3">
              <label for="userEditEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="userEditEmail" name="email" placeholder="name@example.com" :value="props.userToEdit?.email"/>
            </div>
            <div class="mb-3">
              <label for="userEditStatus" class="form-label">Status</label>
              <select class="form-select" aria-label="Default select example" id="userEditStatus" name="status" :value="props.userToEdit?.status">
                <option selected>Select status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
