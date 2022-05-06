<template >
  <v-row v-if="!loaded">
    <v-col 
      cols="12"
      xl="4"
      lg="4"
      v-for="type in Object.keys(dailySimpleRanks)"
      :key="type"
    >
      <rank-component 
        :type="type"
        :contents="dailySimpleRanks[type]" 
      />
    </v-col>    
  </v-row>
</template>

<script lang="ts">
import { IMarketRank } from '@/models/stock'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import RankComponent from '@/v2/components/rank/RankComponent.vue'

const StockStoreModule = namespace('StockStore')

@Component({
  components: {
    RankComponent
  }
})
export default class RankV2 extends Vue {
  @StockStoreModule.Action('getDailySimpleRanks')  
  private readonly getDailySimpleRanks!: () => Promise<void>

  @StockStoreModule.State('dailySimpleRanks')
  private dailySimpleRanks!: IMarketRank

  @StockStoreModule.State('dailySimpleRanksLoaded')
  private loaded!: boolean

  created () {
    this.getDailySimpleRanks().then(() => {
      console.log(this.dailySimpleRanks)
    })
  }
}
</script>