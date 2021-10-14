<template>
   <div :class="['choose-wrap', disabled?'disabled':'']" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{ val }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showWrapperActive}">
        <p>{{ title }}</p>
        <div :class="['wrapper', className]">
          <div class="col" v-for="(listData, i) in renderList" :key="i">
            <span :class="{'mt-item': true,'active': item.name === val}"
              v-for="(item, i) in listData" :key="i"
              @click="changeVal(item)"
              >{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'val',
    'title',
    'list',
    'showWrapperActive',
    'disabled',
    'className'
  ],
  computed: {
    renderList: function () {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for(var i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  methods: {
    showWrapper (e) {
      e.stopPropagation()
      if (!this.disabled) {
        this.$emit('change_active', true);
      }
    },
    documentClick () {
      this.$emit('change_active', false)
    },
    changeVal (item) {
      this.$emit('change', item);
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/changeCity/select.scss';
</style>
