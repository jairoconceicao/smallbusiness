<template>
  <div id="app" class="container">
    <ul class="nav">
      <li class="nav-item"> <router-link class="nav-link" to="/">Home</router-link> </li>
      <li class="nav-item"> <router-link class="nav-link" to="/about">About</router-link> </li>
      <li class="nav-item"> <router-link class="nav-link" to="/clientes">Clientes</router-link> </li>
    </ul>
    <router-view/>
  </div>
</template>
