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
                            <img src="/img/kids.png" alt="Immagine bambini" class="card-image">
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
                            <img src="/img/kid.png" alt="Immagine bambini" class="card-image">
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
        width: 40%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
    }

    .content-left {
        padding-top: 100px;


        h6 {
            font-weight: 500;
            font-size: 1.25rem;
        }

        h1 {
            padding: 30px 0;
            font-weight: 700;
            font-size: 3.75rem;
            width: 505px;
        }

        p {
            font-weight: 400;
            font-size: 1.19rem;
            line-height: 33px;
            width: 611px;
            padding-bottom: 320px;

        }

        .numbers {

            .list-numbers {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 60px;
                color: #fff;
                text-align: left;
                border-radius: 0 90px 0 0;
                width: 780px;
                background-color: #458962;
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
        gap: 20px;
        position: absolute;
        right: 0;
        top: 30px;
        z-index: 20;

        .card {
            border-radius: 53px;
            border: 1px solid #000;
            background-color: #fff;
            padding: 0 10px 30px 10px;

            &.big {
                width: 480px;
            }

            &.small {
                width: 300px;
                height: 528px;

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
                        color: #E17153;
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
