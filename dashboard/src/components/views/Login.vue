<template>
  <div class="container">
    	<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="#" class="active" id="login-form-link">Login</a>
							</div>
							<div class="col-xs-6">
								<a href="#" id="register-form-link">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<form id="login-form" v-on:submit.prevent="login" action="" method="post" role="form" style="display: block;">
									<div class="form-group">
										<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" v-model="email" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="password" tabindex="2" class="form-control" v-model="password" placeholder="Password">
									</div>
									<!-- <div class="form-group text-center">
										<input type="checkbox" tabindex="3" class="" name="remember" id="remember">
										<label for="remember"> Remember Me</label>
									</div> -->
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
											</div>
										</div>
									</div>
									<!-- <div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href="https://phpoll.com/recover" tabindex="5" class="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div> -->
								</form>
								<form id="register-form" v-on:submit.prevent="signup" action="" method="post" role="form" style="display: none;">
									<!-- <div class="form-group">
										<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="">
									</div> -->
									<div class="form-group">
										<input type="email" v-model="femail" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="">
									</div>
									<div class="form-group">
										<input type="password" v-model="fpassword" name="password" id="fpassword" tabindex="2" class="form-control" placeholder="Password">
									</div>
									<div class="form-group">
										<input type="password" v-model="fcpassword" name="fconfirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import general from './generalcomp/general.js'
import swal from 'sweetalert'
$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
export default {
  name: 'login',
  data () {
    return {
      email: 'a@a.com',
      password: '123456',
      femail:'',
      fpassword:'',
      fcpassword:''
    }
  },
  mixins: [general],
  methods: {
    login () {

      // const vue = this
      // const url = "https://backend.botlive.io/api/member"
      // const access_token = vue.getCookie('token')
      // console.log(access_token);
      // axios.get(url,{
      //   headers: {
      //       'Content-Type': 'application/json',
      //       'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWU0ODM1OGRmMzliMzEwMDY0NGRkZDIiLCJpYXQiOjE1MjYzODE0Nzh9.i3pzCYNWOgo1IeXKGmkGGSGvYSely4N_pe-POrk4vjo'
      //   }
      // })
      // .then(function (response) {
      //   const status = response.status
      //   if (!status) {
      //     console.log("not verified");
      //   } else{
      //     console.log(response);
      //     console.log("verified");
      //     alert("verified")
      //     // next()
      //   }
      // })
      // .catch(function (error) {
      //   console.log(error.response.data)
      // })
      const vue = this
      const url = "https://backend.botlive.io/api/auth/login"
      axios.post(url,{ email: this.email, password: this.password })
      .then(function (response) {
        if (response.status) {
          //console.log(response.data.data.access_token);
          vue.produceCookie('token', response.data.data.access_token)
          vue.$router.push('/dashboard')
          //console.log(vue.getCookie('token'));
        } else {
          console.log("invalid login info");

        }
      })
      .catch(function (error) {
        swal(error.response.data.error.message,"might be need to register","error")
        console.log(error.response.data.error.message);
      })

    },
  signup () {
    const vue = this
    if (!(vue.fpassword === vue.fcpassword)) {
      swal("password didnot match","","error")
    }
    else{
    const url = "https://backend.botlive.io/api/auth/signup"
    axios.post(url,{ email: vue.femail, password: vue.fpassword })
    .then(function (response) {
      if (response.status) {
        vue.femail=''
        vue.fpassword=''
        vue.fcpassword=''
         console.log("successful login");
         swal("Registered successfully","please click login","success")
         //vue.$router.go(this.$router.push('/'))

     		$("#login-form").delay(100).fadeIn(100);
    		$("#register-form").fadeOut(100);
     		$('#register-form-link').removeClass('active');
     		$(this).addClass('active');
      }
      else {
        //swal("User already exists, click login ")
      }
    })
    .catch(function (error) {
        console.log(error);
      //  swal("User already exists, click login ")
        if((vue.femail==="" || vue.fpassword==="") ) {
          swal("provide input data","","info")
        }
        else {
          swal("user already exists","","warning")
        }
    })
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-top: 90px;
}
.panel-login {
border-color: #ccc;
-webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
}
.panel-login>.panel-heading {
color: #00415d;
background-color: #fff;
border-color: #fff;
text-align:center;
}
.panel-login>.panel-heading a{
text-decoration: none;
color: #666;
font-weight: bold;
font-size: 15px;
-webkit-transition: all 0.1s linear;
-moz-transition: all 0.1s linear;
transition: all 0.1s linear;
}
.panel-login>.panel-heading a.active{
color: #45158e;
font-size: 18px;
}
.panel-login>.panel-heading hr{
margin-top: 10px;
margin-bottom: 0px;
clear: both;
border: 0;
height: 1px;
background-image: -webkit-linear-gradient(left,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0));
background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
}
.panel-login input[type="text"],.panel-login input[type="email"],.panel-login input[type="password"] {
height: 45px;
border: 1px solid #ddd;
font-size: 16px;
-webkit-transition: all 0.1s linear;
-moz-transition: all 0.1s linear;
transition: all 0.1s linear;
}
.panel-login input:hover,
.panel-login input:focus {
outline:none;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
border-color: #ccc;
}
.btn-login {
background-color: #59B2E0;
outline: none;
color: #fff;
font-size: 14px;
height: auto;
font-weight: normal;
padding: 14px 0;
text-transform: uppercase;
border-color: #59B2E6;
}
.btn-login:hover,
.btn-login:focus {
color: #fff;
background-color: #53A3CD;
border-color: #53A3CD;
}
.forgot-password {
text-decoration: underline;
color: #888;
}
.forgot-password:hover,
.forgot-password:focus {
text-decoration: underline;
color: #666;
}

.btn-register {
background-color: #1CB94E;
outline: none;
color: #fff;
font-size: 14px;
height: auto;
font-weight: normal;
padding: 14px 0;
text-transform: uppercase;
border-color: #1CB94A;
}
.btn-register:hover,
.btn-register:focus {
color: #fff;
background-color: #1CA347;
border-color: #1CA347;
}

</style>
