<script setup lang="ts">
import BookList from '../components/BookList.vue';
import NewBook from '../components/NewBook.vue';
</script>

<template>
  <main id="subpage">
  <h2 class="green">Read Books</h2>
  <div>
    <NewBook />
  </div>
  <div>
    <BookList />
  </div>
</main>
</template>