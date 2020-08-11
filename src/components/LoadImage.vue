<template>
  <div class="image">
    <img class="ui medium rounded image" :src="src" :alt="alt">
    <div class="details">
      <p style="text-align: center">Detalhes:</p>
      <p>Titulo: <b>{{title}}</b></p>
      <p>Usuario: <b>{{username ? username : 'Autor Desconhecido'}}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    src : {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    username: {
      type: String,
      required: false
    }
  },
}
</script>

<style lang="stylus" scoped> 
  .image
    margin 10px auto
    img
      max-height 150px
    .details
      padding 5px
      position relative
      text-align left
      color #fff
      background-color #262626
      

  .image:hover 
    img
      cursor pointer
      border 1px solid #fff

</style>