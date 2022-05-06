<template>
  <div>
    <v-row>
      <v-col cols="12" xl="4" lg="4">        
        <stock-info :key="componentKey+1"/>        
        <stock-score :key="componentKey+2"/>
        <stock-news :key="componentKey+5"/>
      </v-col>    
      <v-col cols="12" xl="8" lg="8">
        <stock-chart :key="componentKey+3" />
        <stock-finance :key="componentKey+4" />        
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import StockInfo from '@/v2/components/detail/StockInfo.vue'
import StockChart from '@/v2/components/detail/Stock.vue'
import StockFinance from '@/v2/components/detail/StockFinance.vue'
import StockNews from '@/v2/components/detail/StockNews.vue'
import StockScore from '@/v2/components/detail/StockScore.vue'

@Component({
  components: {
    StockInfo,
    StockChart,
    StockFinance,
    StockNews,
    StockScore
  }
})
export default class DetailV2 extends Vue { 

  private componentKey = 1

  private forceRender() {
    this.componentKey += 1
  }

  @Watch('$route')
  private watchRoute() {
    this.forceRender()
  }

}
</script>