<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <my-crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <my-category />
        </el-row>
        <el-row>
          <my-list />
        </el-row>
      </el-col>
      <el-col :span="5">
        map + fav
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myCrumbs from '@/components/products/crumbs.vue'
import myCategory from '@/components/products/category.vue'
import myList from '@/components/products/list.vue'

export default {
  components: {
    myCrumbs,
    myCategory,
    myList
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/products/index.scss';
</style>