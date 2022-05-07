<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
<<<<<<< HEAD
import { transparentize } from '@/mixins/tools'
=======
>>>>>>> v2

import Chart from 'chart.js'
import { mixins, Bar } from 'vue-chartjs-typescript'

<<<<<<< HEAD
=======
import { transparentize } from '@/mixins/tools'
>>>>>>> v2
import { IStockStatementBarChartModel } from '@/models/stock'

const { reactiveProp } = mixins

const MAIN_COLOR = '#40E0D0'

@Component({
  extends: Bar,
  mixins: [reactiveProp]
})
export default class StockFinanceChart extends Vue {

  @Prop()
  type!: string
  
  chartData!: IStockStatementBarChartModel
  chartOptions: Chart.ChartOptions = {}

<<<<<<< HEAD
    @Prop()
    private type!: string

    private chartData!: IStockStatementBarChartModel

    public applyDefaultOptions (): void {

    this.chartOptions.maintainAspectRatio = true
    this.chartOptions.responsive = true
    this.chartOptions.legend = {
      display: false
    }

    this.chartOptions.scales = {
      xAxes: [{
        gridLines: {
          display: false,
          zeroLineColor: '#fff'
        },
        ticks: {
          fontSize: 30,
        },
        scaleLabel: {
          fontSize: 20
        }
      }],
      yAxes: [{
        ticks: {
          display: false,
          fontSize: 20,       
          maxTicksLimit: 2   
        },
        gridLines: {
          display: true,        
          circular: false,  
          zeroLineWidth: 2,
        },      

      }], 
    }

    this.chartOptions.animation = {
      duration: 800,
      easing: 'easeOutQuad'
    }
    
    this.chartOptions.tooltips = {
      enabled: true,
      titleFontSize: 25,
      titleFontColor: MAIN_COLOR,
      bodyFontSize: 40,
      cornerRadius: 10,
      displayColors: false,      
    }  
  }
=======
  applyDefaultOptions() {
    this.chartOptions.maintainAspectRatio = true
    this.chartOptions.responsive = true
    
    this.chartOptions.legend = {
      display: false
    }
      this.chartOptions.scales = {
      xAxes: [{
        gridLines: {
          display: false,
          zeroLineColor: '#fff'
        },
        ticks: {
          fontSize: 30,
        },
        scaleLabel: {
          fontSize: 20
        }
      }],
      yAxes: [{
        ticks: {
          display: false,
          fontSize: 20,       
          maxTicksLimit: 2   
        },
        gridLines: {
          display: true,        
          circular: false,  
          zeroLineWidth: 2,
        },      
      }], 
    }
    this.chartOptions.animation = {
      duration: 800,
      easing: 'easeOutQuad'
    }
    
    this.chartOptions.tooltips = {
      enabled: true,
      titleFontSize: 25,
      titleFontColor: MAIN_COLOR,
      bodyFontSize: 40,
      cornerRadius: 10,
      displayColors: false,      
    }  
  }

>>>>>>> v2

  createChartData() {
    return {
      labels: [...this.chartData.date].reverse(),
      datasets: [
        {
          data : [...this.chartData.value].reverse().map((value: number) => value / 10000000),
          fill: true,
          borderColor: MAIN_COLOR,        
          backgroundColor: transparentize(MAIN_COLOR, 0.5),
          borderWidth: 6,
          radius: 4,
          pointStyple: 'rectRounded',
          tension: .4,     
          minBarLength: 50,
          maxBarLength: 150
        }
      ]
<<<<<<< HEAD
    }
=======
    }    
>>>>>>> v2
  }

  renderChart!: (chartData: any, options: any) => any

  renderBarChart() {
    this.applyDefaultOptions()
    this.renderChart(this.createChartData(), this.chartOptions)
  }

  mounted () {
    this.renderBarChart()
  }
}

</script>