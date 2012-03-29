var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container',
			type: 'spline',
			inverted: true,
			width: 500,
			style: {
				margin: '0 auto'
			}
		},
		title: {
			text: 'Atmosphere Temperature by Altitude'
		},
		subtitle: {
			text: 'According to the Standard Atmosphere Model'
		},
		xAxis: {
			reversed: false,
			title: {
				enabled: true,
				text: 'Altitude'
			},
			labels: {
				formatter: function() {
					return this.value +'km';
				}
			},
			maxPadding: 0.05,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: 'Temperature'
			},
			labels: {
				formatter: function() {
					return this.value + '°';
				}
			},
			lineWidth: 2
		},
		legend: {
			enabled: false
		},
		tooltip: {
			formatter: function() {
				return ''+
					this.x +' km: '+ this.y +'°C';
			}
		},
		plotOptions: {
			spline: {
				marker: {
					enable: false
				}
			}
		},
		series: [{
			name: 'Temperature',
			data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
				[50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
		}]
	});
});
