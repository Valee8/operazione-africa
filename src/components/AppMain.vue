<script >
export default {
    name: "AppMain",
    data() {
        return {
            message: "Main"
        }
    }
}
</script>

<template>
    <main>
        <h1>
            {{ message }}
        </h1>
    </main>
</template>

<style lang="scss" scoped>
h1 {
    color: red;
    text-align: center;
}
</style>
