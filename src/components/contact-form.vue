<template>
    <form class="cta-form" :id="id" action="#" method="post">
        <div class="form-group">
            <input type="text"
                   name="name"
                   class="contact-name form-control input-lg"
                   :placeholder="$t('landing.contact_form.inputs.name')"
                   :id="'contact-name-' +id"
                   v-model="name">
        </div>
        <div class="form-group">
            <input type="text"
                   name="email"
                   class="contact-email form-control input-lg"
                   :placeholder="$t('landing.contact_form.inputs.email')"
                   :id="'contact-email-' +id"
                   v-model="email">
        </div>
        <div class="form-group">
            <textarea name="message"
                      class="contact-message form-control input-lg"
                      rows="4"
                      :placeholder="$t('landing.contact_form.inputs.message')"
                      :id="'contact-message-' +id"
                      v-model="message">
            </textarea>
        </div>
        <button type="submit" class="btn" @click.prevent="send" v-html="$t('landing.contact_form.send')"></button>
    </form>
</template>
<script>
  /* global bootbox */
  export default {
    props: ['id'],
    data () {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      isEmail (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
        return regex.test(email)
      },
      send () {
        if (!this.isEmail(this.email)) {
          bootbox.alert('Please fill out the email address field correctly')
          return
        }

        if (!this.name) {
          bootbox.alert('Please fill out the name field correctly')
          return
        }

        if (!this.message) {
          bootbox.alert('Please fill out the message field correctly')
          return
        }

        let vm = this
        $.ajax({
          url: 'https://formspree.io/oleg@allatrack.com',
          method: 'POST',
          data: {
            name: this.name,
            email: this.email,
            message: this.message
          },
          dataType: 'json',
          success: function () {
            if ($('#modal-contact-form').is(':visible')) {
              $('#modal-contact-form').modal('toggle')
            }
            bootbox.alert('<b>Thanks for contacting us!</b> <br />We will get back to you very soon.')
            vm.name = ''
            vm.email = ''
            vm.message = ''
          }
        })
      }
    }
  }
</script>