<template>
  <div class="page-changeCity">
    <el-row>
      <my-province />
    </el-row>
    <el-row>
      <my-hot title="热门城市 :" :list="hotList" />
    </el-row>
    <el-row>
      <my-hot title="最近访问 :" :list="rencentList" />
    </el-row>
    <el-row>
      <my-category />
    </el-row>
  </div>
</template>

<script>
import myProvince from '@/components/changeCity/province.vue'
import myHot from '@/components/changeCity/hot.vue'
import myCategory from '@/components/changeCity/category.vue'
import api from '@/api/index.js'

export default {
  components: {
    myProvince,
    myHot,
    myCategory
  },
  data () {
    return {
      hotList: [],
      rencentList: []
    }
  },
  created () {
    api.getHotCity().then(res => {
      this.hotList = res.data.data.map((item) => item.name);
    });
    api.getRecentCity().then(res => {
      this.rencentList = res.data.data.map((item) => item.name);
    })
  }
}
</script>

<style>

</style>
