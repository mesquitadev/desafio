<template>
    <div id="app">
      <Busca/>
    </div>
</template>

<script>
import Busca from './pages/Busca'
export default {
  name: 'App',
  components: {
    Busca,
  }
  
}
</script>

<style lang="css" scoped>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
  
  


</style>
