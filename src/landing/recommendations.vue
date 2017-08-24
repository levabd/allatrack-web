<template>
    <!-- Clients -->
    <section id="recommendations" class="recommendations bg-faded">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 v-html="$t('landing.recommendations.title')"></h2>
                    <hr class="small">

                    <isotope ref="cpt" id="root-isotope-recommendations"
                             :item-selector="'box'"
                             :list="list"
                             :options='option'
                             @filter="filterOption=arguments[0]"
                             @sort="sortOption=arguments[0]"
                             @layout="currentLayout=arguments[0]"
                             class="row grid items-centered">
                        <div v-for="element,index in list" :key="index">
                            <figure>
                                <img :src="element.img.src" :alt="element.img.alt">
                                <figcaption @click="show(element.img)">
                                    <div class="cellinf">
                                        <div class="tabinf">
                                            <img :src="element.logo" :alt="element.img.alt">
                                            <h4 v-html="$t(element.title)"></h4>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <div>
                                <span v-html="element.bailiwick"></span>
                            </div>
                        </div>
                        <!-- /.box'-->
                    </isotope>
                    <!--isotope.row.grid -->
                </div>
                <!-- /.col-lg-10 -->
            </div>
            <!-- /.row -->
        </div>
    </section>
</template>
<style scoped>
    figure > figcaption {
        cursor: pointer;
    }

    figcaption > div > div.tabinf > img {
        width: 150px;
        height: 47px;
        margin-bottom: 30px;
    }

    .items-centered {
        margin: 0 auto;
    }

    .box {
        overflow: hidden;
        margin: 10px;
    }

    .box img {
        width: 210px;
        height: 297px;
    }

    .box figure {
        margin: 0;
    }

    .box figcaption {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 52, 101, 0.95);
        transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        -webkit-transform: translate3d(0, 100%, 0);
        -ms-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        padding: 1.5em 1em;
        display: block;
        color: #fff;

    }

    .cellinf {
        display: table;
        vertical-align: middle;
        margin: auto !important;
        max-width: 100%;
        max-height: 100%;
    }

    .tabinf {
        display: table-cell;
        vertical-align: middle;
        height: 350px;
        width: 350px;
    }

    .box figure:hover figcaption,
    .box figure:hover figcaption div p,
    .box figure:hover figcaption div li a {
        -webkit-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }


</style>
<style>
    .recommendations {
        padding: 50px 0;
    }

    .recommendations .grid {
        margin-top: 40px;
        width: 100%;
    }

    .recommendations .menu {
        margin-bottom: 24px;
        font-size: 17px;
        font-weight: 500;
        text-transform: uppercase;
        float: right;
        position: relative;
        left: -50%;
        text-align: left;
        margin-right: 0px !important;
        margin-left: 0px !important;
    }

    .recommendations .menu ul {
        list-style: none;
        position: relative;
        left: 50%;
    }

    .recommendations .menu li {
        padding: 5px 18px 0 18px;
        position: relative;
        display: block;
        float: left;
    }

    .recommendations .menu a {
        text-decoration: none !important;
        color: #03345f;
    }

    .recommendations .active a {
        color: #5bc0de;
    }

    .recommendations .active::after {
        content: "";
        background: #5bc0de;
        position: absolute;
        bottom: -6px;
        left: 40%;
        height: 2px;
        width: 20%;
    }

    .recommendations .menu a:hover {
        color: #5bc0de;
        text-decoration: none;
    }
</style>
<script>
  import isotope from 'vueisotope'

  /* global bootbox */
  export default {
    methods: {
      filter: function (key) {
        this.$refs.cpt.filter(key)
      },
      show (img) {
        bootbox.alert({
          message: `<div class="text-center" style="height: 700px; overflow-y: scroll;">
                        <img width="100%" src="${img.src}" alt="${img.alt}">
                    </div>`,
          size: 'large'
        })
      }
    },
    data () {
      return {
        locale: 'en',
        list: [
          {
            img: {
              src: require('@/assets/img/media_system.webp'),
              alt: 'landing.recommendations.media_system.img.alt'
            },
            title: 'landing.recommendations.media_system.title',
            logo: require('@/assets/img/ms-partner-logo-white.webp'),
            bailiwick: 'Web development'
          },
          {
            img: {
              src: require('@/assets/img/dniprolab.webp'),
              alt: 'landing.recommendations.dniprolab.img.alt'
            },
            title: 'landing.recommendations.dniprolab.title',
            logo: require('@/assets/img/logo-dniprolab.webp'),
            bailiwick: 'Web development'
          }
        ],
        currentLayout: 'masonry',
        selected: 'Show all',
        sortOption: 'original-order',
        filterOption: 'Show all',
        option: {
          itemSelector: '.box',
          layoutMode: 'masonry',
          masonry: {
            columnWidth: 40,
            isFitWidth: true
          },
          getFilterData: {
            'Show all': function () {
              return true
            }
          }
        }
      }
    },
    components: {
      isotope
    }
  }
</script>