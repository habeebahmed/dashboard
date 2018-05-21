<template>
<div class="ui fluid container">
  <div class="ui fluid container container1">
    <button class="ui green left floated button" @click="addBusiness">Add Business</button>
    <button class="ui red right floated button" @click="logout">Logout</button>
  </div>
  <div class="ui clearing divider"></div>
  <div class="ui equal width aligned padded grid grid1">
    <div class="column">
      <div class="ui list">
        <div class="item" v-for="member in members">
          <div class="right floated content">
            <i class="trash icon"></i>
          </div>
          <img class="ui top aligned tiny circular image" src="https://cdn-images-1.medium.com/max/1200/1*0Ev-doJdE7tMkX6ZIpxlMw.jpeg">
          <div class="ui content">
            <a class="header" @click="getDomains(member)">{{member.name}}</a>
            <div class="meta">
              {{getMoment(member.createdAt)}}
            </div>
            <div class="description">
              <p>Description info </p>
            </div>
          </div>
          <div class="ui clearing divider"></div>
        </div>
      </div>
    </div>


    <div class="column">
      <p v-show="notSelected">No Business Selected</p>
      <h5>Domains</h5>
      <h6>{{text}}</h6><br>
      <div class="ui list">
        <div class="item" v-for="domain in domains">
          <div class="right floated content">
            <i class="trash icon" @click="removeDomain(domain)"></i>
          </div>
          <div class="ui content">
            <a class="header" style="font-size:18px;">{{domain}}</a>
          </div>
          <div class="ui clearing divider"></div>
        </div>
        <i @click="addDomain" class="plus square outline icon"></i>
      </div>

    </div>


    <div class="column">Members</div>
  </div>
</div>
</template>

<script>
import general from '../views/generalcomp/general.js'
import swal from 'sweetalert'
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'login',
  data() {
    return {
      members: [],
      domains: [],
      notSelected: true,
      businessId:'unknown',
      text:"No domains found"
    }
  },
  mixins: [general],
  mounted() {
    this.getMemberDetails()
  },
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
          const config = {
            headers: {
              'Content-Type': 'application/json',
              access_token
            }
          }
          axios.post(url, {
              name
            }, config)
            .then(function(response) {
              const status = response.status
              if (!status) {
                swal("cannot add");
              } else {
                //console.log(response);
                console.log("added");
                swal("added")
                // next()
              }
            })
            .catch(function(error) {
              swal(error.response.data.error.message)
            })
        })

    },
    getMemberDetails() {
      const vue = this
      const url = "https://backend.botlive.io/api/member"
      const access_token = vue.getCookie('token')
      const config = {
        headers: {
          'Content-Type': 'application/json',
          access_token
        }
      }
      axios.get(url, config)
        .then(function(response) {
          const status = response.status
          if (!status) {
            console.log("Error in member details")
          } else {
            //console.log(response.data.data.businessList)
            vue.members = response.data.data.businessList
            //console.log(vue.members)
          }
        })
        .catch(function(error) {
          console.log(error.response.data.error.message);
        })
    },
    addDomain() {
      const vue = this
      swal({
          text: 'Enter Domain Name',
          content: "input",
          button: {
            text: "ADD",
            closeModal: false,
          },
        })
        .then(domain => {
          if (!domain) throw null;
          let businessId = vue.businessId
          const url = "https://backend.botlive.io/api/business/domain/add"
          const access_token = vue.getCookie('token')
          const config = {
            headers: {
              'Content-Type': 'application/json',
              access_token
            }
          }
          axios.post(url, {
              businessId,
              domain
            }, config)
            .then(function(response) {
              const status = response.status
              if (!status) {
                swal("cannot add");
              } else {
                //console.log(response);
                swal("added")
                .then(()=>{
                  window.location.reload(true)
                })
              }
            })
            .catch(function(error) {
              swal(error.response.data.error.message)
            })
        })
    },
    getDomains(domain) {
      this.businessId = domain._id
      this.notSelected = false
      const vue = this
      const url = "https://backend.botlive.io/api/business/"+this.businessId
      const access_token = vue.getCookie('token')
      const config = {
        headers: {
          'Content-Type': 'application/json',
          access_token
        }
      }
      axios.get(url, config)
        .then(function(response) {
          const status = response.status
          if (!status) {
            console.log("Error in member details")
          } else {
            vue.text = "Selected business \t ->"+response.data.data.name
            vue.domains = response.data.data.domainList
            //vue.members = response.data.data.businessList
            //console.log(vue.members)
          }
        })
        .catch(function(error) {
          console.log(error.response.data.error.message);
        })
    },
    removeDomain(domain) {
      //console.log(domain)
    },
    getMoment(createdAt) {
      return moment(createdAt).fromNow()
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
.container1 {
  padding: 20px;
}

.grid1 {

  padding: 30px;
}

.trash {
  font-size: 20px;
  cursor: pointer;
}
.outline {
  font-size:20px;
  padding-left:120px;
  color:orange;
  cursor:pointer
}
.outline:hover {
  font-size:21px;
}
.trash:hover {
  color: red;
  font-size: 21px;
}

.header {
  font-size: 22px;
  text-transform: uppercase;
}

.meta {
  font-size: 12px;
}

/* .addBusiness{
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
} */
</style>
