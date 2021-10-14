<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item, i) in list" :key="i">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl class="m-category-section" v-for="(item, i) in cityGroup" :key="i">
      <dt>{{ i }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" 
          @click="changeCity(city)"
        >
          {{ city.name }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: {}
    }
  },
  created () {
    api.getCityList().then(res => {
      var obj = {};
      res.data.data.forEach((item, index) => {
        if(!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      })
      this.cityGroup = obj;
    })
  },
  methods: {
    changeCity (city) {
      this.$store.dispatch('setPosition', city);
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/changecity/category.scss';
</style>