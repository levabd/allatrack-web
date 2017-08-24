<template>
    <!-- Clients -->
    <section id="clients" class="clients">
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-8 text-center">
                    <h2 v-html="$t('landing.clients')"></h2>
                    <hr class="small">
                    <div class="row">
                        <div class="nbs-flexisel-container">
                            <div class="nbs-flexisel-inner">
                                <ul id="clientsCarousel">
                                    <li><img src="../assets/img/mgid-logo.webp" alt="MGid logo"/></li>
                                    <li><img src="../assets/img/ms-logo.webp" alt="MS logo"/></li>
                                    <li><img src="../assets/img/logo-dniprolab.webp" alt="Dniprolab logo"/></li>
                                    <li><img src="../assets/img/Smart4tech-logo.webp" alt="Smart4tech logo"/></li>
                                    <li><img src="../assets/img/logo-ncels.webp" alt="Ncels logo"/></li>
                                    <li><img src="../assets/img/rdc-logo.webp" alt="RDC logo"/></li>
                                    <li><img src="../assets/img/atameken-logo.webp" alt="Atameken logo"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </section>
</template>
<script>
  import '../assets/js/jquery.flexisel'

  export default {
    mounted () {
      $('#clientsCarousel').flexisel({
        visibleItems: 5,
        itemsToScroll: 1,
        autoPlay: {
          enable: true,
          interval: 5000,
          pauseOnHover: true
        }
      })
    }
  }
</script>
<style>
    .clients {
        margin: 20px 0;
    }
</style>
