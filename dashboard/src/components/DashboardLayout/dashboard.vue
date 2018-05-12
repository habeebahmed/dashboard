<template>
<div class="row">
  <div class="column left">
    <div class="search">
      <input type="text" placeholder="search here .." />
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
    <div class="items">
      <p>Users List</p>
      <hr>
      <div class="list-group">
        <div class="list" v-for="user in users">
          <a href="#" @click="getDetails(user)" class="list-group-item">{{user.name}}</a>
        </div>
      </div>
    </div>
  </div>
  <div class="column middle">
    <div class="title" style="text-align:center">
      {{this.name}}
    </div>
    <div class="left_messages">
      <img src="https://www.onthisday.com/images/people/donald-trump.jpg" />
      <p>Hello</p>
    </div>
    <div class="right_messages">
      <img src="https://www.onthisday.com/images/people/donald-trump.jpg" />
      <p>Hi There</p>
    </div>
    <div class="box">
      <input type="text" name="" placeholder="type here..">
    </div>
  </div>
  <div class="column right">
    <div class="container" v-if="isVisible">
      <div style="display:inline-block;vertical-align:top;">
        <img v-bind:src="img" alt="img" />
      </div>
      <div style="display:inline-block;">
        <div class="content">
          <div style="font-weight:bold;font-size:20px;">{{name}}</div>
          <div class="tag" style="font-weight:lighter;font-size:15px;color:#809fff">{{type}}</div>
        </div>
      </div>
      <div class="details">
        <br><br><i class="fa fa-map-marker" style="font-size:24px" aria-hidden="true">&nbsp;</i>
        <span> {{location}}</span><br><br>
        <i class="fa fa-envelope" style="font-size:24px" aria-hidden="true">&nbsp;</i>
        <span> {{email}}</span><br><br>
        <i class="fa fa-clock-o" style="font-size:24px" aria-hidden="true">&nbsp;</i>
        <span> 4:50 PM</span><br><br>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">Details</div>
        <div class="panel-body">{{details}}</div>
      </div>
      <div class="account">
        <h2>Account</h2>
        <span class="glyphicon glyphicon-user" style="font-size:24px"></span>
        <span>Type:</span>
        <span class="acc"> {{type}}</span><br>
        <i class="fa fa-fire"></i>
        <span>User Id:</span>
        <span class="acc">1421 </span><br>
        <i class="fa fa-arrow-circle-right"></i>
        <span>Signed up:</span>
        <span class="acc">{{createdAt}}</span>
      </div>
    </div>

  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      isVisible: false,
      name: '',
      type: '',
      details: '',
      img: '',
      location: '',
      email: '',
      createdAt: '',
      users: [{
          name: 'Habeeb',
          type: 'user',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat justo nec nisi scelerisque, id facilisis ex eleifend.',
          img: 'https://www.dvdsreleasedates.com/pictures/800/12000/Tom-Cruise.jpg',
          location: 'New York,United States',
          email: 'hk15@gmail.com',
          createdAt: '8mth ago'
        },
        {
          name: 'James',
          type: 'user',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat justo nec nisi scelerisque, id facilisis ex eleifend.',
          img: 'https://www.onthisday.com/images/people/donald-trump.jpg',
          location: 'New York,United States',
          email: 'hk15@gmail.com',
          createdAt: '8mth ago'
        },
        {
          name: 'Clark',
          type: 'user',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat justo nec nisi scelerisque, id facilisis ex eleifend.',
          img: 'https://www.onthisday.com/images/people/donald-trump.jpg',
          location: 'New York,United States',
          email: 'hk15@gmail.com',
          createdAt: '8mth ago'
        },
        {
          name: 'Bruce',
          type: 'user',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat justo nec nisi scelerisque, id facilisis ex eleifend.',
          img: 'https://www.onthisday.com/images/people/donald-trump.jpg',
          location: 'New York,United States',
          email: 'hk15@gmail.com',
          createdAt: '8mth ago'
        }
      ]
    }
  },
  methods: {
    getDetails(value) {
      this.isVisible = true
      this.name = value.name
      this.type = value.type
      this.img = value.img
      this.location = value.location
      this.details = value.details
      this.email = value.email
      this.createdAt = value.createdAt
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

/* Create three unequal columns that floats next to each other */

.column {
  float: left;
  /* padding: 10px; */
  height: fill;
}

.right {
  width: 24%;
  margin-right: 1%;
  border: 1px solid black;
  max-width: 24%;
}

.left {
  width: 24%;
  margin-left: 1%;
  border: 1px solid black;
  max-width: 24%;
}

.middle {
  width: 50%;
  border: 1px solid black;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
}
.title {
  padding: 10px;
  font-weight: bold;
  background-color: #0066ff;
  color: white;
  font-size: 20px;
}

.left_messages {
  display: flex;
  flex-direction: row;
  clear: both;
  padding-top: 5px;
}

.right_messages {
  display: flex;
  flex-direction: row-reverse;
  clear: both;
}

.left_messages img, .right_messages img {
    border-radius: 100%;
    height: 40px;
    width: 40px;
    margin: 5px 10px;
}

.left_messages p, .right_messages p {
    font-size: 15px;
    box-shadow: 0px 0px 10px #CCC;
    padding: 5px 20px;
}

/* Clear floats after the columns */

.row:after {
  content: "";
  display: table;
  clear: both;
}

.search input {
  width: 90%;
  padding: 10px 5px;
  margin: 10px 0;
  margin-left: 10px;
  box-sizing: border-box;
  border: 2px solid blue;
  border-radius: 25px;
  outline: none;

}
.box input {
  width: 100%;
  padding: 10px;
  border: 2px solid #4d79ff;
}
.box {
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 78%;
}
.fa-search {
  font-size: 30px;
  color: red;
}

.items p {
  text-align: center;
  font-weight: bold;
  color: #6600ff;
  font-size: 40px;
}

img {
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

/* img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
} */

.content {
  padding: 20px;
  padding-left: 30px
}

.tag {
  box-sizing: border-box;
  border: 1px solid #809fff;
  text-align: center;
  border-radius: 25px;
  max-width: 50px;
}

.details {
  font-weight: lighter;
  font-family: cursive;
}

.container {
  height: 100%;
  width: 98%;
  max-width: 98%;
}
.account {
  font-weight: bold;
  font-size: 30px;
  font-family: monospace;
}
.acc {
  font-style:normal;
  font-weight: inherit;
  font-family: courier;
  color: #4d4dff;
}
</style>
