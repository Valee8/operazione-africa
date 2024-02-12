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
    width: 70%;
    height: 87px;
    padding-top: 28px;
    //margin-left: 113px;


    &::after {
        content: "";
        background-color: #458962;
        height: 732px;
        position: absolute;
        right: 0;
        top: 0;
        width: 36%;
    }

    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 51px;
        height: 87px;

        li {
            position: relative;
            z-index: 20;
            font-size: 1.06rem;
            height: 87px;
            line-height: 87px;

            &:last-child {
                background-image: url('/img/rectangle.png');
                background-size: cover;
                background-position: right;
                background-repeat: no-repeat;
                width: 114px;
            }

            a {
                color: #000;
            }
        }
    }
}
</style>
