import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tabs = ['界别委员名单', '街道委员小组委员名单', '专委会分组委员名单'];

// ===================== 真实数据（来源：data/1.委员之家 Excel）=====================
const jiebieMembers = [
  { jiebei: '中共界别', displayName: '中共界别', members: [
    { name: '孙国方', party: '中共', unit: '区政协党组书记' },
    { name: '黄爱芳', party: '中共', unit: '区政协原党组书记、主席' },
    { name: '叶榕', party: '中共', unit: '区政协副书记、副主席' },
    { name: '范国良', party: '中共', unit: '区政协党组成员、副主席' },
    { name: '王良约', party: '中共', unit: '区政协党组成员、秘书长' },
    { name: '方蔚军', party: '中共', unit: '区政协提案委主任' },
    { name: '许康波', party: '中共', unit: '区司法局党委书记' },
    { name: '许国伟', party: '中共', unit: '区政协社会法制和港澳台侨委员会主任' },
    { name: '潘丽华', party: '中共', unit: '区政协经济科技委员会主任' },
    { name: '王早晖', party: '中共', unit: '区纪委副书记、区监委副主任' },
    { name: '俞宁', party: '中共', unit: '上城区政府办公室党组成员、副主任' },
    { name: '陆峰', party: '中共', unit: '区政协文史和教文卫体委员会主任' },
    { name: '付选央', party: '中共', unit: '区政协城建和人口资源环境委员会主任' },
    { name: '瞿伟', party: '中共', unit: '区政协委员工作委员会主任' },
    { name: '张剑峰', party: '中共', unit: '杭州市公安局上城区分局政委' },
    { name: '陈一春', party: '中共', unit: '区委统战部常务副部长' },
    { name: '张健', party: '中共', unit: '区委组织部副部长' },
    { name: '蓝炜铭', party: '中共', unit: '上城区人武部中效副部长' },
    { name: '鲍一鹏', party: '中共', unit: '上城区法院党组副书记' },
    { name: '赵韵红', party: '中共', unit: '区政协办公室主任' },
    { name: '何亮', party: '中共', unit: '区检察院党组副书记、常务副检察长' },
  ]},
  { jiebei: '无党派界别', displayName: '无党派界别', members: [
    { name: '陈贺梅', party: '无党派', unit: '浙江泽大律师事务所高级合伙人' },
    { name: '罗旭峰', party: '无党派', unit: '南华期货股份有限公司总经理' },
    { name: '姚娅琼', party: '民进', unit: '杭州特美刻实业有限公司常务副总' },
    { name: '刘元凯', party: '群众', unit: '浙江威龙葡萄酒销售有限公司总经理' },
    { name: '施俞刚', party: '无党派', unit: '杭州花中城餐饮食品集团有限公司董事长' },
    { name: '韩霄波', party: '无党派', unit: '杭州全要素科技服务有限公司董事长' },
    { name: '俞仲凯', party: '无党派', unit: '杭州临空示范区管委会财务部副部长' },
    { name: '凌栋', party: '无党派', unit: '杭州康奈集团有限公司副总裁' },
    { name: '吴大为', party: '无党派', unit: '浙江省政协委员' },
    { name: '骆鉴湖', party: '无党派', unit: '浙江理工大学教授' },
    { name: '梁中跃', party: '无党派', unit: '浙江大学教授' },
    { name: '郑建华', party: '无党派', unit: '浙江大学医学院附属妇产科医院教授' },
    { name: '陈磊', party: '无党派', unit: '浙江大学医学院附属儿童医院教授' },
    { name: '张文华', party: '无党派', unit: '浙江省人民医院教授' },
    { name: '李国平', party: '无党派', unit: '浙江大学教授' },
    { name: '王晓芳', party: '无党派', unit: '浙江工业大学教授' },
    { name: '马晓晖', party: '无党派', unit: '浙江中医药大学教授' },
    { name: '徐建国', party: '无党派', unit: '浙江省中医院教授' },
    { name: '杨冬强', party: '无党派', unit: '杭州华塑科技股份有限公司董事长' },
  ]},
  { jiebei: '共青团、青联界别', displayName: '共青团、青联界别', members: [
    { name: '郑斐尹', party: '中共', unit: '团区委副书记' },
    { name: '张含', party: '无党派', unit: '杭州嘉华园林景观工程有限公司法人代表' },
    { name: '陈蕴涵', party: '中共', unit: '杭州胡庆余堂国药号有限公司董事长' },
    { name: '叶青青', party: '民革', unit: '杭州市实验外国语学校教师' },
    { name: '谢小龙', party: '中共', unit: '杭州市西湖区人才服务中心' },
    { name: '陈思远', party: '民盟', unit: '浙江工业大学副教授' },
    { name: '沈志峰', party: '中共', unit: '杭州市上城区青年联合会秘书长' },
    { name: '程晓燕', party: '九三学社', unit: '杭州市第一人民医院副主任医师' },
    { name: '叶晨', party: '中共', unit: '杭州市青年联合会' },
    { name: '冯敏', party: '群众', unit: '杭州如涵文化传播有限公司董事长' },
    { name: '方晓丽', party: '民建', unit: '浙江喻晓网络科技有限公司董事长' },
    { name: '裘琦箐', party: '九三学社', unit: '杭州捷尔思阻燃化工有限公司董事长助理' },
    { name: '龚云玉', party: '中共', unit: '桃源茶庄业主' },
    { name: '高艳霞', party: '民革', unit: '上城区丁兰街道办事处妇联主席' },
    { name: '斯梦龙', party: '农工党', unit: '龙元建设集团股份有限公司副总裁' },
    { name: '余向平', party: '中共', unit: '中共上城区委宣传部常务副部长' },
    { name: '沈洁', party: '无党派', unit: '杭州花糖品牌管理有限公司总经理' },
    { name: '焦国平', party: '中共', unit: '浙江电联通信机房工程技术有限公司副总经理' },
    { name: '朱剑文', party: '中共', unit: '北京德恒（杭州）律师事务所管委会主任' },
  ]},
  { jiebei: '工会界别', displayName: '工会界别', members: [
    { name: '蔡肇颖', party: '中共', unit: '上城区总工会党组书记、主席' },
    { name: '朱嫣红', party: '无党派', unit: '杭州金星铜集团有限公司工艺美术师' },
    { name: '涂小莉', party: '九三学社', unit: '杭州电子科技大学副教授' },
    { name: '杜向群', party: '中共', unit: '区总工会副主席' },
    { name: '张金华', party: '中共', unit: '杭州市总工会干部' },
    { name: '王丽娟', party: '民进', unit: '杭州市第四人民医院护士长' },
    { name: '陈建军', party: '中共', unit: '杭州电力设备制造有限公司副总' },
    { name: '刘文晓', party: '中共', unit: '杭州市上城区劳动人事争议仲裁院院长' },
  ]},
  { jiebei: '妇联界别', displayName: '妇联界别', members: [
    { name: '沈飞燕', party: '中共', unit: '区妇联党组书记、主席' },
    { name: '葛佳轩', party: '民建', unit: '杭州道千餐饮管理有限公司总经理' },
    { name: '杨洁', party: '中共', unit: '杭州洁莹旅游用品有限公司总经理' },
    { name: '高艳', party: '民革', unit: '浙江大学第一附属医院副主任医师' },
    { name: '赵美华', party: '中共', unit: '杭州市上城区妇幼保健院院长' },
    { name: '钱晓丽', party: '民盟', unit: '浙江省人民医院主任医师' },
    { name: '孙晓红', party: '中共', unit: '杭州市商贸职业学校校长' },
    { name: '李晓燕', party: '农工党', unit: '浙江大学医学院附属第二医院主任医师' },
    { name: '王晓琴', party: '民进', unit: '杭州市教育局正处级干部' },
    { name: '陈晓玲', party: '九三学社', unit: '浙江工业大学教授' },
  ]},
  { jiebei: '工商联界别', displayName: '工商联界别', members: [
    { name: '毛雪波', party: '中共', unit: '区工商联党委书记、区总商会会长' },
    { name: '吴利泽', party: '民盟', unit: '浙浙江耀厦建设集团有限公司执行总裁' },
    { name: '苟佶明', party: '群众', unit: '杭州新丰小吃股份有限公司董事长' },
    { name: '张建华', party: '中共', unit: '杭州市工商联副主席' },
    { name: '王国强', party: '民建', unit: '杭州华润置地有限公司总经理' },
    { name: '李志远', party: '九三学社', unit: '浙江理工大学教授' },
    { name: '刘建国', party: '民盟', unit: '杭州市政协常委' },
    { name: '陈文明', party: '群众', unit: '杭州老板电器股份有限公司副总裁' },
    { name: '赵国华', party: '中共', unit: '浙江省工商联常委' },
    { name: '孙志明', party: '农工党', unit: '杭州市第一人民医院主任医师' },
    { name: '周国平', party: '中共', unit: '杭州市总商会副会长' },
  ]},
  { jiebei: '科技、科协界别', displayName: '科技、科协界别', members: [
    { name: '胡丽亚', party: '民建', unit: '上城区科技经信局局长' },
    { name: '金晓', party: '民革', unit: '杭州八脉科技有限公司工程师兼董事' },
    { name: '邹欢金', party: '中共', unit: '区科协主席' },
    { name: '黄晓煌', party: '无党派', unit: '杭州群核信息技术有限公司联合创始人兼董事长' },
    { name: '袁娜', party: '中共', unit: '杭州市上城区人众科普服务中心主任' },
    { name: '梅中鹤', party: '民盟', unit: '浙江广利工程咨询有限公司总工程师' },
    { name: '包良军', party: '无党派', unit: '杭州半岛净水设备有限公司董事长' },
    { name: '胡斌', party: '民建', unit: '北京盈科（杭州）律师事务所管委会副主任' },
    { name: '洪紫林', party: '群众', unit: '坚持我的服饰（杭州）股份有限公司董事长' },
    { name: '骆丁辉', party: '民建', unit: '浙江信联企业服务有限公司总经理' },
    { name: '聂建波', party: '民盟', unit: '国网浙江省电力有限公司高级工程师' },
    { name: '董岷', party: '中共', unit: '新阔投资公司总经理' },
    { name: '李晓华', party: '中共', unit: '杭州银行副行长' },
    { name: '王军', party: '无党派', unit: '毕马威企业咨询（中国）有限公司浙江省首席合伙人' },
    { name: '王晓婷', party: '中共', unit: '嘉悦物产集团有限公司董事长' },
  ]},
  { jiebei: '侨、台界别', displayName: '侨、台界别', members: [
    { name: '张正', party: '民盟', unit: '浙江音乐学院艺术处干事、大提琴老师' },
    { name: '陆雯', party: '中共', unit: '杭州聚梦启杭科技有限公司总经理' },
    { name: '王容峰', party: '致公党', unit: '杭州市政协委员' },
    { name: '胡晓敏', party: '民进', unit: '杭州山蜂书房文化有限公司总经理' },
    { name: '许利芳', party: '致公党', unit: '浙江工商大学教授' },
    { name: '何晓菲', party: '九三学社', unit: '杭州市上城区摄影家协会主席' },
    { name: '黄志强', party: '民进', unit: '杭州市侨联常委' },
    { name: '俞仲凯', party: '无党派', unit: '杭州临空示范区管委会财务部副部长' },
  ]},
  { jiebei: '新闻文体界别', displayName: '新闻文体界别', members: [
    { name: '叶萌', party: '民革', unit: '杭州金茂源工艺文化用品有限公司艺术总监' },
    { name: '沈乐平', party: '中共民盟', unit: '中国美院中国画与书法艺术学院副院长' },
    { name: '周媛媛', party: '中共', unit: '杭州市西湖国学馆执行馆长' },
    { name: '赵军', party: '九三学社', unit: '浙江浣花斋文化艺术发展有限公司执行董事' },
    { name: '俞富康', party: '群众', unit: '杭州文化艺术界联合会副主席' },
    { name: '屠明珏', party: '中共', unit: '上城区非物质文化遗产保护协会会长' },
    { name: '王容峰', party: '致公党', unit: '上城区书法家协会主席' },
    { name: '张仕权', party: '中共', unit: '杭州海兴电力科技股份有限公司总经理' },
  ]},
  { jiebei: '经济界别', displayName: '经济界别', members: [
    { name: '李伟达', party: '中共', unit: '浙商资产党委书记、董事长' },
    { name: '胡巍', party: '无党派', unit: '蜀海（北京）供应链管理有限责任公司副总经理' },
    { name: '黎洁', party: '中共', unit: '广宇集团党委副书记、董事' },
    { name: '陈建恩', party: '致公党', unit: '得力集团有限公司副总裁' },
    { name: '陈瑞贵', party: '中共', unit: '浙江电融数据技术有限公司董事长' },
    { name: '赵明', party: '民进', unit: '杭州莱凡网络科技有限公司董事长' },
    { name: '姜学英', party: '中共', unit: '杭州安旭生物科技股份有限公司副董事长' },
    { name: '聂世元', party: '无党派', unit: '浙江沸蓝信息发展有限公司副总经理' },
    { name: '聂明军', party: '中共', unit: '杭州柯林电气股份有限公司副总经理' },
    { name: '倪晓东', party: '中共', unit: '浙江东仁堂集团有限公司董事长' },
    { name: '高浪华', party: '无党派', unit: '高浪控股股份有限公司董事长' },
    { name: '董娜', party: '中共', unit: '东方电气长三角（杭州）创新研究院有限公司院长' },
    { name: '宋新民', party: '中共', unit: '浙江搜道网络技术有限公司董事长、CEO' },
  ]},
  { jiebei: '环境资源和农业界别', displayName: '环境资源和农业界别', members: [
    { name: '陈洁', party: '民建', unit: '杭州市住房保障和房产管理局二级调研员' },
    { name: '蒋骥', party: '无党派', unit: '浙江大学环境工程研究所教授' },
    { name: '应啸', party: '无党派', unit: '浙江大学建筑工程学院副教授' },
    { name: '熊义勤', party: '中共', unit: '上城区生态环境分局局长' },
    { name: '骆鉴湖', party: '无党派', unit: '浙江农林大学教授' },
    { name: '方俊平', party: '中共', unit: '采荷街道党工委书记' },
  ]},
  { jiebei: '教育界别', displayName: '教育界别', members: [
    { name: '王林慧', party: '民进', unit: '杭州市天长小学副校长' },
    { name: '杜缨', party: '农工党', unit: '杭州采荷第一小学教育集团副校长' },
    { name: '言妍', party: '民进', unit: '杭州市娃哈哈小学副校长' },
    { name: '周媛媛', party: '中共', unit: '杭州市西湖国学馆执行馆长' },
    { name: '王梦婷', party: '中共', unit: '杭州市第十三中学教师' },
    { name: '李国平', party: '无党派', unit: '浙江大学教授' },
    { name: '张培育', party: '民进', unit: '杭州市第三中学副校长' },
    { name: '陈教学', party: '九三学社', unit: '浙江理工大学教授' },
  ]},
  { jiebei: '医卫界别', displayName: '医卫界别', members: [
    { name: '吴桂萍', party: '农工党', unit: '深蓝口腔盈丰路分院院长' },
    { name: '张虹', party: '致公党', unit: '上城区湖滨街道社区卫生服务中心主任' },
    { name: '陈翔', party: '群众', unit: '杭州艺星医疗美容医院有限公司总经理' },
    { name: '谢慧淼', party: '中共', unit: '浙江大学医学院附属第二医院主任医师' },
    { name: '潘晓岑', party: '民革', unit: '杭州市妇产科医院副主任医师' },
    { name: '吴江达', party: '中共', unit: '杭州市中医院院长' },
    { name: '胡杭东', party: '农工党', unit: '浙江省人民医院副主任医师' },
    { name: '李祖胜', party: '中共', unit: '上城区九堡街道蓝桥卫生服务站站长' },
    { name: '吴大为', party: '无党派', unit: '浙江大学医学院附属第一医院教授' },
  ]},
  { jiebei: '社会福利和保障界别', displayName: '社会福利和保障界别', members: [
    { name: '吴国庆', party: '中共', unit: '上城区民政局局长' },
    { name: '余丹凤', party: '中共', unit: '上城区社会组织联合会会长' },
    { name: '尹兆青', party: '民革', unit: '浙江大成律师事务所律师' },
    { name: '冯新恩', party: '民进', unit: '杭州市社会福利中心主任' },
    { name: '刘相玉', party: '中共', unit: '上城区残联理事长' },
    { name: '江华平', party: '农工党', unit: '浙江省残疾人联合会干部' },
  ]},
  { jiebei: '民族、宗教界别', displayName: '民族、宗教界别', members: [
    { name: '孙雅国', party: '群众', unit: '杭州基督教鼓楼驻堂牧师' },
    { name: '杜永波', party: '群众', unit: '杭州市伊斯兰教协会副会长，杭州清真寺阿訇' },
    { name: '黄明科', party: '群众', unit: '杭州市天主教爱国会会长' },
    { name: '释念性', party: '群众', unit: '杭州市上城区佛教协会会长，龙居寺监院' },
    { name: '陈国华', party: '中共', unit: '区委统战部民宗科科长' },
    { name: '蒙古尔', party: '中共', unit: '区民族事务管理局局长' },
  ]},
  { jiebei: '特邀界别', displayName: '特邀界别', members: [
    { name: '楼玉宇', party: '九三学社', unit: '区政协副主席' },
    { name: '洪明', party: '民建', unit: '区政协副主席' },
    { name: '步汉英', party: '民进', unit: '区政协副主席' },
    { name: '许利萍', party: '致公党', unit: '区政协副主席' },
    { name: '王盈', party: '中共', unit: '紫阳街道党工委副书记' },
    { name: '俞富康', party: '群众', unit: '杭州文化艺术界联合会副主席' },
    { name: '屠明珏', party: '中共', unit: '上城区非物质文化遗产保护协会会长' },
    { name: '杨洁', party: '中共', unit: '杭州洁莹旅游用品有限公司总经理' },
    { name: '沈波', party: '民盟', unit: '浙江大学教授' },
    { name: '吴韵', party: '致公党', unit: '浙江中弘国际旅行社有限公司总经理' },
    { name: '王容峰', party: '致公党', unit: '上城区书法家协会主席' },
    { name: '方晓阳', party: '中共', unit: '杭州市上城区政协委员' },
  ]},
];

