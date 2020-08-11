<template>
  <div class="container">
    <MenuTodo v-show="viewMenuTodo" @openAddTodo="openAddTodo" />
    <AddTodo @resetMenu="resetMenu" v-show="viewAddTodo" />
  </div>
</template>

<script>
import AddTodo from "./AddTodo/";
import MenuTodo from "./MenuTodo/";
export default {
  name: "ComponentHome",
  components: {
    AddTodo,
    MenuTodo,
  },
  data() {
    return {
      viewMenuTodo: true,
      viewAddTodo: false,
    };
  },
  methods: {
    resetMenu() {
      this.viewMenuTodo = true;
      this.viewAddTodo = false;
    },
    openAddTodo() {
      this.viewAddTodo = !this.viewAddTodo;
      // this.viewMenuTodo = false;
    },
  },
  // async created() {
  //   let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=s37lXprOCAABfrLLwA91wtfq9b4saTO3&q=own&limit=25&offset=0&rating=g&lang=en');
  //   let {data} = await response.json();
  //   let d = data;
  //   d.map(e => console.log(e.url))
  // }
};
</script>

<style>
.container {
  display: grid;
  gap: 20px;
  justify-items: center;
}
</style>
