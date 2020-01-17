<template>
    <v-app>
        <v-app-bar
                absolute
                app
                dark
                color="teal">
            <v-toolbar-title>Новостной Агрегатор</v-toolbar-title>
        </v-app-bar>
        <v-content>
            <v-container>
                <v-alert v-if="success" outlined type="error">Возникла ошибка при получении данных с сервера. Обновите страницу или зайдите позже</v-alert>
                <v-row>
                    <v-col :key="index" cols="12" md="4" lg="4" xl="4" v-for="(article, index) in list">
                        <Article
                                v-bind:title="article.title"
                                v-bind:img_url="article.urlToImage"
                                v-bind:author="article.author"
                                v-bind:text="article.description"/>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Article from "@/components/Article";

    export default {
        name: 'App',

        components: {
            Article
        },

        data: () => ({
            success: true,
            list: []
        }),

        mounted() {

            let url = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=d7f41a32c26b4bbfb596d58b1a54c766";

            this.axios.get(url).then((response) => {

                if (response.data.status != "ok")
                    this.success = false;
                else
                    this.list = response.data.articles;

            })

        }
    };
</script>
