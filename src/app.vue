<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min'
  import './assets/css/main.css'

  export default {
    name: 'app',
    metaInfo: require('./app-meta').default
  }
</script>

