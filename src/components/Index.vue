<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click=showServer>dian ji</button>
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
      this.$http.get('/api/hello').then((res)=>{
				if (res.data.success) {
					msg = 
				}
      })
    }
  }
}
</script>
