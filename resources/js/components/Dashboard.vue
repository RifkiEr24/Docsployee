<template>
<div>
    <div class="row mt-4">
        <div class="col-md-4 ">
            <div class="bg-white p-4 rounded-lg">
                <span class="fa-stack fa-lg float-left">
                <i class="fa fa-circle text-danger fa-stack-2x"></i>
                <i class="far fa-envelope-open fa-stack-1x text-white"></i>
                </span>
                <p class="float-center">125 Notification</p>
            </div>
        </div>
          <div class="col-md-4 ">
            <div class="bg-white p-4 rounded-lg">
                <span class="fa-stack fa-lg float-left">
                <i class="fa fa-circle text-info fa-stack-2x"></i>
                <i class="fas fa-users fa-stack-1x text-white"></i>
                </span>
                <p class="float-center">20 Employee</p>
            </div>
        </div>
        <div class="col-md-4 ">
            <div class="bg-white p-4 rounded-lg">
                <span class="fa-stack fa-lg float-left">
                <i class="fa fa-circle text-primary fa-stack-2x"></i>
                <i class="fas fa-tasks fa-stack-1x text-white"></i>
                </span>
                <p class="float-center">12 Task</p>
            </div>
        </div>
    </div>
    <div class="row mt-5">
         <div class="col-md-4 ">
            <div class="bg-white p-4 rounded-lg">
                 <line-chart :chart-data="datacollection"></line-chart>
            </div>
        </div>
          <div class="col-md-4 ">
            <div class="bg-white p-4 rounded-lg">
               <bar-chart :chart-data="dataBar"></bar-chart>
            </div>
        </div>
        <div class="col-md-4 ">
            <div class="bg-white p-4 rounded-lg">
                 <pie-chart :chart-data="dataPie"></pie-chart>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import  LineChart  from './../chart/LineChart.js'
import  BarChart  from './../chart/BarChart.js'
import  PieChart  from './../chart/PieChart.js'
export default {
   components: {
      LineChart,
      BarChart,
      PieChart
    },
   data () {
      return {
        datacollection: {labels: ['a', 'b'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [2, 8]
            }, {
              label: 'Data Two',
              backgroundColor: '#f87238',
              data: [4, 5]
            }
          ]
        },
        dataBar: {labels: ['January','Bulan Naon we'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [7,4]
            }, {
              label: 'Data Two',
              backgroundColor: '#f81291',
              data: [3,6]
            }
          ]
        },
         dataPie: {labels: ['January','Bulan Naon we'],
          datasets: [
            {
              label: 'January',
              backgroundColor: '#f87979',
              data: [7]
            }, {
              label: 'Bulan Naon we',
              backgroundColor: '#f81291',
              data: [3]
            }
          ]
        }
      }
    },
  mounted () {
    this.renderChart(data, options)
  }
}
</script>