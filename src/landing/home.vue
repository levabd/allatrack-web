<template>

    <div>
        <landing-nav></landing-nav>

        <landing-header :window-height='windowHeight'></landing-header>

        <landing-services></landing-services>

        <landing-solutions></landing-solutions>

        <landing-clients></landing-clients>

        <landing-recommendations></landing-recommendations>

        <landing-contact></landing-contact>

        <landing-footer></landing-footer>

    </div>

</template>

<script>
  export default {
    components: {
      'landing-nav': require('@/landing/nav.vue'),
      'landing-footer': require('@/landing/footer.vue'),
      'landing-solutions': require('@/landing/solutions.vue'),
      'landing-services': require('@/landing/services.vue'),
      'landing-clients': require('@/landing/clients.vue'),
      'landing-recommendations': require('@/landing/recommendations.vue'),
      'landing-contact': require('@/landing/contact.vue'),
      'landing-header': require('@/landing/header.vue')
    },
    data () {
      return {
        windowHeight: $(window).height()
      }
    },
    created () {
      console.log('created', this.$route.params.lang)
      this.$i18n.setLocale(this.$route.params.lang)
    }
  }
</script>