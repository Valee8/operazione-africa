<script >
export default {
    name: "AppJumbotron"
}
</script>

<template>
    <div class="header-content">
        <div class="container content">

            <div class="content-left">

                <h6>
                    Operazione Africa
                </h6>

                <h1>
                    Being Part Of Aid Foundation Is A Way To Share
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur. Ultrices ultrices pulvinar maecenas neque. Sit tellus nunc enim
                    cursus
                    dolor ultrices sit ullamcorper aliqueorem aliquet.
                </p>


                <div class="numbers">

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


            <div class="content-right">
                <div class="card big">
                    <ul class="content-card">
                        <li>
                            <img src="/img/kids.png" alt="Immagine bambini" class="card-image" width="420" height="320">
                        </li>
                        <li>
                            <span class="price">&dollar;20</span><span class="month">/MON</span>

                            <div>
                                or make one time Donation
                            </div>
                        </li>

                        <li>
                            <h3>
                                Share Food With Others In Need
                            </h3>
                        </li>

                        <li>
                            <p>
                                Lorem ipsum dolor sit amet consecpsum dolortet.
                            </p>
                        </li>

                        <li>
                            <a href="/" class="button donate">
                                Donate Now
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="card small">
                    <ul class="content-card">
                        <li>
                            <img src="/img/kid.png" alt="Immagine bambino" class="card-image">
                        </li>
                        <li>
                            <span class="price">&dollar;20</span><span class="month">/MON</span>

                            <div>
                                or make one time Donation
                            </div>
                        </li>

                        <li>
                            <h3>
                                Share Food With Others In Need
                            </h3>
                        </li>

                        <li>
                            <p>
                                Lorem ipsum dolor sit amet consecpsum dolortet.
                            </p>
                        </li>

                        <li>
                            <a href="/" class="button donate">
                                Donate Now
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

.container {
    &.content {
        position: relative;
    }
}

.header-content {
    position: relative;

    &::before {
        content: "";
        background-color: #458962;
        height: 254px;
        width: 52%;
        border-radius: 0 90px 0 0;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
    }

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
            padding-bottom: 260px;
            max-width: 611px;

        }

        .numbers {
            padding-right: 60px;


            .list-numbers {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 60px;
                color: #fff;
                height: 254px;
                position: relative;
                z-index: 2;

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

    .content-right {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 35px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 20;

        .card {
            border: 1px solid #000;
            background-color: #fff;

            &.big {
                border-radius: 53px;
                max-width: 440px;
                padding: 0 10px 30px 10px;

            }

            &.small {
                max-width: 300px;
                border-radius: 28px;
                padding: 0 6px 20px 6px;



                .content-card {
                    li {

                        &:first-child {
                            padding-bottom: 10px;
                        }

                        h3 {
                            font-size: 1.125rem;
                        }

                        p {
                            font-size: 0.5rem;
                        }

                        .donate {
                            height: 37px;
                            line-height: 37px;
                            font-size: 0.75rem;
                        }
                    }
                }
            }

            .content-card {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;

                li {
                    padding: 10px 0;

                    &:first-child {
                        padding-bottom: 40px;
                    }

                    &:not(:first-child) {
                        width: 100%;
                        margin: 0 10px;
                    }

                    .card-image {
                        display: block;
                    }

                    .price {
                        color: $orange-color;
                        font-size: 1.375rem;
                        font-weight: 600;
                    }

                    .month,
                    div {
                        font-size: 0.75rem;
                        color: #383F42;
                    }

                    div {
                        padding-top: 10px;
                    }

                    h3 {
                        color: #262A2C;
                        font-weight: 500;
                        font-size: 2.375rem;
                    }

                    p {
                        font-weight: 400;
                        font-size: 1.125rem;
                        color: gray;
                    }

                    .donate {
                        display: block;
                        width: 100%;
                        height: 61px;
                        line-height: 61px;
                        color: #fff;
                        text-align: center;
                        font-size: 1.75rem;
                        font-weight: 700;
                    }
                }
            }
        }
    }
}
</style>
