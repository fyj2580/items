<template>
  <!-- 左边简介结构 -->
    <div class="left">
      <div class="conter">
        <div class="font">
          <p class="js1">JavaScript</p>
          <p>Vanilla JavaScript Example</p>
          <a href="#" class="source">Source</a>
        </div>
        <div class="introduce">
          <p>
            JavaScript® (often shortened to JS) is a lightweight, interpreted,
            object-oriented language with first-class functions, most known as
            the scripting language for Web pages, but used in many non-browser
            environments as well such as node.js or Apache CouchDB.
          </p>
        </div>
        <div class="js2"><a href="#">JavaScript</a></div>
        <p class="ifyou">
          If you have other helpful links to share, or find any of the links
          above no longer work, please <a>let us know</a>.
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Left'
}
</script>

<style scoped>
/* 左边简介样式 */
.left {
  margin: 8px;
  width: 300px;
  background-color: #fff;
  border-radius: 2%;
}

.conter {
  margin: 8px;
}

.font {
  text-align: left;
  padding-bottom: 20px;
  border-bottom: 1px dashed #bebebe;
}

.js1 {
  font-size: 26px;
  margin: 16px 0px;
}

.source {
  text-align: right;
}

.introduce {
  margin: 20px 0;
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 2%;
}

.introduce p {
  padding: 18px;
  text-align: left;
  font-size: 98%;
}

.js2 {
  text-align: right;
  padding-bottom: 20px;
}

.ifyou {
  border-top: 1px dashed #bebebe;
  font-size: 86%;
  padding: 18px;
  text-align: left;
}
</style>
