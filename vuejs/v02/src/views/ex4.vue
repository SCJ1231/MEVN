<template>
  <div>
    <button v-for="p in pages" :key="p" @click="page = p">
      {{ p }}
    </button>
    <div>
      <div v-for="(g, i) in pages" :key="i">
        <img v-if="g === page" :src="'./sample' + (i + 1) + '.jpg'" alt="사진" />
        <!-- 이미지를 public폴더에 넣으면 바로 경로를 정해 화면에 나오게 한다. -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  }
}
</script>
<style>
button {
  scale: 110%;
  background-color: #fff;
  border: 1px solid gray;
  margin: 30px;
  cursor: pointer;
}

button:hover {
  background-color: #dff444;
}

button:active {
  color: #fff;
  background-color: #380d58;
}
</style>
