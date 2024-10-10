<script lang="ts" setup>
import { ref } from "vue";
const peselInput = ref("");
const error = ref<string | null>(null);
const validPesel = ref(false);

function validatePesel() {
  const pesel = peselInput.value.trim();
  if (pesel.length !== 11 || !/^\d+$/.test(pesel)) {
    error.value = "PESEL musi składać się z 11 cyfr.";
    validPesel.value = false;
    return;
  }

  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const digits = pesel.split("").map(Number);
  console.log(digits);
  
  const checksum = (10 - (weights.reduce((acc, w, i) => acc + w * digits[i], 0) % 10)) % 10;

  if (checksum !== digits[10]) {
    error.value = "Nieprawidłowy numer PESEL.";
    validPesel.value = false;
  } else {
    error.value = null;
    validPesel.value = true;
  }
}
</script>

<template>
  <form @submit.prevent="validatePesel">
    <input type="text" v-model="peselInput" placeholder="Wpisz PESEL" />
    <button type="submit">Sprawdź</button>
  </form>
  <p v-if="error" class="text-danger">{{ error }}</p>
  <p v-if="validPesel" class="text-success">PESEL jest prawidłowy</p>
</template>
