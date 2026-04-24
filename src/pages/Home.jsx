import { useNavigate } from 'react-router-dom';

const modules = [
  { to: '/weiyuanzhijia', icon: '🏛️', label: '委员之家', desc: '委员名单查询' },
  { to: '/jiebies', icon: '🎯', label: '界别基本情况', desc: '16个界别展示' },
  { to: '/center', icon: '🤝', label: '协商民主实践中心', desc: '上城区分中心' },
  { to: '/platform', icon: '⭐', label: '委员履职平台', desc: '50个工作室' },
  { to: '/plan', icon: '📅', label: '2026年履职计划', desc: '各界别年度计划' },
];

const stats = [
  { num: '50', label: '委员工作室', sub: '全覆盖街道委员小组' },
  { num: '25', label: '五星工作室', sub: '2025年度评定' },
  { num: '17', label: '四星工作室', sub: '2025年度评定' },
  { num: '16', label: '界别分组', sub: '多元参政力量' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Hero */}
      <div className="home-hero">
        <div className="home-hero-bg-text">政协</div>
        <div className="home-hero-content">
          <div className="home-hero-emblem">
            <span className="emblem-inner">政</span>
          </div>
          <h1>
            上城区<em>政协委员通</em>
          </h1>
          <p className="subtitle">杭州市上城区政协 · 数字履职展示平台 · 2026</p>

          <div className="nav-cards">
            {modules.map((m) => (
              <div
                className="nav-card-item"
                key={m.to}
                onClick={() => navigate(m.to)}
              >
                <span className="icon">{m.icon}</span>
                <div>
                  <div className="label">{m.label}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section-title">平台数据总览</div>
          <p className="section-subtitle">上城区政协委员工作室建设成果</p>
          <div className="stat-row">
            {stats.map((s) => (
              <div className="stat-box" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label" style={{ fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="intro-box">
            <h2>委员履职工作简介</h2>
            <p>
              上城区政协按照"向基层延伸覆盖"和"不建机构建机制"工作要求，坚持党建引领，强化委员工作室"三位一体"建设，牢牢把握功能定位，立足区域发展实际，以打造"一室一品"为特色，深化"楼宇商圈""宋韵文化"和"全龄特有爱"公益慈善品牌建设，着力构建宽领域、多层次、常态化的协商体系，不断提升委员工作室辨识度和影响力，密切与界别群众的联系，凝聚社会各界共识，助推区域经济高质量发展。
            </p>
          </div>

          {/* Quick nav cards */}
          <div className="grid-3" style={{ marginTop: 0 }}>
            {modules.map((m) => (
              <div
                key={m.to}
                className="card"
                style={{ padding: 28, cursor: 'pointer', display: 'flex', gap: 16, alignItems: 'flex-start' }}
                onClick={() => navigate(m.to)}
              >
                <div style={{
                  width: 56, height: 56, background: 'linear-gradient(135deg, var(--red), var(--gold))',
                  borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, flexShrink: 0
                }}>
                  {m.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Noto Serif SC, serif', fontSize: 16, marginBottom: 6 }}>{m.label}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{m.desc}</p>
                  <span style={{ fontSize: 12, color: 'var(--red)', marginTop: 8, display: 'block' }}>点击查看 →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 <span>杭州市上城区政协</span> · 委员通数字展示平台 · 建设单位：上城区政协办公室</p>
      </footer>
    </div>
  );
}
