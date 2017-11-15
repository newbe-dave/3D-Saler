<template>
  <div>
    <h1>{{ msg }}</h1>
    <button v-on:click='showServer'>dian ji</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showServer: () => {
      alert('click')
      this.$http.get('/api/hello/').then((res) => {
        if (res.data.success) {
          alert(res.data)
          this.msg = res.data
        }
      })
    }
  }
}
</script>
