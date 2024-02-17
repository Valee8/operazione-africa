<script >

export default {
    name: "AppLogo",
}
</script>

<template>
    <div class="container top">
        <div class="logo">
            <img src="/img/logo.png" alt="Logo Operazione Africa" class="logo-img" width="31" height="31">
            <span class="logo-text">
                Operazione Africa
            </span>
        </div>

        <a href="/" class="button donate">
            Donate <i class="fa-solid fa-arrow-right-long"></i>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

.container {
    &.top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: -47px;

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;

            .logo-text {
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: 1.25rem;
                font-weight: 700;
                color: #3A3A3A;
                padding-left: 30px;
            }
        }

        .donate {
            width: 199px;
            height: 59px;
            line-height: 59px;
            font-size: 1.25rem;
            font-family: 'Poppins', sans-serif;
            position: relative;
            color: #fff;
            font-weight: 700;

            svg {
                font-weight: normal;
                font-size: 0.9rem;
                padding-left: 10px;
                vertical-align: middle;

            }
        }
    }
}
</style>