const streetGroups = [
  { street: '湖滨街道', leader: '查靖', count: 20, members: ['查靖','王林慧','方蔚军','许康波','杜缨','李伟达','吴利泽','吴桂萍','张正','张虹','陆雯','陈洁','陈翔','郑斐尹','胡丽亚','胡巍','钱云忠','章海燕','葛佳轩','黎洁'] },
  { street: '清波街道', leader: '徐洁', count: 24, members: ['徐洁','叶萌','朱嫣红','许国伟','孙雅国','杜永波','杨洁','言妍','沈乐平','张含','陈贺梅','陈蕴涵','苟佶明','罗旭峰','金晓','周媛媛','赵军','胡丽亚','钱志远','赵文华','孙建国','李文华','刘志远','王志国'] },
  { street: '小营街道', leader: '冷晓辉', count: 26, members: ['冷晓辉','王容峰','刘元凯','杜向群','杨丽英','汪丹凤','张帆','张佳','林文静','施俞刚','翁旭照','袁娜','韩霄波','徐方','梁中跃','骆鉴湖','谢小龙','解军','叶青青','陈思远','沈志峰','程晓燕','高浪华','聂世元','聂明军','王容峰'] },
  { street: '望江街道', leader: '毛静波', count: 22, members: ['毛静波','丁黎','马红','王早晖','王尉','刘海峰','朱苗','吴江达','沈飞燕','陆筱雅','金超奇','范芸','赵婷','胡伟祥','骆丁辉','倪晓东','高浪华','黄爱芳','蒋平樑','熊义勤','鲍一鹏','黎洁'] },
  { street: '南星街道', leader: '游广敏', count: 26, members: ['游广敏','方元','方晓阳','付选央','孙文祥','许新霞','吴大为','吴利泽','汪政','沈军','张佳','陈国华','陈瑞贵','郦政为','胡斌','洪紫林','赵明','俞宙','徐灵峰','高艳霞','屠明珏','章海燕','彭晓','焦国平','詹忠炜','蓝炜铭'] },
  { street: '紫阳街道', leader: '王盈', count: 19, members: ['王盈','许利芳','汪丹凤','沈军','张佳','张建华','陈蕴涵','邵晓燕','俞仲凯','倪勇卿','赵文华','李伟达','刘晓','朱剑文','沈春妮','何亮','钱云忠','周建卫','樊立刚'] },
  { street: '闸弄口街道', leader: '祝文雅', count: 19, members: ['祝文雅','尹兆青','冯新恩','刘相玉','江华平','杨丽英','陈磊','陈建恩','姚华俊','俞宁','胡建清','高艳','黄晓煌','韩霄波','蒋骥','蔡肇颖','朱嫣红','涂小莉','赵韵红'] },
  { street: '凯旋街道', leader: '徐灵峰', count: 21, members: ['徐灵峰','王芝芬','包良军','华剑波','刘晓','许利萍','孙国方','张瑞旭','吴桂萍','吴国庆','余丹凤','杨洁','金志伟','谢慧淼','赵丹晨','陈翔','董岷','楼玉宇','熊义勤','缪渭川','虞军红'] },
  { street: '采荷街道', leader: '赵丹晨', count: 19, members: ['赵丹晨','王叶华','方俊平','李陟峰','汪政','沈春妮','张帆','陈磊','罗旭峰','胡丽亚','蒋平樑','应啸','杨洁','毛雪波','金晓','陆雯','骆丁辉','余丹凤','吴利泽'] },
  { street: '四季青街道', leader: '李岗', count: 32, members: ['李岗','马学军','王军','王晓婷','王梦婷','卢明胜','叶晨','刘祖辉','刘海峰','许康波','李陟峰','吴韵','吴桂萍','张正','张含','陈洁','陈建恩','陈一春','胡丽亚','骆鉴湖','郦政为','袁娜','梅中鹤','聂建波','聂明军','董岷','王容峰','黄明科','蒋骥','吴江达','方晓丽','焦国平'] },
  { street: '笕桥街道', leader: '阮骏', count: 21, members: ['阮骏','丁宙胜','王勇','包崇来','许春波','何晓菲','杜缨','余丹凤','姜学英','胡晓敏','高艳','黎洁','蒋平樑','骆丁辉','俞仲凯','冯敏','斯梦龙','余向平','陆筱雅','焦国平','沈洁'] },
  { street: '彭埠街道', leader: '叶慧明', count: 20, members: ['叶慧明','马健','蓝炜铭','王鹏','严素娟','任渊','刘海峰','吴利泽','沈飞燕','张剑峰','陈一春','陈翔','郑斐尹','郑建华','高艳霞','黎洁','蒋骥','樊立刚','俞浙晖','张瑞光'] },
  { street: '九堡街道', leader: '胡建清', count: 37, members: ['胡建清','毛江文','朱苗','刘海峰','许新霞','李祖胜','张帆','陈磊','陈建恩','周建卫','骆丁辉','姜学英','赵明','顾晓茵','高浪华','黄晓煌','斯梦龙','聂世元','聂明军','倪晓东','方俊平','王鹏','蒋平樑','东港社区委员工作室','刘祖辉','余向平','吴韵','沈洁','焦国平','朱剑文','龚云玉','裘琦箐','高艳霞','宋新民','张仕权','释念性','樊立刚'] },
  { street: '丁兰街道', leader: '倪勇卿', count: 24, members: ['倪勇卿','赵韵红','刘祖辉','吴韵','何亮','沈洁','陆筱雅','陈国华','陈晓亮','金超奇','赵婷','胡伟祥','郦政为','俞宙','高艳霞','斯梦龙','余向平','焦国平','朱剑文','龚云玉','斯梦龙','释念性','樊立刚','俞浙晖'] },
];

