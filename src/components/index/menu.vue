<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item, i) in menuList" :key="i" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item, vi) in curDetail.items">
        <h4 :key="vi">{{ item.title }}</h4>
        <span v-for="(val, i) in item.items" :key="val + '_' + i">{{ val }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      curDetail: null,
      menuList: []
    }
  },
  created () {
    api.getMenuList().then(res => {
      this.menuList = res.data.data;
    })
  },
  methods: {
    menuEnter (item) {
      this.curDetail = item
    },
    menuLeave () {
      let self = this
      this.timer = setTimeout(() => {
        self.curDetail = null
      }, 300)
    },
    detailEnter () {
      clearTimeout(this.timer)
    },
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>
