<template>
  <div class="home">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  created() {
    axios.post('/tour-product/imge/getUrl').then(res => {
      console.log(res)
    })
    axios({
      url: '/tour-product/sysProduct/queryProductList',
      method: 'OPTIONS',
      data: {
        pageNum: 1,
        pageSize: 10
      },
      headers: {
        token: 'TG5SUFlmbTJZQWQzc2FqdVpGSXpIU1hXRzhJTVZ5OFVHb2VNSkRHQnlHWHpWL0ZjN3ZINDVyeXJRTTR4RWdkMitHVDhiSkJsU25HTHFEUmNHUjJ5bnAxS0t1NWxuekozTGJML3Z6dEQ2ZDA9'
      }
    }).then(res => {
      console.log(res)
    })
    axios({
      url: '/tour-product/comp/scenic/scenicJoinList',
      method: 'OPTIONS',
      data: {
        pageNum: 1,
        pageSize: 10,
        scenicId: 942847173206605824
      },
      headers: {
        token: 'TG5SUFlmbTJZQWQzc2FqdVpGSXpIU1hXRzhJTVZ5OFVHb2VNSkRHQnlHWHpWL0ZjN3ZINDVyeXJRTTR4RWdkMitHVDhiSkJsU25HTHFEUmNHUjJ5bnAxS0t1NWxuekozTGJML3Z6dEQ2ZDA9'
      }
    }).then(res => {
      console.log(res)
    })
    // axios({
    //   url: '/tour-product/comp/scenic/scenicJoinList',
    //   method: 'POST',
    //   params: {
    //     pageNum: 1,
    //     pageSize: 10,
    //     scenicId: '799648908592939008'
    //   },
    //   headers: {
    //     token: 'TG5SUFlmbTJZQWQzc2FqdVpGSXpIU1hXRzhJTVZ5OFVHb2VNSkRHQnlHWHpWL0ZjN3ZINDVyeXJRTTR4RWdkMitHVDhiSkJsU25HTHFEUmNHUjJ5bnAxS0t1NWxuekozTGJML3Z6dEQ2ZDA9'
    //   }
    // }).then(res => {
    //   console.log(res)
    // })
  }
}
</script>
