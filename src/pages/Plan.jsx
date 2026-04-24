import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 真实数据来源：data/7. 2026年履职计划/
const streetPlans = [
  { street: '湖滨街道', items: [
    { topic: '湖滨"智慧文旅商圈"消费提振专题协商会', time: '5月' },
    { topic: `"数智赋能，防患未'燃'"——电动自行车充停点位数字化升级可行性专题协商会`, time: '8月' },
  ]},
  { street: '清波街道', items: [
    { topic: '"IP赋能·业态焕新"——关于打造林徽因文化IP与培育街区新质生产力的协商', time: '5月' },
    { topic: '"巷陌共治·幸福邻里"——关于深化"十邻坊"机制与优化全龄友好服务体系的协商', time: '10月' },
  ]},
  { street: '小营街道', items: [
    { topic: '锚定创新高地，赋能健康未来专题协商会', time: '3月' },
    { topic: '推进城市更新，让城市更有"韧性"与"温度"专题协商会', time: '8月' },
  ]},
  { street: '望江街道', items: [
    { topic: '"聚商引智 强链补链"——提升招商引资精准度专题协商', time: '5月' },
    { topic: 'AI赋能"一老一小"，打造智慧养老与托育服务新模式专题协商', time: '10月' },
  ]},
  { street: '南星街道', items: [
    { topic: '"河韵新生"——龙山河生态人文与生物多样性融合治理协商活动', time: '3月' },
    { topic: '以一碗面为媒，探索餐饮烟火气赋能基层治理新路径', time: '10月' },
  ]},
  { street: '紫阳街道', items: [
    { topic: '深化二十三坊有机更新——探索"街区大物业"模式，完善坊巷自治共治体系', time: '2月' },
    { topic: '聚力经济提质增效——助力特色产业楼宇打造，服务中央创新区科创企业集聚', time: '4月' },
    { topic: '推动人文经济融合——赋能中河南路改造，升级瓦肆文化品牌与文旅融合发展', time: '6月' },
    { topic: '创新基层社会治理——构建"防消一张网"，打造一站式矛盾纠纷调处中心', time: '8月' },
    { topic: '提升民生服务品质——优化"一老一小一残"服务，完善15分钟便民服务圈', time: '10月' },
    { topic: '擦亮基层治理品牌——深化上羊市街居委会建设，争创全过程人民民主实践点', time: '12月' },
  ]},
  { street: '闸弄口街道', items: [
    { topic: '老旧小区街道全域类未来社区示范样板街区打造专题协商会', time: '4月' },
    { topic: '"闸们家"特有AI"TA经济"中心专题协商会', time: '8月' },
  ]},
  { street: '凯旋街道', items: [
    { topic: '关于深化"跨社联片"治理模式、健全新就业群体"双向奔赴"服务体系的专题协商会', time: '6月' },
    { topic: '关于探索建立"平安议事会"机制、构建居民纠纷分级分类多元化解体系的专题协商会', time: '11月' },
  ]},
  { street: '采荷街道', items: [
    { topic: '聚焦"全球触达"，共议"中国服装第一街"国际消费打卡地品牌打造路径', time: '4月' },
    { topic: '深化"商文旅"融合，共绘"中国服装第一街"城市体验与时尚打卡新地图', time: '8月' },
  ]},
  { street: '四季青街道', items: [
    { topic: '"持续建设中央创新区（CID）产业社区迭代建设，打造环总部经济生态圈"专题协商会', time: '4月' },
    { topic: '"建设全域未来社区，提升辖区人居环境"专题协商会', time: '9月' },
  ]},
  { street: '笕桥街道', items: [
    { topic: '关于小区协商治理的专题协商会', time: '4月' },
    { topic: '关于老街区域焕新蝶变的专题协商会', time: '10月' },
  ]},
  { street: '彭埠街道', items: [
    { topic: '"彭友暖新"，探索构建新就业群体多维服务矩阵专题协商', time: '5月' },
    { topic: '"破墙融心"，构建租住融合的社区共同体专题协商', time: '9月' },
  ]},
  { street: '九堡街道', items: [
    { topic: '关于电商新生态赋能CID建设的专题协商', time: '2月' },
    { topic: '"城北企盼"主题协商活动', time: '9月' },
  ]},
  { street: '丁兰街道', items: [
    { topic: '开展聚力丁兰经济发展专题协商会', time: '6月' },
    { topic: '开展助力皋亭文旅发展专题协商会', time: '10月' },
  ]},
];

