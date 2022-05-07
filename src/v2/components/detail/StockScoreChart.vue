<script lang="ts">
<<<<<<< HEAD
import { Component, Prop, Watch } from 'vue-property-decorator'

import { mixins, Doughnut, Radar } from 'vue-chartjs-typescript'
import { transparentize } from '@/mixins/tools'

import Vue from 'vue'
import Chart, { ChartData, ChartOptions } from 'chart.js'
import { ISimpleChartData } from '@/models/stock'

const { reactiveProp } = mixins

=======
import Vue from 'vue'
import Chart from 'chart.js'
import { Component, Prop } from 'vue-property-decorator'
import { mixins, Radar } from 'vue-chartjs-typescript'

import { transparentize } from '@/mixins/tools'
import { ISimpleChartData } from '@/models/stock'

const { reactiveProp } = mixins
>>>>>>> v2
const MAIN_COLOR = '#40E0D0'

@Component({
  extends: Radar,
  mixins: [reactiveProp],
})
export default class StockScoreChart extends Vue {
  
  @Prop({default: {}})
<<<<<<< HEAD
  private chartData!: ISimpleChartData

  public renderChart!: (chartData: any, options: any) => any    

  public chartOptions: Chart.ChartOptions = {}

  private applyDefaultOptions() {
=======
  chartData!: ISimpleChartData

  chartOptions: Chart.ChartOptions = {}

  renderChart!: (chartData: any, options: any) => any    

  applyDefaultOptions() {
>>>>>>> v2

    this.chartOptions.responsive = true
    this.chartOptions.legend = {
      display: false,      
    }
<<<<<<< HEAD


=======
>>>>>>> v2
    this.chartOptions.animation = {
      duration: 1000,
      easing: 'easeOutBounce'
    }
<<<<<<< HEAD

=======
>>>>>>> v2
    this.chartOptions.scale = {
      gridLines: {
        color: this.$vuetify.theme.dark ? transparentize('#fff', 0.9) : 'grey',   
        lineWidth: 1     
      },
      ticks: {
        display: false,
        stepSize: 500000
      },
      pointLabels: {
        fontSize: 20,        
      }
    }

    this.chartOptions.tooltips = {            
      enabled: true,
      titleFontSize: 25,
      titleFontColor: MAIN_COLOR,
      bodyFontSize: 10,
      cornerRadius: 10,
      displayColors: false,      
      intersect: false
      }          
  }
<<<<<<< HEAD

  public createChartData () {            
=======
  
  createChartData () {            
>>>>>>> v2
    return {
      labels: ['eps', 'bps', 'roe'],
      datasets: [ 
        { 
          label: this.$route.params.title,
          data: [
            this.chartData?.eps.value[0],
            this.chartData?.bps.value[0]/100,
            this.chartData?.roe.value[0],
          ],          
          borderColor: MAIN_COLOR,
          borderWidth: 2,
          backgroundColor: transparentize(MAIN_COLOR, 0.8),
          lineColor: '#fff'
        },
      ],          
    }
  }
<<<<<<< HEAD

  public renderLineChart() {
    this.applyDefaultOptions()
    this.renderChart(this.createChartData(), this.chartOptions)    
  }

=======
  renderLineChart() {
    this.applyDefaultOptions()
    this.renderChart(this.createChartData(), this.chartOptions)    
  }
>>>>>>> v2
  mounted() {        
    this.renderLineChart()
  }    
}
<<<<<<< HEAD
</script>
=======
</script> 
>>>>>>> v2
