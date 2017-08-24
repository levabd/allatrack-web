<template>
    <!-- LandingSolutions -->
    <section id="solutions" class="solutions bg-faded" ref="solutions">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 v-html="$t('landing.nav.solutions')"></h2>
                    <hr class="small">
                    <div class="row menu">
                        <ul id="filters">
                            <li v-for="(val, key) in getFilterTitles" :class="[key===filterOption? 'active' : '']">
                                <a href="#" @click.prevent="filter(key)">
                                    {{ $t(val)}}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <isotope ref="cpt" id="root-isotope"
                             :item-selector="'element-item'"
                             :list="list"
                             v-bind:options='option'
                             @filter="filterOption=arguments[0]"
                             @sort="sortOption=arguments[0]"
                             @layout="currentLayout=arguments[0]"
                             class="row grid">
                        <div v-for="element, index in list"
                             :class='[element.category]'
                             :key="index">
                            <figure>
                                <img :src="element.img.src" :alt="element.img.alt">
                                <figcaption>
                                    <div class="cellinf">
                                        <div class="tabinf">
                                            <h3 v-html="element.title"></h3>
                                            <p v-html="element.description"></p>
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
      let {array, getFilterData, getFilterTitles} = this.getFilterData(this.$i18n.locale)
      return {
        list: array,
        currentLayout: 'masonry',
        selected: 'all',
        sortOption: 'original-order',
        filterOption: 'all',
        option: {
          itemSelector: '.element-item',
          getFilterData: getFilterData
        },
        getFilterTitles: getFilterTitles
      }
    },
    methods: {
      filter: function (key) {
        this.$refs.cpt.filter(key)
      },
      getFilterData (locale = 'en') {
        const messages = this.$i18n.getLocaleMessage(locale)['landing']
        const obj = messages['solutions']
        let array = []
        Object.keys(obj).forEach(e => {
          array.push(obj[e])
        })

        const solutionCategories = messages['solution_categories']
        let getFilterTitles = {}
        let getFilterData = {}
        Object.keys(solutionCategories).forEach(e => {
          getFilterTitles[e] = 'landing.solution_categories.' + e
          getFilterData[e] = (el) => {
            return el.category.search(e) !== -1
          }
        })

        return {array, getFilterData, getFilterTitles}
      }
    },
    components: {
      isotope: isotope
    },
    watch: {
      '$i18n.locale': function (_new) {
        let {array, getFilterData, getFilterTitles} = this.getFilterData(_new)
        this.$set(this, 'option.getFilterData', getFilterData)
        this.$set(this, 'getFilterTitles', getFilterTitles)
        this.$set(this, 'list', array)
      }
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