<script setup lang="ts">
import { ref } from "vue";
const outputText = ref();

// Obsługa wgrywania pliku
function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement)!.files![0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target!.result;
      outputText.value = processText(text as string); // Przetwarzanie tekstu
    };
    reader.readAsText(file, "UTF-8");
  }
}

// Funkcja przetwarzająca tekst
function processText(text: string) {
  return text
    .split("\n")
    .map((line) => scrambleWordsInLine(line.replace(/\r/, '')))
    .join("\n");
}

// Funkcja losowego mieszania liter wewnątrz słów
function scrambleWordsInLine(line: string) {
  return line
    .split(" ")
    .map((word) => scrambleWord(word))
    .join(" ");
}

// Funkcja do mieszania liter wewnątrz słowa (z zachowaniem pierwszej i ostatniej litery)
function scrambleWord(word: string) {
  if (word.length <= 3) return word; // Jeżeli słowo ma 3 litery lub mniej, nie mieszaj liter

  const firstChar = word[0];
  const lastChar = word[word.length - 1];

  const middleChars = word.slice(1, -1).split(""); // Wyciągnięcie środkowych liter

  // Losowe przetasowanie środkowych liter
  for (let i = middleChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [middleChars[i], middleChars[j]] = [middleChars[j], middleChars[i]];
  }

  // Obsługa interpunkcji - Sprawdzanie czy na końcu są znaki interpunkcyjne
  const punctuation = /[\.,!?;:]/;
  if (punctuation.test(lastChar)) {
    const lastLetter = word[word.length - 2]; // Ostatnia litera przed znakiem interpunkcyjnym
    return firstChar + middleChars.join("") + lastLetter + lastChar; // Zachowanie znaku na końcu
  }

  return firstChar + middleChars.join("") + lastChar; // Składanie nowego słowa
}
</script>

<template>
  <main>
    <h1>Exercise 1</h1>
    <p>
      Zadanie 1 Napisz program w Vue3, który posiada obsługę formularza do wgrania pliku tekstowego, a następnie
      przestawi losowo szyk liter w każdym wierszu oprócz pierwszej i ostatniej litery wyrazu. Uwzględnij interpunkcję,
      wielkie/małe litery, wielolinijkowe teksty, polskie znaki.
    </p>
    <h1>Przetwórz plik tekstowy</h1>
    <input type="file" @change="handleFileUpload" accept=".txt" />

    <div v-if="outputText" class="output">
      <h2>Wynik:</h2>
      <pre>{{ outputText }}</pre>
    </div>
  </main>
</template>

<style scoped>
input {
  margin-bottom: 20px;
}
.output {
  margin-top: 20px;
  white-space: pre-wrap;
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 4px;
}
</style>
