<template>
    <li v-on:click="handleClick">{{article.webTitle}}</li> 
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: "guardian-article-list-item",
    props: ["article"],
    methods: {
        handleClick: function(){
            eventBus.$emit("article-selected", this.article);
        },
    }
}

</script>

<style>

</style>