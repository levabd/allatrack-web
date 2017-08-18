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
                                <img :src="element.img.src" :alt="element.img.alt">
                                <figcaption>
                                    <div class="cellinf">
                                        <div class="tabinf">
                                            <h3> {{element.title}} </h3>
                                            {{ element.description }}
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
    import isotope from '../../node_modules/vueisotope/src/vue_isotope'

    export default{
        data(){
           return {
                locale: 'en',
                list: [
                    {
                        img: {
                            src: require('@/assets/img/anti-bot.jpg'),
                            alt: this.$root.$t('landing.solutions.science.img.alt')
                        },
                        title: this.$root.$t('landing.solutions.science.title'),
                        description: this.$root.$t('landing.solutions.science.description'),
                        category: "science"
                    },
                    {
                        img: {
                            src: require('@/assets/img/cars.png'),
                            alt: this.$root.$t('landing.solutions.cars.img.alt')
                        },
                        title: this.$root.$t('landing.solutions.cars.title'),
                        description:this.$root.$t('landing.solutions.cars.description'),
                        category: "science"
                    },
                    {
                        img: {
                            src: require('@/assets/img/lep.png'),
                            alt: this.$root.$t('landing.solutions.lep.img.alt')
                        },
                        title: this.$root.$t('landing.solutions.lep.title'),
                        description:this.$root.$t('landing.solutions.lep.description'),
                        category: "science hardware"
                    },
                    {
                        img: {
                            src: require('@/assets/img/drone-traveler.png'),
                            alt:this.$root.$t('landing.solutions.drone_traveler.img.alt')
                        },
                        title:this.$root.$t('landing.solutions.drone_traveler.title'),
                        description:this.$root.$t('landing.solutions.drone_traveler.description'),
                        category: "science hardware development"
                    },
                    {
                        img: {
                            src: require('@/assets/img/hepatitis.png'),
                            alt: this.$root.$t('landing.solutions.hepatitis.img.alt')
                        },
                        title:this.$root.$t('landing.solutions.hepatitis.title'),
                        description:this.$root.$t('landing.solutions.hepatitis.description'),
                        category: "medical science"
                    },
                    {
                        img: {
                            src: require('@/assets/img/trackandtrace.jpg'),
                            alt:this.$root.$t('landing.solutions.trackandtrace.img.alt')
                        },
                        title: this.$root.$t('landing.solutions.trackandtrace.title'),
                        description:this.$root.$t('landing.solutions.trackandtrace.description'),
                        category:  "medical automation development"
                    },
                    {
                        img: {
                            src: require('@/assets/img/cows.jpg'),
                            alt:this.$root.$t('landing.solutions.cows.img.alt')
                        },
                        title: this.$root.$t('landing.solutions.cows.title'),
                        description: this.$root.$t('landing.solutions.cows.description'),
                        category: "automation development"
                    },
                    {
                        img: {
                            src: require('@/assets/img/receipts.jpg'),
                            alt:this.$root.$t('landing.solutions.receipts.img.alt')
                        },
                        title:this.$root.$t('landing.solutions.receipts.title'),
                        description: this.$root.$t('landing.solutions.receipts.description'),
                        category: "automation development"
                    },
                    {
                        img: {
                            src: require('@/assets/img/agriculture.png'),
                            alt:this.$root.$t('landing.solutions.agriculture.img.alt')
                        },
                        title:this.$root.$t('landing.solutions.agriculture.title'),
                        description:this.$root.$t('landing.solutions.agriculture.description'),
                        category: "automation development"
                    },
                    {
                        img: {
                            src: require('@/assets/img/smartmeter.png'),
                            alt:this.$root.$t('landing.solutions.smartmeter.img.alt')
                        },
                        description:this.$root.$t('landing.solutions.smartmeter.description'),
                        category: "automation hardware development"
                    },
                    {
                        img: {
                            src: require('@/assets/img/cardio.png'),
                            alt:this.$root.$t('landing.solutions.cardio.img.alt')
                        },
                        title:this.$root.$t('landing.solutions.cardio.title'),
                        description: this.$root.$t('landing.solutions.cardio.description'),
                        category: "medical science hardware"
                    },
                    {
                        img: {
                            src: require('@/assets/img/ultrasound.jpg'),
                            alt: this.$root.$t('landing.solutions.ultrasound.img.alt')
                        },
                        title: this.$root.$t('landing.solutions.ultrasound.title'),
                        description: this.$root.$t('landing.solutions.ultrasound.description'),
                        category: "medical science hardware"
                    }
                ],
                currentLayout: 'masonry',
                selected: 'Show all',
                sortOption: "original-order",
                filterOption: "Show all",
                option: {
                    itemSelector: ".element-item",
                    getFilterData: {
                        "Show all": function () {
                            return true;
                        },
                        "Data Science": function (el) {
                            return el.category.search("science")!==-1;
                        },
                        "Medical": function (el) {
                            return el.category.search("medical")!==-1;
                        },
                        "Hardware": function (el) {
                            return el.category.search("hardware")!==-1;
                        },
                        "Mobile & Web": function (el) {
                            return el.category.search('development')!==-1;
                        },
                        "ERP & Automation": function (el) {
                            return el.category.search('automation')!==-1;
                        }
                    }
                }
            }
        },
        methods: {
            filter: function (key) {
                this.$refs.cpt.filter(key);
            }
        },
        components: {
            isotope
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