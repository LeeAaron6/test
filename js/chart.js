'use strict';

/* Controllers */


// function MyCtrl1() {}
// MyCtrl1.$inject = [];


// function MyCtrl2() {
// }
// MyCtrl2.$inject = [];

   angular.module('app')
              .controller('companyCtrl',  ['$scope','$http',function($scope,$http){
              
      

                    var dom = $("#container0")[0];
                    var myChart = echarts.init(dom);
                    var app = {};
                    var option = null;
                    option = {
                            backgroundColor: '#ffffff',//背景色
                        title: {
                            text: '要素分类比例图',
                            left: '20px',
                            top:'30px',

                            textStyle: {"fontSize": 16,"fontWeight": "500","color": "#333"} 
                        },
                        tooltip : {
                            trigger: 'item',
                            showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                            hideDelay: 500,            // 隐藏延迟，单位ms
                            transitionDuration : 0.4,  // 动画变换时间，单位s
                            formatter: "{b}: {c}(亿) ({d}%)<br>今日增量：0<br>最近7日增量：0<br>最近一个月增量：0<br>",
                        },
                  
                        color: ['lightblue','rgb(252,157,154)','rgb(249,205,173)','rgb(200,200,169)','rgb(131,175,155)'],
                        legend: {
                            orient: 'vertical', 
                        
                            top: '70px',
                            bottom: 10,
                            left: '20px',
                            data: ['人', '地','物','组织','事']
                        },
                        series : [
                            {
                                type: 'pie',
                                radius : '60%',
                                center: ['60%', '50%'],
                                hoverAnimation:false,
                                selectedMode: 'single',
                                data:[
                                    { value:11.216, name: '人'},
                                    {value:5.793, name: '地'},
                                    {value:4.724, name: '物'},
                                    {value:6.100, name: '组织'},
                                    {value:2.619, name: '事'}
                                ],
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    },
                                    normal:{ 
                                          label:{ 
                                              show: true, 
                                              //formatter: '{b} : {c} ({d}%)' 
                                              // formatter: "{b} : {c} 亿元\n{d}%
                                               formatter: "{b}\n{d}%"
                                          }, 
                                          labelLine :{show:true} 
                                      } 
                                }
                            }
                        ]
                    };
                    if (option && typeof option === "object") {
                        myChart.setOption(option, true)
                    }

                    var domt = document.getElementById("container");
                    var myChart = echarts.init(domt);
                    var app = {};
                    // option = null;
                    option = {
                          backgroundColor: '#ffffff',//背景色
                           grid: {
                                width:"86%",
                                height:"75%",
                                top:"65px"
                                // left: '2%',
                                // right: '0.5%',
                                // bottom: '3%',
                                // containLabel: true
                                },
                      title: {

                            text: '数据增量统计',
                            left: '20px',
                            top:'10px',
                            textStyle: {"fontSize": 16,"fontWeight": "500","color": "#333","width":"13000px"} ,
                            subtext:'统计最近30天数据增量',

                        },
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['省厅数据','地市数据','所有数据'],
                             top: '20px'
                        },
                        calculable : true,
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                data : ['2017/11/3','2017/11/9','2017/11/15','2017/11/19','2017/11/23','2017/11/25','2017/11/30']

                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [ 
                            {  
                                name:'省厅数据',
                                type:'line',
                                cursor: 'pointer',
                                top:'100px',
                                // stack: '总量',
                                data:[20, 32, 51, 34, 70, 30, 10],
                                itemStyle:{
                                  normal:{
                                      color: "#F60" //图标颜色
                                  }
                              },
                              // lineStyle:{
                              //     normal:{
                              //         width:10,  //连线粗细
                              //         color: "#0F0"  //连线颜色
                              //     }
                              // }
                            },
                            {
                                name:'地市数据',
                                type:'line',
                                // stack: '总量',
                                data:[30, 22, 31, 34, 90, 50, 40]
                            },
                            {
                                name:'所有数据',
                                type:'line',
                                data:[50, 54, 82, 68, 160, 80, 50]
                            }
                        ]
                    };
                          if (option && typeof option === "object") {
                        myChart.setOption(option, true);
                    }     

       }]);
    