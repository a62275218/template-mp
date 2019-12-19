<template>
  <div class="page">
    {{userInfo.name}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  async mounted(){
    console.log('mounted')
    
    const api = await this.$request('api')
    
  },
  computed:mapState([
    'userInfo'
  ]),

  components: {
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
</style>
