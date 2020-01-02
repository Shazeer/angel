function drawing(){
    var chart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: '响应式图表'
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom'
        },
        xAxis: {
            categories: ['苹果', '橘子', '香蕉'],
            labels: {
                x: -10
            }
        },
        yAxis: [{
            allowDecimals: true,
            title: {
                text: '检测次数(辆)'
            }
        },{
            allowDecimals: true,
            title: {
                text: '比率(%)'
            },
            labels: {
               format: '{value}'
            },  
            opposite: true
         }],
        series: [{
            name: '检测辆次',
            data: [1, 4, 3]
        }, {
            name: '检测车辆',
            data: [6, 4, 2]
        }, {
            name: '合格车辆',
            data: [8, 4, 3]
        },{
            name: '合格率',
            type: 'spline',
            yAxis: 1,
            dashStyle: 'shortdot',
            data: [7.0, 6.9, 9.5]
        },{
            name: '首检合格率',
            type: 'spline',
            yAxis: 1,
            dashStyle: 'shortdot',
            data: [5.0, 3.9, 6.5]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }
    });
}
