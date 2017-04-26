/**
 * Created by song on 2017/4/18.
 */
function load()
{
    var line = echarts.init(document.getElementById('detail-information'))
    option = {
        title: {
            text: '病人住院费用影响因素分析'
        },
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['身份', '性质', '年龄', '性别', '年度工资', '医院等级', '住院天数',
                '药品费','起付线','报销比例','是否患有慢性病'],
                axisTick: {
                    alignWithLabel: true
                }

            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '60%',
                data:[ 1.29035702e-03,9.59865306e-03,2.73762671e-02,3.69479740e-03,
                    3.43484186e-02,9.02312532e-03,9.66740653e-02,7.57896260e-01,
                    1.42256510e-02,9.27248660e-03,6.74904590e-03]
            }
        ]
    };
      line.setOption(option);
      var line1= echarts.init(document.getElementById('detail-information1'))
      option1 = {
        title: {
            text: '病人住院费用病种影响因素分析'
        },
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['某些传染病和寄生虫病', '肿瘤', '血液和造血器官疾病以及某些涉及免疫机能的异常', '精神和行为障碍', '神经系统疾病','眼及附器疾病','耳和乳突疾病',
                    '循环系统疾病','呼吸系统疾病','消化系统疾病','皮肤和皮下组织疾病','骨胳肌肉系统和结缔组织疾病','泌尿生殖系统疾病','妊娠、分娩和产褥期','起源于围生期的某些疾病',
                    '先天性畸形、变形和染色体异常','症状、体征和异常的临床和化验结果','损伤、中毒和外因作用'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '60%',
                data:[1.27454587e-03,7.29707159e-03,2.79662383e-04, 2.47919472e-03,5.41730131e-04,
                    9.04913924e-04,5.53376169e-05,5.77539120e-03,2.00376772e-03, 1.08937181e-03,3.12088553e-03,0.00000000e+00, 1.31256826e-03,
                    1.72010832e-05,4.04970360e-06, 8.98459696e-05,1.13317813e-03, 2.47215688e-03]
            }
        ]
    };
    line1.setOption(option1);
}
