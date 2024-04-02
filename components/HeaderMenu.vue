<script>
    export default {
        data() {
            return {
                links: [
                    { label:"works", path: '/works'},
                ]
            }
        },
        methods: {
            isInternalLink (path) {
                return !/^https?:\/\//.test(path)
            }
        }
    }
</script>

<template>
    <header>
        <nav class="header-nav">
            <ul>
                <li v-for="(link, i) in links" :key="i">
                    <template v-if="isInternalLink(link.path)">
                        <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
                    </template>
                    <template v-else>
                        <a :href="link.path">{{ link.label }}</a>
                    </template>
                </li>
            </ul>
        </nav>
    </header>
</template>