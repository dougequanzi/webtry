import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { platformData } from '../data/studios';

const IMG_BASE = '/data/5. 委员履职平台/';

const ALL_TAGS = ['全部', '街道小组', '界别', '特色', '个人', '社区'];

const FIVE_STAR_NAMES = [
  '政协湖滨小组委员工作室', '政协清波小组委员工作室',
  '政协四季青小组委员工作室', '政协彭埠小组委员工作室',
  '上城区政协工会界别委员工作室', '上城区政协社会福利和保障界别委员工作室',
  '全民阅读委员工作室', '爱馨文化公益委员工作室', '有意思委员工作室', '侨见未来委员工作室',
  '张瑞旭委员工作室', '大健康委员工作室', '俞富康宋韵文化委员工作室', '春泥委员工作室',
  '建和社区委员工作室', '健康九久委员工作室', '同心·共富委员工作室', '茗荟聚智委员工作室',
  '乐动新声委员工作室',
  `政协紫阳"三一"委员工作室`,
  `采荷街道"幸福19"委员工作室`,
  `"文润童心"委员工作室`,
  `"老爸好商量"委员工作室`,
  `"邻聚力"委员工作室`,
  `"育共体 阳光行"委员工作室`,
];

function StarBadge({ name }) {
  if (FIVE_STAR_NAMES.includes(name)) {
    return <span style={{ color: '#F39C12', fontSize: 13, letterSpacing: 1 }}>★★★★★</span>;
  }
  return <span style={{ color: '#BDC3C7', fontSize: 13, letterSpacing: 1 }}>★★★★☆</span>;
}

export default function Platform() {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('全部');

  const studios = useMemo(() => {
    return platformData.studios.filter(s => {
      const matchSearch = !search || s.name.includes(search) || s.leader.includes(search);
      const matchTag = tag === '全部' || s.tag === tag;
      return matchSearch && matchTag;
    });
  }, [search, tag]);

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-badge">委员履职平台</span>
          <h1>上城区政协委员工作室</h1>
          <p>{platformData.overview.slice(0, 80)}...</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* 统计 */}
          <div className="stat-row">
            <div className="stat-box">
              <div className="num">{platformData.statistics.total_studios}</div>
              <div className="label">委员工作室总数</div>
            </div>
            <div className="stat-box">
              <div className="num">{platformData.statistics.star_ratings_2025.five_star}</div>
              <div className="label">五星工作室</div>
            </div>
            <div className="stat-box">
              <div className="num">{platformData.statistics.star_ratings_2025.four_star}</div>
              <div className="label">四星工作室</div>
            </div>
            <div className="stat-box">
              <div className="num">{platformData.statistics.star_ratings_2025.three_star}</div>
              <div className="label">三星工作室</div>
            </div>
          </div>

          {/* 简介 */}
          <div className="intro-box">
            <h2>平台简介</h2>
            <p>{platformData.overview}</p>
          </div>

          {/* 过滤 */}
          <div className="filter-row">
            <input
              className="search-bar"
              placeholder="搜索工作室名称或负责人..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {ALL_TAGS.map(t => (
              <button
                key={t}
                className={`filter-btn${tag === t ? ' active' : ''}`}
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
            共显示 {studios.length} 个工作室
          </p>

          {/* 工作室列表 */}
          <div className="studio-grid">
            {studios.map((s) => (
              <div key={s.id} className="studio-card">
                <img
                  className="studio-card-img"
                  src={`${IMG_BASE}${s.image}`}
                  alt={s.name}
                  onError={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #f8f8f8, #ebebeb)';
                    e.target.style.objectFit = 'contain';
                  }}
                />
                <div className="studio-card-body">
                  <span className="tag">{s.tag}</span>
                  <h3>{s.name}</h3>
                  <StarBadge name={s.name} />
                  <div className="studio-meta">
                    <div className="studio-meta-item">
                      <span className="icon-s">👤</span>
                      <span>负责人：<strong>{s.leader}</strong></span>
                    </div>
                    <div className="studio-meta-item">
                      <span className="icon-s">📍</span>
                      <span>{s.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {studios.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-muted)' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <p>未找到匹配的工作室</p>
            </div>
          )}

          {/* 补充：其余工作室（第26-50个，仅展示文字） */}
          {tag === '全部' && !search && (
            <div style={{ marginTop: 48 }}>
              <div className="section-title">全部50个工作室列表</div>
              <p className="section-subtitle">含全部街道小组及各类专项工作室</p>
              <div className="plan-table-wrap">
                <table className="plan-table">
                  <thead>
                    <tr>
                      <th>序号</th>
                      <th>工作室名称</th>
                      <th>负责人</th>
                      <th>地址</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platformData.studios.map(s => (
                      <tr key={s.id}>
                        <td style={{ color: 'var(--red)', fontWeight: 600, width: 60 }}>{s.id}</td>
                        <td style={{ fontWeight: 500, color: 'var(--ink)' }}>{s.name}</td>
                        <td>{s.leader}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{s.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Excel文件下载区域 */}
          <div style={{ marginTop: 48, padding: 24, background: 'var(--gray-light)', borderRadius: 'var(--radius)' }}>
            <div className="section-title" style={{ marginBottom: 16 }}>📄 原始文件下载</div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
              委员履职平台相关数据文件
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a
                href="/data/5. 委员履职平台/1.2026上城区政协委员工作室名单(按成立顺序).xlsx"
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
                  <div style={{ fontWeight: 500 }}>委员工作室名单</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>2026年 · .xlsx</div>
                </div>
              </a>
              <a
                href="/data/4. 市政协新时代协商民主实践 - 上城分中心/2.街道委员小组委员名单.xlsx"
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