// 专委会分组
const zhuanweiGroups = [
  { name: '提案委员会', total: 37, leader: '方蔚军', members: [
    '方蔚军','杨洁','王林慧','朱嫣红','俞富康','屠明珏','叶萌','沈飞燕','张含','陈贺梅',
    '苟佶明','罗旭峰','金晓','周媛媛','赵军','陈翔','吴桂萍','张虹','沈军','蒋骥',
    '应啸','杜向群','胡丽亚','钱云忠','陆雯','王盈','汪丹凤','赵文华','李伟达',
    '吴利泽','方晓阳','黎洁','付选央','熊义勤','骆鉴湖','许国伟','刘海峰'
  ]},
  { name: '经济科技委员会', total: 16, leader: '潘丽华', members: [
    '潘丽华','李伟达','胡巍','黎洁','陈建恩','陈瑞贵','赵明','姜学英','聂世元','聂明军',
    '倪晓东','高浪华','黄晓煌','董娜','宋新民','张仕权'
  ]},
  { name: '社会法制和港澳台侨委员会', total: 12, leader: '许国伟', members: [
    '许国伟','陆雯','王容峰','胡晓敏','许利芳','何晓菲','黄志强','俞仲凯',
    '张正','陈贺梅','罗旭峰','金晓'
  ]},
  { name: '文史和教文卫体委员会', total: 15, leader: '陆峰', members: [
    '陆峰','叶萌','沈乐平','周媛媛','赵军','俞富康','屠明珏','王容峰',
    '张正','王林慧','杜缨','言妍','谢慧淼','吴桂萍','张虹'
  ]},
  { name: '城建和人口资源环境委员会', total: 12, leader: '付选央', members: [
    '付选央','熊义勤','骆鉴湖','蒋骥','应啸','陈洁','方俊平',
    '吴大为','郑建华','李晓华','王军','王晓婷'
  ]},
];

