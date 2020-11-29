<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      seeData: [], 
    };
  },
  mounted() {
    this.getArticles(); 
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
        console.log(this.seeData);
      })
    },
  }
}
</script>

<style>

</style>
