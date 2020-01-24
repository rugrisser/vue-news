<template>
    <v-app>
        <v-app-bar
                absolute
                app
                dark
                color="teal">
            <v-toolbar-title>Новостной Агрегатор</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom left min-width="120px" max-height="300px">
                <template v-slot:activator="{ on }">
                    <v-btn icon color="white" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list shaped>
                    <v-list-item
                            v-for="(language, index) in languages"
                            link
                            color="teal darken-2"
                            :to="language"
                            :key="index">
                        <v-list-item-title>{{ language }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-content>
            <v-container>
                <v-alert v-if="!success" outlined type="error">Возникла ошибка при получении данных с сервера. Обновите страницу или зайдите позже</v-alert>
                <v-alert v-if="lang_err" outlined type="error">Введён неправильный параметр страны. Автоматически переключён на новости из России (ru)</v-alert>
                <v-row>
                    <v-col :key="index" cols="12" md="6" lg="4" xl="4" v-for="(article, index) in list">
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
        name: 'home',
        components: {
            Article
        },
        data: () => ({
            success: true,
            lang_err: false,
            list: [],
            lang: 'ru',
            languages: [
                'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb',
                'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl',
                'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua',
                'us', 've', 'za'
            ]
        }),
        watch: {
            lang: {
                handler() {
                    this.lang_err = false;
                }
            },
            $route: {
                handler() {

                    this.lang = this.$route.params.lang;

                    if ((this.lang === undefined) || (this.languages.indexOf(this.lang) === -1)) {
                        this.lang = 'ru';
                        this.lang_err = true;
                    }

                    let url = 'https://newsapi.org/v2/top-headlines?country=' + this.lang + '&apiKey=d7f41a32c26b4bbfb596d58b1a54c766';
                    this.axios.get(url).then((response) => {
                        if (response.data.status != "ok")
                            this.success = false;
                        else
                            this.list = response.data.articles;
                    });

                },
                immediate: true
            }
        }
    }
</script>
