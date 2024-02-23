<script >

export default {
    name: "AboutUsSection",
    data() {
        return {
            firstSectionLinks: [
                {
                    icon: "img/about-us-icon1.png",
                    title: "Great team work",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra.",
                    width: 84
                },
                {
                    icon: "img/about-us-icon2.png",
                    title: "Our vision",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..",
                    width: 86
                },
                {
                    icon: "img/about-us-icon3.png",
                    title: "Our mission",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..",
                    width: 85
                }
            ]
        }
    }
}
</script>

<template>
    <section class="first-section">
        <div class="container">
            <div v-for="(links, index) in firstSectionLinks" :key="index" class="cards">
                <img :src="links.icon" :alt="'Immagine ' + links.title" class="card-image" :width="links.width" height="86">
                <h3>
                    {{ links.title }}
                </h3>
                <p>
                    {{ links.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

.first-section {
    padding: 100px 0;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 50px;


        .cards {
            text-align: center;

            .card-image {
                padding: 10px 0;
            }

            h3 {
                font-size: 3rem;
                padding: 20px 0;
                font-weight: 600;
            }

            p {
                font-size: 1.125rem;
                color: #878787;
                line-height: 36px;
            }
        }
    }
}
</style>
