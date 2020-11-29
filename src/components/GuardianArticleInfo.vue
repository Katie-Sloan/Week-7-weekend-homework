<template>
  <div>
      <guardian-header :title="article.webTitle" />
      <div>
          <p><b>Web publication date: </b>{{article.webPublicationDate}}</p>
          <p><b>Url: </b>{{article.webUrl}}</p>
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