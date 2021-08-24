<template>
 <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
    data(){
    return {
      events:[
        {
        id:5928101,
        category:'animal welfare',
        title:'Cat Adopetion Day',
        description:'Find your new fline friend at this event.',
        location:'Meow Town',
        date:'January 28, 2022',
        time:'12:00',
        petsAllowed:true,
        organizer:'Kat laydee'
      },
      {
        id:6028101,
        category:'animal welfare',
        title:'Bird Adopetion Day',
        description:'Find your new fline friend at this event.',
        location:'Meow Town',
        date:'Juay 28, 2022',
        time:'12:00',
        petsAllowed:true,
        organizer:'Kat laydee'
      },
      {
        id:6128101,
        category:'animal welfare',
        title:'Cow Adopetion Day',
        description:'Find your new fline friend at this event.',
        location:'Meow Town',
        date:'Febaruy 28, 2022',
        time:'12:00',
        petsAllowed:false,
        organizer:'Kat laydee'
      }
      ]
    }
  }
};
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
