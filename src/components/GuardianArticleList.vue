<template lang="html">
    <div class="article-list" v-if="seeData.length">
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

export default {
    name: "guardian-article-list",
    props: ["seeData"],
    components: {
        "guardian-article-list-item": GuardianArticleListItem
    }
};
</script>

<style>

</style>