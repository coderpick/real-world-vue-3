<template>
  <div v-if="post">  
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>    
  </div>
</template>
<script>
import PostService from '@/services/PostService.js';
export default {
    name: "PostDetails",
    props:['id'],
  data() {
    return {
      post: null     
    }
  },
  created() {
    PostService.getPost(this.id)
      .then((response) => {
        this.post = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
