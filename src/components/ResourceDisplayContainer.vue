<template>
  <div class="resource-container">
      <div>
          <img src="../assets/sofa.png" alt="sofa">
      </div>
      <div class="detail">
          <div>
              <span>{{name}}</span>
              <img v-if="!this.favouriteState" src="../assets/favourite-false.png" style="cursor:pointer;" @click="changeFavouriteState(true)">
              <img v-if="this.favouriteState" src="../assets/favourite-true.png" style="cursor:pointer;" @click="changeFavouriteState(false)">
          </div>
          <span>{{goldPoints}}金点</span>
      </div>
      <div class="detail">
          <span>ID:{{id}}</span>
          <div>
              <img src="../assets/downloadResource.png" alt="">
              <span style="cursor:pointer;" @click="download" >下载</span>
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
      goldPoints: 60,
      favouriteState: false
    };
  },
  computed: {
      currentfavouriteIcon() {
          if (this.favouriteState) {
              return "../assets/favourite-true.png";
          } else {
              return "../assets/favourite-false.png";
          }
      }
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
    width: 206px;
    padding: 3px;
    height: 250px;
    margin: 20px 6px 20px 2px;
}
.detail {
    display: flex;
    justify-content: space-between;
}
</style>

