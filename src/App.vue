<template>
  <main>
  <hr>
  <nav>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/users/10">Users 10</router-link>
        <router-link to="/calculatrice">Calculatrice</router-link>
        <router-link to="/audio-play">Audio Play</router-link>
        <router-link to="/chart-js">Chart JS</router-link>
        <router-link to="/users-list"> Github users</router-link>
        <router-link to="/user-django"> Users from Django</router-link>
        <router-link to="/exemple-modal"> Modal</router-link>
            <router-link to="/egera-tech">Egera Tech</router-link>
            <router-link to="/ventes">ventes</router-link>
      </div>
  </nav>

  <hr>
  <router-view></router-view>
  </main>
</template>

<script>
export default {

}
</script>

<style >

body{
    height: 100vh;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    font-size: 24px;
}
  a{
    display: inline-block;
    padding: 2px 5px;
  }

  
</style>