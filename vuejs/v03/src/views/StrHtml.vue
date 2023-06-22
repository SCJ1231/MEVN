<template>
  <div>
    <h1>1. String 과 html</h1>
    <h3>String: {{ str }}</h3>
    <hr />
    <h3 v-html="str"></h3>  <!-- 화면에 html형식으로 뿌려준다. -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      str: '<span style="color:red">안녕 난 String 형식이야.</span>'
    }
  }
}
</script>
<style></style>
