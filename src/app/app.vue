<template>
  <h3>{{ name }}</h3>
  <div v-if="visible">隐藏的内容！</div>
  <button @click="visible = !visible">{{ visible ? '隐藏' : '显示' }}</button>
</template>


<script>
export default {
  data() {
    return {
      name: '宁皓网',
      visible: false,
    };
  },
};
</script>
<style scoped>
button {
  margin: 4px;
}
</style>