<script >
export default {
    name: "AppJumbotron"
}
</script>

<template>
    <div class="jumbotron"
        :class="{ 'home': $route.name === 'home' || $route.name === '', 'not-home': $route.name !== 'home' }">
        <div class="content home">
            <div class="container center">

                <div class="content-left">

                    <h6>
                        Operazione Africa
                    </h6>

                    <h1>
                        Being Part Of Aid Foundation Is A Way To Share
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ultrices ultrices pulvinar maecenas neque. Sit tellus nunc
                        enim
                        cursus
                        dolor ultrices sit ullamcorper aliqueorem aliquet.
                    </p>
                </div>

                <div class="content-right">
                    <div class="card big">
                        <div class="content-card">
                            <img src="/img/kids.png" alt="Immagine bambini" class="card-image" width="303" height="256">

                            <div class="content-text">
                                <div class="price-month">
                                    <span class="price">
                                        &dollar;20
                                    </span>

                                    <span class="month">
                                        /MON
                                    </span>

                                    <div>
                                        or make one time Donation
                                    </div>
                                </div>

                                <h3>
                                    Share Food With Others In Need
                                </h3>

                                <p>
                                    Lorem ipsum dolor sit amet consecpsum dolortet.
                                </p>

                                <a href="/" class="button donate">
                                    Donate Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card small">
                        <div class="content-card">
                            <img src="/img/kid.png" alt="Immagine bambino" class="card-image" width="240" height="190">

                            <div class="content-text">
                                <div class="price-month">
                                    <span class="price">
                                        &dollar;20
                                    </span>

                                    <span class="month">
                                        /MON
                                    </span>

                                    <div>
                                        or make one time Donation
                                    </div>
                                </div>

                                <h3>
                                    Share Food With Others In Need
                                </h3>

                                <p>
                                    Lorem ipsum dolor sit amet consecpsum dolortet.
                                </p>

                                <a href="/" class="button donate">
                                    Donate Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div class="container bottom">

                <ul class="list-numbers">
                    <li>
                        <div class="number">
                            145&plus;
                        </div>

                        <div class="text">
                            Archived Compaigns
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            1200&plus;
                        </div>

                        <div class="text">
                            Donation Riceived
                        </div>
                    </li>
                    <li>
                        <div class="number">
                            545&plus;
                        </div>

                        <div class="text">
                            Clarity in the Last Year
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="content" :class="{ 'about-us': $route.name === 'about-us' }">
            Home > About Us
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

.jumbotron {
    position: relative;

    &.home {
        &::before {
            content: "";
            background-color: $green-color;
            height: 254px;
            width: 65%;
            border-radius: 0 90px 0 0;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
        }

        .content {
            &:not(.home) {
                display: none;
            }
        }
    }

    &.not-home {
        .content {
            &.home {
                display: none;
            }

            &.about-us {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                min-height: 600px;
                color: #fff;
                font-size: 2rem;
            }
        }
    }

    .container {
        &.center {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;


            .content-left {
                padding-top: 100px;
                max-width: 52%;


                h6 {
                    font-weight: 500;
                    font-size: 1.25rem;
                }

                h1 {
                    padding: 30px 0;
                    font-weight: 700;
                    font-size: 3.75rem;
                    max-width: 505px;
                    line-height: 84px;
                }

                p {
                    font-weight: 400;
                    font-size: 1.19rem;
                    line-height: 33px;
                    //padding-bottom: 260px;
                    max-width: 611px;

                }
            }

            .content-right {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                padding-top: 70px;
                gap: 80px;

                .card {
                    border: 1px solid #000;
                    background-color: #fff;
                    position: relative;

                    &.big {
                        border-radius: 53px;
                        max-width: 303px;
                        padding: 10px 10px 20px 10px;

                        .content-card {
                            .content-text {
                                padding: 0 16px;

                                h3 {
                                    font-weight: 500;
                                    font-size: 1.5rem;
                                }

                                p {
                                    padding: 15px 0;
                                }

                                .price-month {
                                    padding: 10px 0;

                                    .price {
                                        font-size: 1.5rem;
                                    }
                                }

                                .donate {
                                    height: 35px;
                                    line-height: 35px;
                                    font-size: 1.3rem;
                                }
                            }
                        }

                    }

                    &.small {
                        max-width: 240px;
                        border-radius: 28px;
                        padding: 4px 4px 15px 4px;
                        top: 180px;

                        .content-card {

                            .content-text {
                                padding: 0 10px;

                                .price-month {
                                    padding: 5px 0;
                                }

                                h3 {
                                    font-size: 1.125rem;
                                }

                                p {
                                    font-size: 0.8rem;
                                    padding: 8px 0;
                                }

                                .donate {
                                    height: 37px;
                                    line-height: 37px;
                                    font-size: 0.9rem;
                                }
                            }
                        }
                    }

                    .content-card {

                        .card-image {
                            display: block;
                        }

                        .content-text {
                            .price-month {


                                .price {
                                    color: $orange-color;
                                    font-size: 1.2rem;
                                    font-weight: 600;
                                }

                                .month,
                                div {
                                    font-size: 1.1rem;
                                    color: #383F42;
                                }
                            }

                            h3 {
                                color: #262A2C;
                            }

                            p {
                                font-weight: 400;
                                color: gray;
                            }

                            .donate {
                                display: block;
                                width: 100%;
                                color: #fff;
                                text-align: center;
                                font-weight: 700;
                                margin: 0 auto;
                            }
                        }
                    }
                }
            }
        }

        &.bottom {
            max-width: 1500px;
            padding-top: 70px;

            .list-numbers {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 0 120px;
                color: #fff;
                height: 254px;
                position: relative;
                z-index: 2;
                width: 65%;

                li {
                    //margin: 0 50px;

                    .number {
                        font-size: 2.5rem;
                        font-weight: 600;
                    }

                    .text {
                        font-size: 1.19rem;
                        font-weight: 400;
                        padding-top: 20px;
                    }
                }
            }
        }
    }
}
</style>