// 真实数据来源：data/7. 2026年履职计划/2026年各界别履职计划.xlsx
const jiebiePlans = [
  { jiebei: '中共界别', items: [
    { name: '国际人才交流活动', type: '主题活动', time: '1月' },
    { name: '加强人才引育，助推CID建设专题协商会', type: '专题协商', time: '9月' },
  ]},
  { jiebei: '无党派人士界别', items: [
    { name: '"她"力量·在路上——与新就业女性共庆妇女节主题沙龙', type: '主题沙龙', time: '3月' },
    { name: '界别委员公益惠民活动', type: '公益咨询服务', time: '5月' },
    { name: '无党派界别协商议事会', type: '专题协商', time: '9月' },
  ]},
  { jiebei: '共青团、青联界别', items: [
    { name: '送福送春联活动', type: '惠民服务', time: '1月' },
    { name: '"书香润初心·青年话担当"读书交流会', type: '主题活动', time: '4月' },
  ]},
  { jiebei: '工会界别', items: [
    { name: '"铜韵传承·锻打时光"铜雕艺术体验日活动', type: '互动体验', time: '4月' },
    { name: '上城区职工毅行活动', type: '主题活动', time: '4月' },
  ]},
  { jiebei: '妇联界别', items: [
    { name: '"品宋韵·话传承·谋创新"文化专题活动', type: '主题活动', time: '5月' },
    { name: '金融赋能发展协商会', type: '专题协商', time: '9月' },
  ]},
  { jiebei: '工商联界别', items: [
    { name: '营商环境专项调研协商', type: '专题协商', time: '7月' },
    { name: '委员企业现代治理互学活动', type: '主题活动', time: '12月' },
  ]},
  { jiebei: '科技、科协界别', items: [
    { name: '开展关于推进OPC发展的调研', type: '专题调研', time: '3月' },
    { name: '开展关于加快推进科技创新和产业创新深度融合的协商会', type: '专题协商', time: '10月' },
  ]},
  { jiebei: '侨、台界别', items: [
    { name: '"侨助发展 AI赋能经济"——走进群核科技', type: '主题活动', time: '4月' },
    { name: '"融通世界 文化互鉴"活动', type: '主题活动', time: '6月' },
    { name: '侨助发展专题协商会', type: '专题协商', time: '9月' },
  ]},
  { jiebei: '新闻文体界别', items: [
    { name: '上城区人文经济创新发展专题协商会', type: '专题协商', time: '8月' },
    { name: '宋韵文化"两创"交流分享活动', type: '参观交流', time: '10月' },
  ]},
  { jiebei: '经济界别', items: [
    { name: '开局"十五五"——经济高质量发展专题协商会', type: '专题协商', time: '4月' },
    { name: '创新高地专题调研活动', type: '主题活动', time: '9月' },
  ]},
  { jiebei: '环境资源和农业界别', items: [
    { name: '"城村共生绿美共富"城乡融合体验实践分享会', type: '主题活动', time: '4月' },
    { name: '上城区城市更新盘活存量建筑的举措协商会', type: '专题协商', time: '10月' },
  ]},
  { jiebei: '教育界别', items: [
    { name: '青少年模拟政协委员活动', type: '主题活动', time: '9月' },
    { name: '教育系统政协委员座谈会', type: '专题协商', time: '11月' },
  ]},
  { jiebei: '医卫界别', items: [
    { name: '界别委员惠民健体服务', type: '名中医讲座、适宜技术应用、义诊', time: '5月' },
    { name: '医卫界别协商议事会', type: '专题协商', time: '9月' },
  ]},
  { jiebei: '社会福利和保障界别', items: [
    { name: '爱心服务活动', type: '志愿服务', time: '6月' },
    { name: '爱心义卖活动', type: '爱心义卖', time: '11月' },
  ]},
  { jiebei: '民族、宗教界别', items: [
    { name: '红十字会博爱周市集', type: '主题活动', time: '5月' },
    { name: '居民楼外立面整治协调会', type: '专题协商', time: '8月' },
  ]},
  { jiebei: '特邀界别', items: [
    { name: '区垃圾分类工作专题协商', type: '专题协商', time: '5月' },
    { name: '城市道路健康体检观察主题活动', type: '主题活动', time: '9月' },
  ]},
];

