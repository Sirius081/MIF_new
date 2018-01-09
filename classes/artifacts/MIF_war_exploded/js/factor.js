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
                '药品费','诊疗费','床位费','手术费','护理费','材料费','起付线','报销比例','是否患有慢性病'],
                axisTick: {
                    alignWithLabel: true
                }

            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '60%',
                data:[ 8.65675876e-04,1.35829991e-03,5.34874725e-03,   4.97270045e-04,
                    4.32461890e-03,   6.69904847e-03,1.21301687e-02,   2.52611036e-01,
                    6.76757847e-01,   4.96500198e-03,   2.45112320e-03, 1.11785142e-02,   8.65969280e-03,7.99563889e-03,   1.68977107e-03,   5.16751621e-04
                ]
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
                data:[1.37930262e-04,
                    2.79477945e-04,   2.81262383e-05,   1.45953382e-05 ,  5.67413405e-05,
                    6.01698615e-05,   3.53561242e-06,   2.84165138e-04 ,  2.39393368e-04,
                    1.53145069e-04,   2.24862838e-04,   0.00000000e+00,   1.14587832e-04,
                    1.37650685e-06,   1.52793048e-07,   1.70938861e-05,   6.76118038e-05,
                    2.67827871e-04]
            }
        ]
    };
    line1.setOption(option1);
}