<template>
    <!-- Services -->
    <section id="services" class="services">
        <div class="container">
            <div class="row text-center">
                <div class="col-lg-12 col-lg-offset-1">
                    <h2 v-html="$t('landing.services.title')"></h2>
                    <hr class="small">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-info"></i>
                                <i class="fa fa-magic fa-stack-1x text-white"></i>
                            </span>
                                <h4>
                                    <strong v-html="$t('landing.services.vision.title')"></strong>
                                </h4>
                                <p v-html="$t('landing.services.vision.description')"></p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-info"></i>
                                <i class="fa fa-line-chart fa-stack-1x text-white"></i>
                            </span>
                                <h4>
                                    <strong v-html="$t('landing.services.science.title')"></strong>
                                </h4>
                                <p v-html="$t('landing.services.science.description')"></p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-info"></i>
                                <i class="fa fa-heartbeat fa-stack-1x text-white"></i>
                            </span>
                                <h4>
                                    <strong v-html="$t('landing.services.hardware.title')"></strong>
                                </h4>
                                <p v-html="$t('landing.services.hardware.description')"></p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="service-item">
                                <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-info"></i>
                                <i class="fa fa-mobile fa-stack-1x text-white"></i>
                            </span>
                                <h4>
                                    <strong v-html="$t('landing.services.web.title')"></strong>
                                </h4>
                                <p v-html="$t('landing.services.web.description')"></p>
                            </div>
                        </div>
                    </div>
                    <!-- /.row (nested) -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>

</template>
