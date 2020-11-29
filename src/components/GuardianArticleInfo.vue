<template>
  <div id="article-info-container">
      <guardian-header :title="article.response.results.webTitle" />
      <div id="article-info">
          <div id="article-text">
              <p>{{article.response.results.webUrl}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import GuardianHeader from "@/components/GuardianHeader";

export default {
    props: ["article"],
    components: {
        "guardian-header": GuardianHeader
    }
}
</script>

<style>

</style>