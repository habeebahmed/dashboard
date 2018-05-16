<template>
<div>
<div class="addBusiness">
  <button @click="addBusiness" class="button1" type="button" name="button">Add Business</button>
</div>
<div class="logout">
  <button v-on:click="logout" class="button2" type="button" name="button">Logout</button>
</div>
</div>
</template>

<script>
import general from '../views/generalcomp/general.js'
import swal from 'sweetalert'
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {

    }
  },
  mixins: [general],
  methods: {

    addBusiness() {
    const vue = this
    swal({
    text: 'Enter Business Name',
    content: "input",
    button: {
      text: "ADD",
      closeModal: false,
    },
    })
    .then(name => {
      if (!name) throw null;

      const url = "https://backend.botlive.io/api/business"
      const access_token = vue.getCookie('token')
      console.log(access_token);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          access_token
        }
      }
      axios.post(url,{name},config)
      .then(function (response) {
        const status = response.status
        if (!status) {
          swal("cannot add");
        } else{
          console.log(response);
          console.log("added");
          swal("added")
          // next()
        }
      })
      .catch(function (error) {
        swal(error.response.data.error.message)
      })
    })

    },

    logout() {
    const vue = this
    vue.produceCookie('token', '')
    //console.log(vue.getCookie('token'))
    vue.$router.push('/')
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.addBusiness{
  color: white;
  padding: 20px 20px;
  display: inline;
}
.button1 {
    border-radius: 8px;
    background-color: green;
    border: none;
    color: white;
    padding: 10px;
    margin: 20px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}
.logout{
  float: right;
  color: white;
  padding: 0px 20px;
  display: inline;
}
.button2 {
    border-radius: 8px;
    background-color: red;
    border: none;
    color: white;
    padding: 10px;
    margin: 20px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}
</style>
