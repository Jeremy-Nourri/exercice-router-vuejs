<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const { contacts } = inject('contacts');

const route = useRoute();

const { contactId } = route.params;

console.log(contactId);

const contactFound = contacts.value.find(c => c.id === Number(contactId));

console.log(contactFound);
</script>

<template>
  <main class="container-details">

    <h1>Détails concernant le client</h1>

    <article>
      <h3> {{ contactFound?.name }}</h3>
      <ul>
        <li>Name : {{ contactFound?.email }}</li>
        <li>Phone :{{ contactFound?.phone }} </li>
        <li>City : {{ contactFound?.city }}</li>
        <li>State :{{ contactFound?.state }} </li>
        <li>Country : {{ contactFound?.country }}</li>
        <li>organization :{{ contactFound?.organization }} </li>
        <li>Job Profile : {{ contactFound?.jobProfile }}</li>
        <li>Additional Informations : {{ contactFound?.additionalInfo }} </li>
      </ul>
    </article>

    <RouterLink :to="`/`">
      <button>Retour</button>
    </RouterLink>

  </main>
</template>

<style scoped></style>