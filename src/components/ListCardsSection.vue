<script >
export default {
    name: "ListCardsSection",
    data() {
        return {
            listCards: [
                {
                    image: "img/woman-kid.png",
                    title: "Share Food With Others In Need",
                    description: "In carrying out their duties, charitable foundations food, medicine, food,"
                },
                {
                    image: "img/woman-kid.png",
                    title: "Share Food With Others In Need",
                    description: "In carrying out their duties, charitable foundations food, medicine, food,"
                },
                {
                    image: "img/woman-kid.png",
                    title: "Share Food With Others In Need",
                    description: "In carrying out their duties, charitable foundations food, medicine, food,"
                },
                {
                    image: "img/woman-kid.png",
                    title: "Share Food With Others In Need",
                    description: "In carrying out their duties, charitable foundations food, medicine, food,"
                },
                {
                    image: "img/woman-kid.png",
                    title: "Share Food With Others In Need",
                    description: "In carrying out their duties, charitable foundations food, medicine, food,"
                },
                {
                    image: "img/woman-kid.png",
                    title: "Share Food With Others In Need",
                    description: "In carrying out their duties, charitable foundations food, medicine, food,"
                }
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="title">
                <h2>
                    Let’s Give Help To Those In Need
                </h2>

                <p>
                    Charitable foundations provide a variety of social services such as education, food, medicine, housing,
                    and
                    others
                    <a href="/">Show more <i class="fa-solid fa-arrow-right-long"></i></a>
                </p>
            </div>

            <div class="cards">
                <div v-for="(card, index) in listCards" :key="index" class="card">
                    <ul>
                        <li>
                            <img :src="card.image" alt="">
                        </li>
                        <li>
                            <span class="price">&dollar;20</span><span class="month">/MON</span>

                            <div>
                                or make one time Donation
                            </div>
                        </li>
                        <li>
                            <h3>
                                {{ card.title }}
                            </h3>
                        </li>
                        <li>
                            <p>
                                {{ card.description }}
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
    </section>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;


section {
    padding-top: 200px;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            @include titles-h2;
            color: #242A2E;
            width: 531px;
        }

        p {
            color: #3D3D3D;
            font-size: 1.19rem;
            font-weight: 400;
            width: 510px;

            a {
                display: block;
                color: $orange-color;
                text-decoration: underline;
                font-weight: 700;
                font-size: 1rem;
                line-height: 33px;

                svg {
                    padding-left: 10px;
                }
            }
        }
    }

    .cards {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px 30px;
        padding-top: 50px;

        .card {
            padding: 10px;
            width: calc(100% / 3 - 30px);
            background-color: #fff;
            border: 1px solid #000;
            border-radius: 53px;

        }
    }
}
</style>
