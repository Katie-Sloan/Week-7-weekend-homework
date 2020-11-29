<template>
  <div id="app">
    <guardian-header title="David Mitchell articles" />
    <guardian-header v-if="!seeData.length" title="LOADING..." />
    <div v-if="seeData.length">
      <guardian-article-list :seeData="seeData"></guardian-article-list>
      <guardian-article-info 
        v-if="selectedArticle"
        :article="selectedArticle"
      ></guardian-article-info>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import GuardianArticleList from "@/components/GuardianArticleList";
import GuardianArticleInfo from "@/components/GuardianArticleInfo";
import GuardianHeader from "@/components/GuardianHeader";

export default {
  name: "app",
  components: {
    "guardian-header": GuardianHeader, 
    "guardian-article-info": GuardianArticleInfo,
    "guardian-article-list": GuardianArticleList,
  },
  data(){
    return {
      seeData: [],
      selectedArticle: null 
    };
  },
  mounted() {
    this.getArticles(); 

    eventBus.$on("article-selected", article => (this.selectedArticle = article)); 
    eventBus.$on("reverse", seeData => this.sortArticlesInReverse());
    eventBus.$on("re-order", seeData => this.sortArticles("webTitle"));
  },
  methods: {
    getArticles() {
      const promises = [1].map(item => {
        return fetch(
          'https://content.guardianapis.com/search?page=1&page-size=10&q=david+mitchell&format=json&section=commentisfree&from-date=2020-10-01&api-key=test'
        ).then(res => res.json())
    });
    Promise.all(promises)
      .then(data => {
        let articleData = data.map (article => article.response.results);
        this.seeData = [...articleData.flat(3)];
      })
      .then(() => this.sortArticles("webTitle"))
    },
    sortArticles: function(property) {
      this.seeData.sort((a, b) => {
        return a[property] < b[property] ? -1 : 1;
      });
    },
    sortArticlesInReverse: function() {
      this.seeData.reverse();
    }, 
  }
}
</script>

<style>

</style>
