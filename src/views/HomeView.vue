<script setup>

import { inject } from 'vue';
const { contacts } = inject('contacts');

console.log(contacts);

</script>

<template>
  <main class="container-list">
    <h2>Liste des clients <span>📖</span></h2>
    <article v-for="element of contacts" :key="element.id">
      <p><span>🙋‍♂️</span> {{ element.name }}</p>
      <p><span>📧</span> {{ element.email }}</p>
      <p><span>📱</span> {{ element.phone }}</p>
      <RouterLink :to="`/contact/${element.id}`">
        <button>Cliquez pour plus de détails</button>
      </RouterLink>
    </article>
  </main>
</template>
