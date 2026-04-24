import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { centerData } from '../data/center';

const IMG_BASE = '/data/4. 市政协新时代协商民主实践 - 上城分中心/分中心/';

export default function Center() {
  const [activeCenter, setActiveCenter] = useState(0);

  const currentCenter = centerData.subcenters[activeCenter];

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-badge">协商民主实践中心</span>
          <h1>杭州市政协新时代协商民主实践中心</h1>
          <p>上城区分中心——打造基层协商民主新阵地，让委员履职走进百姓生活</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* 简介 */}
          <div className="intro-box" style={{ marginBottom: 40 }}>
            <h2>上城区分中心简介</h2>
            <p>{centerData.description}</p>
          </div>

          {/* 分中心选择 */}
          <div className="member-tab" style={{ marginBottom: 32 }}>
            {centerData.subcenters.map((c, i) => (
              <button
                key={c.name}
                className={`member-tab-btn${activeCenter === i ? ' active' : ''}`}
                onClick={() => setActiveCenter(i)}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="section-title">{currentCenter.name}</div>
          <p className="section-subtitle">共 {currentCenter.activities.length} 项活动记录</p>

          <div className="photo-gallery">
            {currentCenter.activities.map((act, i) => (
              <div className="photo-item" key={i}>
                <img
                  src={`${IMG_BASE}${act.file}`}
                  alt={act.title}
                  onError={(e) => {
                    e.target.style.background = '#f0f0f0';
                    e.target.style.minHeight = '180px';
                  }}
                />
                <div className="photo-overlay">{act.title}</div>
              </div>
            ))}
          </div>

          {/* 活动列表 */}
          <div style={{ marginTop: 40 }}>
            <div className="section-title" style={{ marginBottom: 20 }}>活动详情</div>
            <div className="timeline">
              {currentCenter.activities.map((act, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-content">
                    <div className="timeline-title">
                      <span style={{
                        display: 'inline-block',
                        background: 'var(--red)',
                        color: 'white',
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        textAlign: 'center',
                        lineHeight: '22px',
                        fontSize: 11,
                        marginRight: 8,
                        fontWeight: 700,
                      }}>{i + 1}</span>
                      {act.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
