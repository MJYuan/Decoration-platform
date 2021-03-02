<template>
	<div>
		<el-card class = "box-card">
			<div id = "pie" style="width: 600px;height:400px;"></div>
		</el-card>
	</div>
</template>

<script>
//import color from './color.js'
export default {
    name: 'Echarts',
	mounted() {
		this.myEcharts();
	},
    methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  //console.log(this.$echarts)
		  var myChart = this.$echarts.init(document.getElementById('pie'),'vintage');

		  // 指定图表的配置项和数据
		  var option = {
						title: {
						text: '原材料库存占比',
						left: 'center',
						textStyle:{
							color:'#5ab1ef',
						}
						},
						 color: ['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552'],
						legend: {
							top: 'bottom'
						},
						toolbox: {
							show: true,
							feature: {
								mark: {show: true},
								dataView: {show: false, readOnly: false},
								restore: {show: true},
								saveAsImage: {show: true}
							}
						},
						series: [
							{
								name: '面积模式',
								type: 'pie',
								radius: [50, 150],
								center: ['50%', '50%'],
								roseType: 'area',
								itemStyle: {
									borderRadius: 8
								},
								data: [
									{value: 40, name: '原料1'},
									{value: 38, name: '原料2'},
									{value: 32, name: '原料3'},
									{value: 30, name: '原料4'},
									{value: 28, name: '原料5'},
									{value: 26, name: '原料6'},
								]
							}
						]
					};

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
  }
}
</script>

<style lang="less" scoped>

</style>
