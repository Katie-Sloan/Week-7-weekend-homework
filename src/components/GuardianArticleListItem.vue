<template lang="html">
    <li>{{article.webTitle}}</li>
    
     
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: "guardian-article-list-item",
    props: ["article"],
    methods: {
        displayInfo: function(){
            eventBus.$emit("article-selected", this.article);
        },
    }
}

</script>

<style>

</style>