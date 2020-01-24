<template>
    <v-card
            outlined
            max-height="500px">
        <v-img
                v-if="img_url != ''"
                height="200px"
                v-bind:src="img_url"/>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ author }}</v-card-subtitle>
        <v-card-text>{{ text }}</v-card-text>
        <v-card-actions>
            <v-btn :href="url" target="_blank" text color="teal darken-4">Читать полностью</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "Article",
        props: ["title", "author", "img_url", "text", "url"]
    }
</script>

<style scoped>

</style>