export default function WeiyuanZhiJia() {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState('');

  const filteredJiebies = jiebieMembers.map(g => {
    const matchGroup = g.jiebei.includes(search);
    const filteredMembers = g.members.filter(m =>
      m.name.includes(search) || m.party.includes(search) || m.unit.includes(search)
    );
    if (!search) return { ...g, filteredMembers: g.members };
    if (matchGroup) return { ...g, filteredMembers: g.members };
    if (filteredMembers.length > 0) return { ...g, filteredMembers };
    return null;
  }).filter(Boolean);

  const filteredStreets = streetGroups.filter(g =>
    !search ||
    g.street.includes(search) ||
    g.leader.includes(search) ||
    g.members.some(m => m.includes(search))
  );

  const filteredZhuanwei = zhuanweiGroups.filter(g =>
    !search ||
    g.name.includes(search) ||
    g.leader.includes(search) ||
    g.members.some(m => m.includes(search))
  );

  const handleTabChange = (i) => {
    setActiveTab(i);
    setSearch('');
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-badge">委员之家</span>
          <h1>上城区政协委员名录</h1>
          <p>上城区政协委员按界别分组、街道小组、专委会分组全面展示</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="stat-row" style={{ marginBottom: 32 }}>
            <div className="stat-box">
              <div className="num">16</div>
              <div className="label">界别分组</div>
            </div>
            <div className="stat-box">
              <div className="num">14</div>
              <div className="label">街道委员小组</div>
            </div>
            <div className="stat-box">
              <div className="num">5</div>
              <div className="label">专委会分组</div>
            </div>
            <div className="stat-box">
              <div className="num">339</div>
              <div className="label">委员总数</div>
            </div>
          </div>

          <div className="filter-row">
            <input
              className="search-bar"
              placeholder={activeTab === 0 ? '搜索委员姓名、界别、党派或单位...' : activeTab === 1 ? '搜索委员姓名或街道...' : '搜索委员或专委会名称...'}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Tabs */}
          <div className="member-tab">
            {tabs.map((t, i) => (
              <button
                key={t}
                className={`member-tab-btn${activeTab === i ? ' active' : ''}`}
                onClick={() => handleTabChange(i)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Tab 0: 界别委员名单 */}
          {activeTab === 0 && (
            <>
              {filteredJiebies.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                  <p>未找到匹配的委员或界别</p>
                </div>
              ) : (
                <div className="jiebei-grid">
                  {filteredJiebies.map((g) => (
                    <div key={g.jiebei} className="card" style={{ padding: 24 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <div style={{
                          width: 44, height: 44, background: 'linear-gradient(135deg, var(--red), var(--gold))',
                          borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'white', fontFamily: 'Noto Serif SC,serif', fontWeight: 700, fontSize: 12,
                          flexShrink: 0,
                        }}>
                          {g.jiebei.slice(0, 2)}
                        </div>
                        <div>
                          <h3 style={{ fontSize: 15, color: 'var(--ink)' }}>{g.jiebei}</h3>
                          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            共 {g.members.length} 位委员{search && g.filteredMembers.length !== g.members.length ? `，显示 ${g.filteredMembers.length} 位` : ''}
                          </span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {g.filteredMembers.map(m => (
                          <span
                            key={m.name}
                            title={`${m.party} | ${m.unit}`}
                            style={{
                              background: 'var(--gray-light)',
                              border: '1px solid var(--gray)',
                              padding: '4px 12px',
                              borderRadius: 20,
                              fontSize: 13,
                              color: 'var(--text-secondary)',
                              cursor: 'default',
                            }}
                          >
                            {m.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Tab 1: 街道委员小组 */}
          {activeTab === 1 && (
            <>
              {filteredStreets.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                  <p>未找到匹配的街道或委员</p>
                </div>
              ) : (
                <div className="grid-2">
                  {filteredStreets.map((g) => (
                    <div key={g.street} className="card" style={{ padding: 24 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                        <div>
                          <h3 style={{ fontSize: 16, color: 'var(--ink)', marginBottom: 4 }}>{g.street}委员小组</h3>
                          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                            🏷️ 组长：<strong>{g.leader}</strong>
                          </div>
                        </div>
                        <span className="tag">{g.count}人</span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {g.members.filter(name =>
                          !search || name.includes(search) || g.street.includes(search) || g.leader.includes(search)
                        ).map(name => (
                          <span key={name} style={{
                            background: name === g.leader ? 'rgba(192,39,45,0.08)' : 'var(--gray-light)',
                            border: name === g.leader ? '1px solid rgba(192,39,45,0.25)' : '1px solid var(--gray)',
                            padding: '4px 12px',
                            borderRadius: 20,
                            fontSize: 13,
                            color: name === g.leader ? 'var(--red)' : 'var(--text-secondary)',
                            fontWeight: name === g.leader ? 600 : 400,
                          }}>
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Tab 2: 专委会分组 */}
          {activeTab === 2 && (
            <>
              {filteredZhuanwei.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                  <p>未找到匹配的专委会或委员</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {filteredZhuanwei.map((g) => (
                    <div key={g.name} className="card" style={{ padding: 28 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                        <div style={{
                          width: 50, height: 50, background: 'linear-gradient(135deg, var(--red), var(--gold))',
                          borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'white', fontFamily: 'Noto Serif SC,serif', fontWeight: 700, fontSize: 12,
                          flexShrink: 0, textAlign: 'center', lineHeight: 1.3,
                        }}>
                          {g.name.slice(0, 2)}
                        </div>
                        <div>
                          <h3 style={{ fontSize: 16, color: 'var(--ink)', marginBottom: 4 }}>{g.name}</h3>
                          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                            主任：<strong style={{ color: 'var(--red)' }}>{g.leader}</strong>
                            <span style={{ marginLeft: 12, color: 'var(--text-muted)' }}>共 {g.total} 位委员</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {g.members.filter(name =>
                          !search || name.includes(search) || g.name.includes(search) || g.leader.includes(search)
                        ).map(name => (
                          <span key={name} style={{
                            background: name === g.leader ? 'rgba(192,39,45,0.08)' : 'var(--gray-light)',
                            border: name === g.leader ? '1px solid rgba(192,39,45,0.25)' : '1px solid var(--gray)',
                            padding: '4px 12px',
                            borderRadius: 20,
                            fontSize: 13,
                            color: name === g.leader ? 'var(--red)' : 'var(--text-secondary)',
                            fontWeight: name === g.leader ? 600 : 400,
                          }}>
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Excel文件下载区域 */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-title">📄 原始文件下载</div>
          <p className="section-subtitle">委员之家相关Excel数据文件</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href="/data/1. 委员之家/1. 委员之家/1. 委员之家/1.界别委员名单.xlsx"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', background: 'white', border: '1px solid var(--gray)',
                borderRadius: 8, fontSize: 14, color: 'var(--ink)', textDecoration: 'none',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span style={{ fontSize: 20 }}>📊</span>
              <div>
                <div style={{ fontWeight: 500 }}>界别委员名单</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>.xlsx</div>
              </div>
            </a>
            <a
              href="/data/1. 委员之家/1. 委员之家/1. 委员之家/2.街道委员小组委员名单.xlsx"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', background: 'white', border: '1px solid var(--gray)',
                borderRadius: 8, fontSize: 14, color: 'var(--ink)', textDecoration: 'none',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span style={{ fontSize: 20 }}>📊</span>
              <div>
                <div style={{ fontWeight: 500 }}>街道委员小组委员名单</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>.xlsx</div>
              </div>
            </a>
            <a
              href="/data/1. 委员之家/1. 委员之家/1. 委员之家/3.专委会分组委员名单.xlsx"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', background: 'white', border: '1px solid var(--gray)',
                borderRadius: 8, fontSize: 14, color: 'var(--ink)', textDecoration: 'none',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span style={{ fontSize: 20 }}>📊</span>
              <div>
                <div style={{ fontWeight: 500 }}>专委会分组委员名单</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>.xlsx</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
