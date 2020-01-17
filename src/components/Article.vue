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
        <v-card-text>{{ txt }}</v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Article",
        props: ["title", "author", "img_url", "text"],
        computed: {
            txt() {

                return this.text;

                /*if (this.text.length > 180)
                    return this.text.substr(0, 180) + "...";
                else
                    return this.text;*/

            }
        }
    }
</script>

<style scoped>

</style>