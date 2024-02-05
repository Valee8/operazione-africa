<script >
export default {
    name: "FaqSection",
    data() {
        return {
            listFaq: [
                {
                    question: "Is there a free trial?",
                    answer: "Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.",
                    active: false
                },
                {
                    question: "How many courses can I take at the same time?",
                    answer: "Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.",
                    active: false
                },
                {
                    question: "How can I choose my teacher?",
                    answer: "Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.",
                    active: false
                },
                {
                    question: "How much do the courses cost?",
                    answer: "Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.",
                    active: false
                },
                {
                    question: "How can I track my progress?",
                    answer: "Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.",
                    active: false
                }
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="section-left">
                <h2>
                    Find Answers to Your Donation Questions
                </h2>

                <p>
                    Et felis vitae ac venenatis lacus cras etiam risus scelerisque auctor adipiscing in a porta
                </p>

                <img src="/img/arrow-shape.png" alt="Immagine freccia">
            </div>

            <div class="section-right">
                <ul class="list-faq">
                    <li v-for="(faq, index) in listFaq" :key="index">
                        {{ faq.question }}
                        <span @click="faq.active = !faq.active" class="arrows">
                            <span v-if="!faq.active">
                                <i class="fa-solid fa-chevron-down"></i>
                            </span>
                            <span v-else>
                                <i class="fa-solid fa-chevron-up"></i>
                            </span>
                        </span>
                        <div v-if="faq.active">
                            {{ faq.answer }}
                        </div>
                    </li>
                </ul>
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

    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;


        .section-left {
            width: 40%;
        }

        .section-right {
            width: 58%;
        }

        .section-left {
            h2 {
                @include titles-h2;
            }
        }

        .section-right {
            .list-faq {

                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    flex-wrap: wrap;
                    background-color: #fff;
                    border-radius: 18px;
                    border: 1px solid #000;
                    margin: 10px 0;
                    font-weight: 600;
                    padding: 30px 15px;
                }
            }
        }
    }
}
</style>
