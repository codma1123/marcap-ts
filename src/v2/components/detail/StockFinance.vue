<template>
<<<<<<< HEAD
  <v-card 
    v-if="!loaded"
    class="mt-5 ml-5"
    rounded="xl"
    outlined
    height="360"
    width="94%"
  >
    <v-carousel 
      hide-delimiter-background
      hide-delimiters
      show-arrows-on-hover
      height="100%"
      cycle
      v-model="model"
      interval="10000"
    >
      <v-carousel-item 
        v-for="(type, index) in statementTypes"
        :key="index"
      >
        <div class="text-center text-h4 mt-5 mb-5">
          {{ type.toUpperCase() }}
        </div>
        <stock-finance-chart     
          class="ml-5 mr-5"                                    
          :chartData="statement[type]"              
          :type="type"
          :height="height > 500 ? 100 : 180 "
        />              
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { mobileHeight } from '@/mixins/tools'
=======
  <div>
    <v-card 
      v-show="!loaded"
      class="mt-5 ml-5"
      rounded="xl"
      outlined
      height="360"
      width="94%"
    >
      <v-carousel 
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        height="100%"
        cycle
        v-model="model"
        interval="10000"
      >
        <v-carousel-item 
          v-for="(type, index) in statementTypes"
          :key="index"
        >
          <div class="text-center text-h4 mt-5 mb-5">
            {{ type.toUpperCase() }}
          </div>
          <stock-finance-chart
            class="ml-5 mr-5"
            :chartData="statement[type]"
            :type="type"
            :height="height > 500 ? 100 : 180"
          />

        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { mobileHeight } from '@/mixins/tools'

import StockFinanceChart from '@/v2/components/detail/StockFinanceChart.vue'
import { ISimpleChartData } from '@/models/stock'
>>>>>>> v2

import StockFinanceChart from '@/v2/components/detail/StockFinanceChart.vue'

const StockStoreModule = namespace('StockStore')


@Component({
  components: {
    StockFinanceChart
  }
})
export default class StockFinance extends Vue {

  model = 0

  @StockStoreModule.State('statement')
<<<<<<< HEAD
  private statement!: any
=======
  statement!: ISimpleChartData

  @StockStoreModule.State('statementTypes')
  statementTypes!: string[]
>>>>>>> v2

  @StockStoreModule.State('statementTypes')
  private statementTypes!: string[]
  
  @StockStoreModule.State('statementLoaded')
  loaded!: boolean

  @StockStoreModule.State('statementAllLoaded')
  loadedAll!: boolean

  @StockStoreModule.State('statementAllLoaded')
  private loadedAll!: boolean

  @StockStoreModule.Action('getStockStatement')
<<<<<<< HEAD
  private readonly getStockStatement!: (name: string) => Promise<void>

  @StockStoreModule.Action('getStockStatementAll')
  private readonly getStockStatementAll!: (name: string) => Promise<void>

  @StockStoreModule.Action('getStockStatementAll')
  private readonly getStocStatementAll!: (name: string) => Promise<void>
=======
  readonly getStockStatement!: (name: string) => Promise<void>

  @StockStoreModule.Action('getStockStatementAll')
  readonly getStockStatementAll!: (name: string) => Promise<void>
>>>>>>> v2

  get height () {
    return mobileHeight(this.$vuetify.breakpoint.name)
  }
<<<<<<< HEAD


  created() {    
    const title = this.$route.params.title

    this.getStockStatement(title).then(() => {
      this.getStockStatementAll(title)
    })    
=======
  
  created() {        
    const title = this.$route.params.title

    this.getStockStatement(title).then(() => {
      this.getStockStatementAll(title)
    })
>>>>>>> v2
  }
}

</script>