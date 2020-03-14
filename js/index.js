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
// import { stat, exists, readFile } from 'layui/layui';
function indexCharts(){
    var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, ' +
        'quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, ' +
        'rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, ' +
        'sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, ' +
        'eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, ' +
        'vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, ' +
        'sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, ' +
        'maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
    // 注意：这里的代码只是对上面的句子进行分词并计算权重（重复次数）并构建词云图需要的数据，其中 arr.find 和
    // 	reduce 函数可能在低版本 IE 中无法使用（属于ES6新增的函数），如果不能正常使用（对应的函数有报错），请自行加相应的 Polyfill
    //  array.find 的 ployfill 参见：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill
    // 	array.reduce 的 ployfill ：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Polyfill
    var data = text.split(/[,\. ]+/g)
        .reduce(function (arr, word) {
            var obj = arr.find(function (obj) {
                return obj.name === word;
            });
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);
    Highcharts.chart('container', {
        series: [{
            type: 'wordcloud',
            data: data
        }],
        title: {
            text: '词云图'
        }
    });
}

