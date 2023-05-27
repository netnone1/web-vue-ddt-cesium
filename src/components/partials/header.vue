<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class='flex justify-between bg-white p-3'>
        <div class=''>
            <RouterLink to='/'>Digital twin</RouterLink>
        </div>
        <RouterLink to='/'></RouterLink>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>
