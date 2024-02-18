<script >

import HowToStartSection from './HowToStartSection.vue';
import ListCardsSection from './ListCardsSection.vue';
import FaqSection from './FaqSection.vue';
import NewsletterSection from './NewsletterSection.vue';
import AboutUsSection from './AboutUsSection.vue';

export default {
    name: "AppMain",
    components: {
        HowToStartSection,
        ListCardsSection,
        FaqSection,
        NewsletterSection,
        AboutUsSection
    }
}
</script>

<template>
    <main>
        <div :class="{ 'home': $route.name === 'home' || $route.name === '' }">
            <HowToStartSection />
            <ListCardsSection />
            <FaqSection />
            <NewsletterSection />
        </div>
        <AboutUsSection v-if="$route.name === 'about-us'" />
    </main>
</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables' as *;

div:not(.home) {
    display: none;
}
</style>
