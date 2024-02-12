<script >
export default {
    name: "AppNavbar",
    data() {
        return {
            linksNav: [
                {
                    text: "Home",
                    href: "/"
                },
                {
                    text: "About Us",
                    href: "/"
                },
                {
                    text: "Services",
                    href: "/"
                },
                {
                    text: "Teams",
                    href: "/"
                },
                {
                    text: "Contact Us",
                    href: "/"
                }
            ]
        }
    }
}
</script>

<template>
    <nav>
        <ul>
            <li v-for="(link, index) in linksNav" :key="index">
                <a :href="link.href">
                    {{ link.text }}
                </a>
            </li>
            <li>
                Bandiere
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;


nav {
    width: 67%;
    height: 87px;
    padding-top: 55px;


    &::after {
        content: "";
        background-color: #458962;
        height: 732px;
        position: absolute;
        right: 0;
        top: 0;
        width: 33%;
    }

    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 51px;
        height: 100%;

        li {
            position: relative;
            z-index: 20;
            font-size: 1.06rem;

            &:last-child {
                display: flex;
                align-items: center;

                &::after {
                    content: "";
                    background-color: #FFEAC1;
                    width: 130px;
                    height: 87px;
                    z-index: 20;
                    margin-right: -127px;
                    border-radius: 0 47px 47px 0;
                }
            }

            a {
                color: #000;
            }
        }
    }
}
</style>
