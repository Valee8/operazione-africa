<script >

import HowToStartSection from './HowToStartSection.vue';
import ListCardsSection from './ListCardsSection.vue';
import FaqSection from './FaqSection.vue';

export default {
    name: "AppMain",
    components: {
        HowToStartSection,
        ListCardsSection,
        FaqSection
    }
}
</script>

<template>
    <main>
        <HowToStartSection />
        <ListCardsSection />
        <FaqSection />
    </main>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;
</style>
