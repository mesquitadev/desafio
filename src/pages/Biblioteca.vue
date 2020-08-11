<template>
  <div>
    <h2 class="ui center aligned header">GIFSalvos</h2>  
    <table class="ui celled table" style="width: 100%">
      <thead>
        <tr><th>Gif</th>
        <th>Usuario</th>
        <th>Acoes</th>
      </tr></thead>

      <tbody >
        <tr v-for="(gif, i) in data" :key="i + 150">
          <td>{{gif}}</td>
          <td >{{24}}</td>
          <td>Engineer</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:  [],
    }
  },
  mounted() {
    this.recuperaItems()
  },
  methods: {
    recuperaItems() {
      const {items} = localStorage.getItem("gifs")
      console.log({items})
      items.map( item => this.data.push(item))
      console.log(this.data.url)
    },
  },

}
</script>

<style>
</style>