<template lang="html">
    <div class="article-list" v-if="seeData.length">
        <button v-on:click="sortInReverseAlphabetically">Sort In Reverse Alphabetical Order</button>
        <button v-on:click="returnToAlphabetical">Return to Alphabetical Order</button>
        <ul>
        <guardian-article-list-item
            v-for="(article, index) in seeData"
            :article="article"
            :key="index"
        >
        </guardian-article-list-item>
        </ul>
    </div>
</template>

<script>
import GuardianArticleListItem from "@/components/GuardianArticleListItem";
import { eventBus } from "@/main.js";

export default {
    name: "guardian-article-list",
    props: ["seeData"],
    components: {
        "guardian-article-list-item": GuardianArticleListItem
    },
    methods: {
        sortInReverseAlphabetically() {
        eventBus.$emit("reverse");
        },
        returnToAlphabetical() {
        eventBus.$emit("re-order");
        }
    }
}
</script>

<style>

</style>