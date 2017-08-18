<template>
    <div>
        <footer>
            <div class="col-sm-4">
            </div>
            <div class="footer-menu col-sm-2">
                <ul>
                    <li>
                        <a href="#top" v-html="$t('landing.nav.home')"></a>
                    </li>
                    <li>
                        <a href="#solutions" v-html="$t('landing.nav.solutions')"></a>
                    </li>
                    <li>
                        <a href="#clients" v-html="$t('landing.nav.clients')"></a>
                    </li>
                    <li>
                        <a href="#contact" v-html="$t('landing.nav.contact')"></a>
                    </li>
                </ul>
            </div>
            <div class="footer-contact col-sm-4">
                <span v-html="$t('country_code')"></span>
                <span v-html="$t('address')"></span>
                <span>{{ $t('phone') }}<a href="tel:380960081844">+380 (96) 008-18-44</a></span>
                <span>Email: <a href="mailto: hello@allatrack.com">hello@allatrack.com</a></span>
            </div>
            <div class="col-sm-2">
            </div>
            <div class="copyright">
                <span>Copyright &copy; Allatrack 2016 - {{ currentYear }} </span>
            </div>
        </footer>

        <a href="" class="chat-btn fixed" data-toggle="modal" data-target="#modal-contact-form"></a>

        <div class="modal fade" id="modal-contact-form" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">×</span></button>
                    <div class="modal-body">
                        <!--contact form-->
                        <div class="contact-form-modal text-center">
                            <header class="section-header"><img src="../assets/img/support-icon.svg" alt="support icon">
                                <h2 v-html="$t('landing.contact_form.title')"></h2>
                                <h3 v-html="$t('landing.contact_form.description')"></h3>
                            </header>
                            <contact-form id="feedback-popup"></contact-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import ContactForm from '../components/contact-form.vue'
    export default {
        computed: {
            currentYear () {
                return new Date().getFullYear();
            }
        },
        components:{
            ContactForm
        }
    }
</script>
