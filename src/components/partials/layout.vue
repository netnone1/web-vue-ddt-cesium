<template>
    <Header />
    <slot />
    <Footer />
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'

export default {
    name: 'Layout',
    components: {
        Header,
        Footer
    }
}
</script>