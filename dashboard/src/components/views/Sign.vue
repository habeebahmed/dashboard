<template>
  <div class="node">
    <div class="text-center">
      <div class="col-md-4"></div>
        <div class="card card-user col-md-4" id="loginPanel">
          <div class="content">
            <div class="author">
              <!-- <img src="https://cdn-images-1.medium.com/max/1200/1*0Ev-doJdE7tMkX6ZIpxlMw.jpeg" style="margin-top:5em;border-radius:0px;height:100%;"  alt="..."> -->
              <h1 class="title">Signup to BotLive Dashboard
                <br><br>
                  <h3>Signup</h3>
              </h1>
            </div>
          </div>
          <!-- <hr> -->
          <form>
            <div class="row">
              <div class="col-md-12">
                <input type="text" label="Username" placeholder="Username" autocomplete="false" v-model="username"/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input type="password" label="pwd" placeholder="Password" autocomplete="false" v-model="password" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input type="password" label="pwdc" placeholder="Confirm Password" autocomplete="false" v-model="cpassword"/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input type="text" label="Email" placeholder="Email Address" autocomplete="false" v-model="email"/>
              </div>
            </div>
            <div class="clearfix"></div>
          </form>
          <div class="text-center">
            <h5>Already have an account <a href="/">Login</a></h5>
            <button class="btn btn-info btn-fill btn-wd"  id="loginButton" @click="login"> Login
            </button>
          </div>
          <!-- <div class="alert alert-danger" id="messageLoginDanger" v-if="messageVisibility">
            <button type="button" aria-hidden="true" class="close" v-on:click="messageVisibility = false">×</button>
            <span>
              <b>Authentication Failed - </b>{{ errorMessage }}</span>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      cpassword: '',
      username: ''
    }
  },
  methods: {
    login () {
      console.log(this.email)
      console.log(this.username)
      console.log(this.password)
      console.log(this.cpassword)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.node {
    width: 100%;
    height: 400px;
    background-image: url('https://cdn-images-1.medium.com/max/1200/1*0Ev-doJdE7tMkX6ZIpxlMw.jpeg');
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    padding-top: 50px;
}
input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid blue;

}
button {
  background-color: #000099;
  margin-bottom: 10px
}
.title {
  color: blue;
  font-weight: bold;
  font-family: arial;
}
#loginPanel {
    border-radius: 15px 50px;
    background: #3399ff;
    box-shadow: 10px 10px 10px grey;
}
a {
  text-decoration: none;
  color: #cc0000;
  font-weight: bold;
}
</style>
