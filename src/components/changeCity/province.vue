<template>
  <div class="province">
    <span class="name">按省份选择: </span>
    <my-select :list="provinceList" :val="province" title="省份" 
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince" 
      className="province"
    />
    <my-select :list="cityList" 
      :val="city" title="城市" 
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜索:</span>
    <el-select
    v-model="searchWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in searchList"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import mySelect from './select.vue'
import api from '@/api/index.js'
export default {
  data () {
    return {
      province: '省份',
      provinceList: [],
      cityList: [],
      city: '城市',
      provinceActive: false,
      cityActive: false,
      searchList: ['合肥', '滁州', '铜陵', '马鞍山'],
      searchWord: '',
      loading: false,
      cityDisabled: true

    }
  },
  components: {
    mySelect
  },
  created () {
    api.getProvince().then(res => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      })
    })
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity(item) {
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'});
    },
    remoteMethod (val) {
      //远程获取,请求接口
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/changeCity/iselect.scss';
</style>
