<script setup lang="ts">
import WelcomeItem from './../components/WelcomeItem.vue'
import DocumentationIcon from './../components/icons/IconDocumentation.vue'
</script>

<template>
  <main>
    <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink to="/currently-reading">Currently Reading</RouterLink>
    </template>
    

    The books you are currently reading
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink to="/read">Read Books</RouterLink>
    </template>
   All the book you have marked as read
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink to="/to-read">To-Read List</RouterLink>
    </template>

    All the books you wish to read next
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink to="/favourites">Favourites</RouterLink>
    </template>

    Your favourite books
  </WelcomeItem>
  </main>
</template>
