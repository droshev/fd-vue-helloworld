<template>
  <div class="hello">
   Hey there!
  </div>
</template>

<script>
import TsxComponent from '@/vue-tsx';
import { Button } from '../../node_modules/fundamental-vue/src/components/Button/Button.tsx'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
