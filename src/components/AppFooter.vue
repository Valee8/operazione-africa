<script >
export default {
    name: "AppFooter",
    data() {
        return {
            message: "Footer"
        }
    }
}
</script>

<template>
    <h1>
        {{ message }}
    </h1>
</template>

<style lang="scss" scoped>
h1 {
    color: red;
    text-align: center;
}
</style>
