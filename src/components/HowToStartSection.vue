<script >
export default {
    name: "HowToStartSection",
    data() {
        return {
            helpsInfo: [
                {
                    image: "img/icon-users.png",
                    alt: "Utenti",
                    title: "Register Yourself",
                    description: "Sign up to join and be part of the good people who love to share"
                },
                {
                    image: "img/icon-clap.png",
                    alt: "Applauso",
                    title: "Select Donate",
                    description: "There are many things you can choose to share goodness with"
                },
                {
                    image: "img/icon-smile.png",
                    alt: "Smile sorridente",
                    title: "Share Happiness",
                    description: "Sharing happiness with those less and doing more good for others"
                }
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <h2>
                How To Start Help
            </h2>

            <p>
                In carrying out their duties, charitable foundations provide a variety of social services such as education,
                food, medicine, housing, and others
            </p>

            <div class="help-infos">

                <div v-for="(help, index) in helpsInfo" :key="index" class="info">
                    <img :src="help.image" :alt="'Immagine ' + help.alt" width="80" height="80">

                    <h3>
                        {{ help.title }}
                    </h3>

                    <p>
                        {{ help.description }}
                    </p>
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
    color: #fff;
    text-align: center;

    .container {
        background-color: $orange-color;
        border-radius: 133px;
        padding: 60px;

        h2 {
            font-size: 3.5rem;
            font-weight: 500;
            padding-bottom: 10px;
        }

        h2+p {
            width: 750px;
            margin: 0 auto;
        }

        p {
            color: #D8D8D8;
            font-weight: 400;
            font-size: 1rem;
            line-height: 28px;
        }

        .help-infos {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 80px;
            padding: 50px 0 40px 0;

            .info {
                width: calc(100% / 3 - 80px);

                h3 {
                    font-size: 2rem;
                    font-weight: 500;
                    padding: 20px 0;
                }
            }
        }
    }
}
</style>
