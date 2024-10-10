<script lang="ts" setup></script>

<template>
  <div class="toast-container position-fixed top-0 end-0">
    <div
      class="toast align-items-center text-bg-success border-0 py-2"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      id="liveToast"
    >
      <div class="d-flex">
        <div class="toast-body">User updated successfully!</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>