const TYPE_COLORS = {
  '专题协商': '#C0392B',
  '主题活动': '#2980B9',
  '主题沙龙': '#8E44AD',
  '公益咨询服务': '#27AE60',
  '惠民服务': '#16A085',
  '互动体验': '#E67E22',
  '专题调研': '#1ABC9C',
  '参观交流': '#D35400',
  '志愿服务': '#27AE60',
  '爱心义卖': '#F39C12',
  '名中医讲座、适宜技术应用、义诊': '#E74C3C',
};

export default function Plan() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-badge">2026年履职计划</span>
          <h1>2026年度委员履职工作计划</h1>
          <p>各街道委员小组民生议事堂议事计划 · 各界别年度履职工作安排</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* 街道计划 */}
          <div className="section-title">各街道"民生议事堂"议事计划</div>
          <p className="section-subtitle">2026年度14个街道委员小组议事活动安排</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 56 }}>
            {streetPlans.map((sp) => (
              <div key={sp.street} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44, background: 'linear-gradient(135deg, var(--red), var(--gold))',
                    borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontFamily: 'Noto Serif SC,serif', fontWeight: 700, fontSize: 13,
                    flexShrink: 0,
                  }}>
                    {sp.street.replace('街道', '')}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16, color: 'var(--ink)' }}>{sp.street}委员小组</h3>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                      共 {sp.items.length} 项协商课题
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {sp.items.map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                      padding: '10px 14px', background: 'var(--gray-light)',
                      borderRadius: 8, borderLeft: '3px solid var(--red)',
                    }}>
                      <span style={{
                        background: 'var(--red)', color: 'white', fontSize: 11, fontWeight: 600,
                        padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap', flexShrink: 0,
                      }}>
                        {item.time}
                      </span>
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {item.topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 界别计划 */}
          <div className="section-title">2026年各界别履职计划</div>
          <p className="section-subtitle">16个界别年度活动安排</p>

          <div className="jiebei-grid">
            {jiebiePlans.map((p, i) => (
              <div key={p.jiebei} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 38, height: 38, background: 'linear-gradient(135deg, var(--red), var(--gold))',
                    borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: 12, fontWeight: 700, flexShrink: 0,
                    fontFamily: 'Noto Serif SC, serif',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>{p.jiebei}</h3>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                      共 {p.items.length} 项活动
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.items.map((item, j) => (
                    <div key={j} style={{
                      background: 'var(--gray-light)',
                      borderRadius: 8,
                      padding: '10px 14px',
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                        <span>{item.name}</span>
                        <span style={{
                          fontSize: 11, whiteSpace: 'nowrap', flexShrink: 0,
                          color: TYPE_COLORS[item.type] || 'var(--red)',
                          fontWeight: 500,
                        }}>
                          {item.time}
                        </span>
                      </div>
                      <span style={{
                        display: 'inline-block', marginTop: 4,
                        fontSize: 11, padding: '1px 6px',
                        background: (TYPE_COLORS[item.type] || '#999') + '15',
                        color: TYPE_COLORS[item.type] || '#999',
                        borderRadius: 4, fontWeight: 500,
                      }}>
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Excel文件下载区域 */}
          <div style={{ marginTop: 48, padding: 24, background: 'var(--gray-light)', borderRadius: 'var(--radius)' }}>
            <div className="section-title" style={{ marginBottom: 16 }}>📄 原始文件下载</div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
              以下为2026年度履职计划原始Excel文件，可点击下载查看完整内容
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a
                href={`/data/7. 2026年履职计划/2026年各街道"民生议事堂"议事计划.xls`}
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
                  <div style={{ fontWeight: 500 }}>各街道"民生议事堂"议事计划</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>2026年 · .xls</div>
                </div>
              </a>
              <a
                href="/data/7. 2026年履职计划/2026年各界别履职计划.xlsx"
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
                  <div style={{ fontWeight: 500 }}>各界别履职计划</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>2026年 · .xlsx</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
