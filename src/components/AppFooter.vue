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
    <footer>
        <h1>
            {{ message }}
        </h1>
    </footer>
</template>

<style lang="scss" scoped>
h1 {
    color: red;
    text-align: center;
}
</style>
