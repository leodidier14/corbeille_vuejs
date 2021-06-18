<template>
    <div>
        <p>{{sliderValue}}</p>
        <svg width="400" height="400">
            <g>
                <polygon :points="points" style="fill:purple; z-index : 999"></polygon>
                <circle cx="200" cy="200" r="160" fill="transparent" stroke="purple"></circle>
            </g>
        </svg>
        <v-slider
            max="100"
            class="slider"
            v-model="sliderValue"
        ></v-slider>
        <v-slider
            min="3"
            max="20"
            class="slider"
            v-model="number"
        ></v-slider>
    </div>
</template>

<script>
  export default {
    name : 'Poly',
    data() {
      return {
          sliderValue: 50,
          number : 5
      }
    },
    computed : {
        points : function(){
            var valuePoints = ''
            for(var i=0;  i<this.number; i++) {
                var point = valueToPoint(this.sliderValue, i , this.number)
                valuePoints += point.x + "," + point.y + " "
            }
            return valuePoints
        }
    }
  }

    function valueToPoint(value, index, total) {
        var x = 0
        var y = -value * 0.8
        var angle = ((Math.PI * 2) / total) * index
        var cos = Math.cos(angle)
        var sin = Math.sin(angle)
        var tx = x * cos - y * sin + 200
        var ty = x * sin + y * cos + 200
        return {
            x : tx,
            y : ty
        }
    }
</script>

<style scoped>
    .slider {
        width: 500px;
    }
</style>