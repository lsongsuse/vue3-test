<template>
  <person></person>
</template>

<script lang="ts">
  import Person from './components/Person.vue'
  export default {
    name: 'App',
    components: {
      Person
    }
  }
</script>

<style>
  .app {
    background-color: #f5f5f5;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>