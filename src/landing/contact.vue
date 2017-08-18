<template>
    <!-- Contact -->
    <section id="contact" class="map">
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.280248644738!2d30.498532366873988!3d50.435880405794364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI2JzA5LjIiTiAzMMKwMzAnMDAuMyJF!5e0!3m2!1sen!2sua!4v1499430784460"></iframe>
        <br/>
        <small>
            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.280248644738!2d30.498532366873988!3d50.435880405794364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI2JzA5LjIiTiAzMMKwMzAnMDAuMyJF!5e0!3m2!1sen!2sua!4v1499430784460"></a>
        </small>
        <div class="map-overlay-wrapper">
            <div class="map-overlay"></div>
            <div class="contact-form text-center">
                <header class="section-header">
                    <img src="../assets/img/support-icon.svg" height="60" alt="support icon">
                    <h2 v-html="$t('landing.contact_form.title')"></h2>
                    <h4 v-html="$t('landing.contact_form.description')"></h4>
                </header>
                <contact-form id="feedback"></contact-form>
            </div>
        </div>
    </section>
</template>
<script>
    import ContactForm from '../components/contact-form.vue'

    export default {
        components:{
            ContactForm
        },
        mounted(){

            // Disable Google Maps scrolling
            // See http://stackoverflow.com/a/25904582/1607849
            // Disable scroll zooming and bind back the click event
            var onMapMouseleaveHandler = function (event) {
                var that = $(this);
                that.on('click', onMapClickHandler);
                that.off('mouseleave', onMapMouseleaveHandler);
                that.find('iframe').css("pointer-events", "none");
            }
            var onMapClickHandler = function (event) {
                var that = $(this);
                // Disable the click handler until the user leaves the map area
                that.off('click', onMapClickHandler);
                // Enable scrolling zoom
                that.find('iframe').css("pointer-events", "auto");
                // Handle the mouse leave event
                that.on('mouseleave', onMapMouseleaveHandler);
            }
            // Enable map zooming with mouse scroll when the user clicks the map
            $('.map').on('click', onMapClickHandler);

            // change is-checked class on buttons
            $('#filters').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'a', function () {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).parent().addClass('active');
                });
            });
        }
    }
</script>