<template>
  <h4>Add the details of your books:</h4>
  <input class="item" type="text" v-model="title" placeholder="Title" /> 
  <input class="item"  type="text" v-model="author" placeholder="Author"/>
  <input class="item"  type="text" v-model="publisher" placeholder="Publisher"/>
  <input class="item"  type="text" v-model="publishYear" placeholder="Year of publishing"/>
  <input class="item"  type="text" v-model="category" placeholder="Category"/>
  <button class="green" @click="log">Submit</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: '',
      author: '',
      publisher: '',
      publishYear: '',
      category: '',
    }
  },
  methods: {
    log: function() {
      console.log(this.title, this.author, this.publisher, this.publishYear, this.category,)
    }
  },
}
</script>

<style scoped>
.item {
  margin: 1rem 0rem 1rem 0rem;
  padding: 1rem 6rem 1rem calc(var(--section-gap) / 10);
  display: flex;
  border: 1px solid hsla(160, 100%, 37%, 1);
  border-radius: 0.3rem;
}

input:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
}

.item:focus {
  border: 1px solid hsla(160, 100%, 37%, 0.2);
}

.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 1rem 6rem 1rem calc(var(--section-gap) / 10);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>


