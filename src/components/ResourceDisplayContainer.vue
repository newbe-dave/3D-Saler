<template>
  <div class="resource-container">
    <div class="image">
      <img src="../assets/sofa.png" alt="sofa">
    </div>
    <div class="goods-title">
      <div>
        <span>{{name}}</span>
      </div>
    </div>
    <div class="detail">
      <span>ID:{{id}}</span>
      <div>
        <img src="../assets/downloadResource.png" alt="" style="cursor:pointer;" @click="download">
        <span>105</span>
      </div>
      <div>
        <img v-if="!this.favouriteState" src="../assets/favourite-false.png" style="cursor:pointer;"
        @click="changeFavouriteState(true)">
        <img v-if="this.favouriteState" src="../assets/favourite-true.png" style="cursor:pointer;"
        @click="changeFavouriteState(false)">
        <span>250</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: "12345",
        name: "现代沙发",
        favouriteState: false
      };
    },
    computed: {
    },
    methods: {
      download() {
        alert("download");
      },
      changeFavouriteState(newState) {
        this.favouriteState = newState;
      }
    }
  };
</script>

<style scoped>
  .resource-container {
    border: 1px solid rgb(119, 119, 119);
    width: 182px;
    padding: 5px 5px 0 5px;
    height: 216px;
    margin: 0 6px 2px;
  }

  .image {
    height: 170px;
  }

  .image img {
    width: 170px;
    height: 170px;
  }

  .title {

  }
  .detail {
    height: 12px;
    display: flex;
    justify-content: space-between;
  }
</style>

