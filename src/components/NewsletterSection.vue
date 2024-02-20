<script >

export default {
    name: "NewsletterSection"
}
</script>

<template>
    <section>
        <div class="container">
            <div class="section-left">
                <h2>
                    Sign up for our Newsletter
                </h2>
                <p>
                    Stay in the loop with everything you need to know.
                </p>
            </div>

            <div class="section-right">
                <div class="input-section">
                    <input type="text" name="" id="" placeholder="Enter your email" class="subscription-input">
                    <input type="button" value="Subscribe" class="subscription-button">
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
    background-color: $green-color;
    color: #fff;
    padding: 100px 0;
    margin-top: 100px;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 80px;

        .section-left {
            width: 28%;

            h2 {
                font-size: 3rem;
                line-height: 67px;
            }

            p {
                font-size: 1.25rem;
                line-height: 30px;
                padding-top: 30px;
                font-weight: 500;
            }
        }

        .section-right {

            .input-section {
                position: relative;

                input {
                    font-family: 'Rubik', sans-serif;
                    border: 0;
                    border-radius: 66px;
                    //font-size: 0.9rem;
                    //font-weight: 500;
                    font-size: 1.25rem;
                }

                .subscription-input {
                    background-color: #fff;
                    padding-left: 30px;
                    color: #3D3D3D;
                    width: 580px;
                    font-weight: 500;
                    height: 75px;
                    line-height: 75px;
                }

                .subscription-button {
                    background-color: $orange-color;
                    color: #F0FDF4;
                    padding: 0 35px;
                    font-weight: 700;
                    position: absolute;
                    right: -1px;
                    top: -1px;
                    height: 77px;
                    line-height: 77px;
                }
            }
        }
    }
}
</style>
