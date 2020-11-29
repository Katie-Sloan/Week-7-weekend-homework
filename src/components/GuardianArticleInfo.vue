<template>
  <div id="article-info-container">
      <guardian-header :title="article.webTitle" />
      <div id="article-info">
          <div id="article-text">
              <p><b>Web publication date: </b>{{article.webPublicationDate}}</p>
              <p><b>Url: </B>{{article.webUrl}}</p>
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