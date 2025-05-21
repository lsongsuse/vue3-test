<template>
  <div class="person">
    <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <br>
    <h2>游戏</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{game.name}}</li>
    </ul>
    <button></button>
  </div>
</template>
<script lang="ts" setup name="Person123">
import {reactive,ref} from "vue";

  let car = reactive({
    brand: 'benz',
    price: 100,
  })

  let games = [
      {
        id: 'aysdyfadf01', name: '王者荣耀'
      },
    {id: 'aysdyfadf02', name: '元神'},
    {id: 'fadfa03', name: '三国志'}]
  function changePrice() {
    car.price +=10
  }

  function changeFirstName(){
    games[0].name='li'
  }
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>