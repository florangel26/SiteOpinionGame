<template>
  <div id="app">
    <Navbar/>
  <Footer/>
        <router-view/>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";

  
  export default {
    name: "App",
    components: {
      Navbar,
      Footer,
  },
  };
</script>

<style>
.footer{
    background-color: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  color: white;
  font-size: 20px;
  text-align: center;
  
}
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar-nav {
     margin-inline-start: auto;
     font-size: 20px;
}
*{
  font-family:'Rajdhani', sans-serif; 
}
.navbar{
  font-size: 50px;
}
body{
  position:relative;
  padding-bottom: 60px;
}


</style>
