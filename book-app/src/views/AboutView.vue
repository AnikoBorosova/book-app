<script setup lang="ts">
import BookList from '../components/BookList.vue';
import NewBook from '../components/NewBook.vue';

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Add the details of your books:</p>
    <input type="text" v-model="title" placeholder="Title" />
    <input type="text" v-model="author" placeholder="Author"/>
    <input type="text" v-model="publisher" placeholder="Publisher"/>
    <input type="text" v-model="publishYear" placeholder="Year of publishing"/>
    <input type="text" v-model="category" placeholder="Category"/>
  </div>  
  <template>
    <NewBook />
  </template>
  <main>
    <BookList />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
