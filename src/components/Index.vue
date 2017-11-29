<template>
    <div>
        navigate
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showServer: function () {
      this.$http.get('/api/hello/id=123').then((res) => {
        this.msg = res.data
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>

<style scoped>
    
</style>

