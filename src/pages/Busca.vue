<template>
  <div>
    <h2 class="ui center aligned header">BuscaGIFS</h2> 
     <div class="box-header">
        <input type="text" v-model="itemDePesquisa" placeholder="Digite sua busca...">
      <button class="btn-default" type="submit" @click="buscaGifs(itemDePesquisa)">buscar</button>
      <div class="row" >
        <button class="btn-default"> Gifs Salvos</button>
      </div>
     </div>
      <Card>
        <div class="lazyImage grade">
          <li v-for="(image, i) in images" :key="image.id + i" >
            <LoadImage :src="image.images['original'].url" :title="image.title" :username="image.username"/>
            <button class="btn-default" @click="salvarGif(image)"> Salvar </button>
          </li>
        </div>
      </Card>
      <div v-if="images.length" v-observe-visibility="buscaGifs"></div>
  </div>
</template>

<script>
import LoadImage from '../components/LoadImage'; 
import Card from '../assets/styles';
export default {

  data () {
    return {
      itemDePesquisa: "",
      images : [],
      loading: true,
      salvos: [],
    }
  },
  components: {
    LoadImage,
    Card,
  }, 
  methods: {
    async buscaGifs(itemDePesquisa, quantity) {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=s37lXprOCAABfrLLwA91wtfq9b4saTO3&q=${this.itemDePesquisa}&limit=${ quantity ? quantity + 50 : 50 }&offset=0&rating=g&lang=pt`);
      let {data} = await response.json();
      if(data.length > 0) {
        data.map( item => this.images.push(item))
      }else {
        alert("Busca nao encontrada ")
        location.reload()
      }      
    },
    salvarGif(item) {
      this.salvos.push(item)
      const dados = JSON.stringify(this.salvos);
      localStorage.setItem("gifs", dados)
      alert("Salvo com Sucesso")
    },
  },
}
</script>

<style>
.grade {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    overflow: scroll;
    width: 100%;
    height: 80%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px;
  }
  .row {
    margin: 10px auto;
  }
   
    
  li {
     list-style: none;
    margin: 10px auto;
  }
   
  img:hover {
    background-color: black
  }
  .box-header {
    width: 100%;
  }
  .btn-default {
    height: 40px;
    width: auto;
    padding: 10px;
    border-radius: 10px;
    border-color: transparent
  }
  .btn-default:hover {
    cursor: pointer;
    background-color: #fe23ab;
    color: white;
  }
  .box-header input[type='text']{
    height: 40px;
    border-radius: 10px;
    margin: 10px;
    padding: 10px
  }
     

    
.lazyImage{
  margin: 10px auto; 
}
img {
  max-height: 300px;
}   
    

@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Ranchers&display=swap');
* {
  box-sizing: border-box;
  font-family: 'Comfortaa', cursive;
  font-size: 1rem;
  height: fit-content;
  margin: 0;
  padding: 0;
  width: auto;
}
.main {
  align-items: center;
  background-color: #f0f0fc;
  display: grid;
  height: 100vh;
  justify-content: center;
}
</style>