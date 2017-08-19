<template>
    <!-- LandingSolutions -->
    <section id="solutions" class="solutions bg-faded" ref="solutions">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 v-html="$t('landing.solutions.title')"></h2>
                    <hr class="small">
                    <div class="row menu">
                        <ul id="filters">
                            <li v-for="(val, key) in option.getFilterData" :class="[key===filterOption? 'active' : '']">
                                <a href="#" @click.prevent="filter(key)">
                                    {{key}}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <isotope ref="cpt" id="root-isotope"
                             :item-selector="'element-item'"
                             :list="list"
                             :options='option'
                             @filter="filterOption=arguments[0]"
                             @sort="sortOption=arguments[0]"
                             @layout="currentLayout=arguments[0]"
                             class="row grid">
                        <div v-for="element,index in list"
                             :class='[element.category]'
                             :key="index">
                            <figure>
                                <img :src="element.img.src"
                                     :alt="$t('landing.solutions.'+element.path+'.img.alt')"
                                >
                                <figcaption>
                                    <div class="cellinf">
                                        <div class="tabinf">
                                            <h3 v-html="$t('landing.solutions.'+element.path+'.title')"></h3>
                                            <p v-html="$t('landing.solutions.'+element.path+'.description')"></p>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <!-- /.element-item'-->
                    </isotope>
                    <!-- /isotope.row.grid -->
                </div>
                <!-- /.col-lg-10 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>

</template>
<script>
  import isotope from 'vueisotope'

  export default {
    data () {
      return {
        list: [
          {
            img: {
              src: require('@/assets/img/anti-bot.jpg'),
            },
            path: 'science',
            category: 'science'
          },
          {
            img: {
              src: require('@/assets/img/cars.png'),
            },
            path: 'cars',
            category: 'science'
          },
          {
            img: {
              src: require('@/assets/img/lep.png'),
            },
            path: 'lep',
            category: 'science hardware'
          },
          {
            img: {
              src: require('@/assets/img/drone-traveler.png'),
            },
            path: 'drone_traveler',
            category: 'science hardware development'
          },
          {
            img: {
              src: require('@/assets/img/hepatitis.png'),
            },
            path: 'hepatitis',
            category: 'medical science'
          },
          {
            img: {
              src: require('@/assets/img/trackandtrace.jpg'),
            },
            path: 'trackandtrace',
            category: 'medical automation development'
          },
          {
            img: {
              src: require('@/assets/img/cows.jpg'),
            },
            path: 'cows',
            category: 'automation development'
          },
          {
            img: {
              src: require('@/assets/img/receipts.jpg'),
            },
            path: 'receipts',
            category: 'automation development'
          },
          {
            img: {
              src: require('@/assets/img/agriculture.png'),
            },
            path: 'agriculture',
            category: 'automation development'
          },
          {
            img: {
              src: require('@/assets/img/smartmeter.png'),
            },
            path: 'smartmeter',
            category: 'automation hardware development'
          },
          {
            img: {
              src: require('@/assets/img/cardio.png'),
            },
            path: 'cardio',
            category: 'medical science hardware'
          },
          {
            img: {
              src: require('@/assets/img/ultrasound.jpg'),
            },
            path: 'ultrasound',
            category: 'medical science hardware'
          }
        ],
        currentLayout: 'masonry',
        selected: 'Show all',
        sortOption: 'original-order',
        filterOption: 'Show all',
        option: {
          itemSelector: '.element-item',
          getFilterData: {
            'Show all': function () {
              return true
            },
            'Data Science': function (el) {
              return el.category.search('science') !== -1
            },
            'Medical': function (el) {
              return el.category.search('medical') !== -1
            },
            'Hardware': function (el) {
              return el.category.search('hardware') !== -1
            },
            'Mobile & Web': function (el) {
              return el.category.search('development') !== -1
            },
            'ERP & Automation': function (el) {
              return el.category.search('automation') !== -1
            }
          }
        }
      }
    },
    methods: {
      filter: function (key) {
        this.$refs.cpt.filter(key)
      }
    },
    components: {
      isotope:isotope
    }
  }
</script>
<style>
    .solutions {
        padding: 50px 0;
    }

    .solutions .grid {
        margin-top: 40px;
        width: 100%;
    }

    .solutions .menu {
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

    .solutions .menu ul {
        list-style: none;
        position: relative;
        left: 50%;
    }

    .solutions .menu li {
        padding: 5px 18px 0 18px;
        position: relative;
        display: block;
        float: left;
    }

    .solutions .menu a {
        text-decoration: none !important;
        color: #03345f;
    }

    .solutions .active a {
        color: #5bc0de;
    }

    .solutions .active::after {
        content: "";
        background: #5bc0de;
        position: absolute;
        bottom: -6px;
        left: 40%;
        height: 2px;
        width: 20%;
    }

    .solutions .menu a:hover {
        color: #5bc0de;
        text-decoration: none;
    }

</style>