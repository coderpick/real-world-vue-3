<template>
 <h1>Latest Posts</h1>
  <div class="events">
    <EventCard v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import PostService from "@/services/PostService.js";
export default {
  name: "PostList",
  components: {
    EventCard,
  },
    data(){
    return {
      posts:null
    }
  },
  created() {
    PostService.getPosts()
    .then(response =>{
      this.posts=response.data;
    }).catch(error=>{
      console.log(error);

    })
  },
};
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
