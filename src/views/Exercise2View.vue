<script setup lang="ts">
import PeselValidator from "@/components/PeselValidator.vue";

</script>

<template>
  <main>
    <h1>Exercise 2</h1>
    <p>
      Napisz program w Vue3 do walidacji numeru PESEL zgodnie z oficjalną specyfikacją formatu. Przygotuj testy
      jednostkowe sprawdzające kilka danych nieprawidłowych i przynajmniej jeden poprawny numer PESEL.
    </p>
    <div>
      <h2>Walidacja PESEL</h2>
      <PeselValidator />
    </div>
  </main>
</template>
