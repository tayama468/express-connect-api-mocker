<template>
  <div>
    <Button></Button>
  </div>
</template>
<script>
  import Button from '../components/Button.vue'
  export default {
    components: { Button },
    mounted() {
      this.fetchSomething()
    },
    methods: {
      async fetchSomething() {
        const messages = await this.$axios.$get('/messages')
      }
    }
  }
</script>

