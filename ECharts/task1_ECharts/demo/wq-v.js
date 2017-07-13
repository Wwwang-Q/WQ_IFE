/**
 * Created by wangqi on 2017/4/21.
 */
var pics=document.querySelectorAll('.pic');
currentNodeList=[];

var a=document.createElement('div');
a.className='border lt';
var b=document.createElement('div');
b.className='border rt';
var c=document.createElement('div');
c.className='border lb';
var d=document.createElement('div');
d.className='border rb';

pics.forEach((pic)=>{
    var fragment=document.createDocumentFragment();
    currentNodeList.push(fragment);
    fragment.appendChild(a.cloneNode(true));
    fragment.appendChild(b.cloneNode(true));
    fragment.appendChild(c.cloneNode(true));
    fragment.appendChild(d.cloneNode(true));
    pic.parentNode.replaceChild(fragment,pic);
   // currentNodeList.pop(fragment);
   // pic.appendChild(fragment);
})
fragment=null;
/*----------仪表图 Gauge---------*/
var gaugedom1 = document.getElementById("Gauge1");
var gaugedom2 = document.getElementById("Gauge2");
var gaugedom3 = document.getElementById("Gauge3");
var Gauge1= echarts.init(gaugedom1);
var Gauge2= echarts.init(gaugedom2);
var Gauge3= echarts.init(gaugedom3);
var app = {};
GaugeOption = null;
GaugeOption = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        // feature: {
        //     restore: {},
        //     saveAsImage: {}
        // }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            radius:'75%',
            detail: {
                formatter:'{value}%',
                textStyle:{
                    fontSize:20,
                }
            },
            data: [{value: 50, name: '完成率'}]
        }
    ]
};
function initGauge() {
    Gauge1.setOption(GaugeOption, true);
    Gauge2.setOption(GaugeOption, true);
    Gauge3.setOption(GaugeOption, true);
}

initGauge();

setInterval(function () {
    GaugeOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    initGauge();
},2000);

/*----------------嵌套饼图 Pie----------------------------*/
var piedom = document.getElementById("pie");
var pieChart = echarts.init(piedom);
var app = {};
var PieOption = null;


PieOption = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        // data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};

if (PieOption && typeof PieOption === "object") {
    pieChart.setOption(PieOption, true);
}