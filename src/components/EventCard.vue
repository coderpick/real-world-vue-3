<template>
  <div class="event-card">
  <!-- Display event data -->
 <router-link :to="{ name:'PostDetails', params:{id:post.id} }">
   <h4>{{ post.title}}</h4> 
   <p>{{ post.body.substring(0,50)+".."}}</p>
   </router-link>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    post: Object,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card{
    padding: 20px;
    width: 1170px;   
    border: 1px solid #ddd;
    margin: 20px auto;
    text-align: left;
}
.event-card:hover{
  box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2);
}
a{
  text-decoration: none;
}
</style>
