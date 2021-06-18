<template>
    <div>
        <VueApexCharts
            type="line"
            height="350"
            ref="chart"
            :options="chartOptions"
            :series="series"
        >

        </VueApexCharts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts"

  export default {
    name : 'Graph',
    components : {
        VueApexCharts
    },
    data() {
      return {
          series : [
              {
                  name: "Infos",
                  data : [1,5,6,78,2,6]
              }
          ],
          chartOptions : {

          }
      }
    }
  }
</script>