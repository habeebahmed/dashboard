import axios from 'axios'
// import swal from 'sweetalert'
// import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification.vue'

export default {
  data () {
    return {
      url: 'https://backend.botlive.io/api/',
      token: 'x.y.z',
      changes: [{
        diff: 'None'
      }]
    }
  },
  // components: {
  //   PaperNotification
  // },
  methods: {
    deleteAllCookies () {
      var cookies = document.cookie.split(';')
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        var eqPos = cookie.indexOf('=')
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name += ';expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    },
    produceCookie (name, value) {
      document.cookie = `${name}=${value}`
    },
    getCookie (name) {
      var value = '; ' + document.cookie
      var parts = value.split('; ' + name + '=')
      if (parts.length === 2) return parts.pop().split(';').shift()
    },
    deleteAll (schema) {
      swal(`You are about to delete all "${schema.replace(/\b\w/g, function (l) { return l.toUpperCase() })}" documents. Continue?`, {
        buttons: {
          cancel: 'Cancel',
          catch: {
            text: 'Confirm',
            value: 'confirm'
          }
        }
      })
      .then((value) => {
        switch (value) {
          case 'confirm':
            const url = this.url + 'deleteAll?' + 'schema=' + schema + '&token=' + this.getCookie('token')
            const vue = this
            axios.post(url)
            .then(function (response) {
              vue.notifyVue('bottom', 'right', response.data.success, response.data.message)
              vue.insertChange(response.data.message)
              swal(`${response.data.message}`)
            })
            .catch(function (error) {
              swal(`${error}`)
            })
            break
          default:
            swal('No changes were made!')
        }
      })
    },
    deleteOne (product) {
      swal(`You are about to delete ${product.title}. Continue?`, {
        buttons: {
          cancel: 'Cancel',
          catch: {
            text: 'Confirm',
            value: 'confirm'
          }
        }
      })
      .then((value) => {
        switch (value) {
          case 'confirm':
            if (product.delete) {
              const url = this.url + 'deleteOne?' + 'schema=' + 'software' + '&token=' + this.getCookie('token') + '&id=' + product.delete
              const vue = this
              axios.post(url)
              .then(function (response) {
                vue.notifyVue('bottom', 'right', response.data.success, response.data.message)
              })
              .catch(function (error) {
                vue.notifyVue('bottom', 'right', false, error)
              })
            }
            swal(`${product.title} was deleted`)
            break
          default:
            swal('No changes were made!')
        }
      })
    },
    notifyVue (verticalAlign, horizontalAlign, eventValue, messageValue) {
      let iconType = ['ti-alert', 'ti-check', 'ti-close'][0]
      let eventType = ['warning', 'success', 'danger'][0]
      let messageType = '' + messageValue
      if (eventValue) {
        iconType = ['ti-alert', 'ti-check', 'ti-close'][1]
        eventType = ['warning', 'success', 'danger'][1]
      } else {
        iconType = ['ti-alert', 'ti-check', 'ti-close'][2]
        eventType = ['warning', 'success', 'danger'][2]
      }
      this.$notifications.notify(
        {
          message: messageType,
          icon: iconType,
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: eventType
        })
    },
    insertChange (change) {
      console.log('change was recognized')
      console.log(this.changes)
      this.changes.push({diff: change})
    }
  }
}
