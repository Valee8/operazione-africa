<script >

//import { store } from '../store';

export default {
    name: "AppNavbar",
    data() {
        return {
            //store
            linksNav: [
                {
                    text: "Home",
                    name: "home",
                    active: true
                },
                {
                    text: "About Us",
                    name: "about-us",
                    active: false
                },
                {
                    text: "Services",
                    href: "/",
                    active: false
                },
                {
                    text: "Teams",
                    href: "/",
                    active: false
                },
                {
                    text: "Get in Touch",
                    href: "/",
                    active: false
                }
            ]
        }
    },
    watch: {
        $route(to, from) {

            let hash = parseInt(to.hash.replace(/[^0-9]+/g, ''), 10);

            if (to.hash) {
                this.linksNav[hash].active = true;

                for (let i = 0; i < this.linksNav.length; i++) {
                    if (i !== hash) {
                        this.linksNav[i].active = false;
                    }
                }
            }
            else {
                this.linksNav[0].active = true;

                for (let i = 0; i < this.linksNav.length; i++) {
                    if (i !== 0) {
                        this.linksNav[i].active = false;
                    }
                }
            }
        }
    }
}
</script>

<template>
    <nav :class="{ 'home': $route.name === 'home' || $route.name === '' }">
        <ul>
            <li v-for="(link, index) in linksNav" :key="index">
                <router-link :to="{
                    name: link.name,
                    params: index !== 0 ? { id: index } : {},
                    hash: index !== 0 ? '#' + link.name + '-' + index : ''
                }" :class="{ 'active': link.active }">
                    {{ link.text }}
                </router-link>
            </li>
            <li class="last">
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;


nav {
    height: 87px;
    padding-top: 28px;
    //margin-left: 113px;

    &.home {
        width: 63%;

        &::after {
            content: "";
            background-color: $green-color;
            height: 732px;
            position: absolute;
            right: 0;
            top: 0;
            width: 37%;
        }
    }

    &:not(.home) {
        display: flex;
        justify-content: center;
    }

    ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        //gap: 51px;
        gap: 20px;
        height: 87px;

        li {
            display: flex;
            //justify-content: center;
            align-items: center;
            //gap: 30px;
            position: relative;
            z-index: 20;
            font-size: 1.06rem;
            height: 87px;
            line-height: 87px;

            &:not(.last) {
                width: 105px;
                justify-content: center;
            }

            &.last {
                margin-right: -156px;
            }

            // &.last {
            //     background-image: url('/img/rectangle2.png');
            //     background-size: cover;
            //     background-position: right;
            //     background-repeat: no-repeat;
            //     width: 228px;

            //     // a {
            //     //     padding-right: 20px;
            //     // }
            // }

            a {
                color: #000;

                &.active {
                    color: #00715D;
                    font-weight: 700;
                }
            }
        }
    }
}
</style>
