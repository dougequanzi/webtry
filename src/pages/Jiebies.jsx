import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { jiebieDatas } from '../data/jiebies';
import { jiebiePhotos } from '../data/jiebiePhotos';

const DATA_BASE = '/data/3. 界别基本情况/活动照片/';

export default function Jiebies() {
  const [selected, setSelected] = useState(null);

  // 获取某个界别的真实照片列表
  const getPhotos = (code) => {
    const files = jiebiePhotos[code] || [];
    return files.map(f => ({
      src: `${DATA_BASE}${code}/${encodeURIComponent(f)}`,
      label: f.replace(/\.webp$/, ''),
    }));
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-hero">
        <div className="page-hero-content">
          <span className="page-badge">界别基本情况</span>
          <h1>上城区政协界别委员风采</h1>
          <p>上城区政协共设16个界别分组，汇聚各界优秀代表人士，共同参政议政</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-title">16个界别分组</div>
          <p className="section-subtitle">点击界别卡片查看活动照片</p>
          <div className="jiebei-grid">
            {jiebieDatas.map((jb) => {
              const photoCount = (jiebiePhotos[jb.code] || []).length;
              return (
                <div
                  key={jb.id}
                  className="jiebei-card"
                  style={{ borderLeft: `4px solid ${jb.color}` }}
                  onClick={() => setSelected(selected?.id === jb.id ? null : jb)}
                >
                  <div
                    className="jiebei-color-dot"
                    style={{ background: jb.color }}
                  >
                    {jb.id}
                  </div>
                  <div className="jiebei-info">
                    <h3>{jb.name}</h3>
                    <p>{jb.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                      <span style={{
                        fontSize: 12, color: jb.color, fontWeight: 500,
                      }}>
                        {selected?.id === jb.id ? '▲ 收起' : '▼ 查看活动照片'}
                      </span>
                      {photoCount > 0 && (
                        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                          📷 {photoCount}张
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 展开的照片区域 */}
          {selected && (
            <div style={{
              marginTop: 32,
              background: 'white',
              borderRadius: 'var(--radius)',
              padding: 32,
              boxShadow: 'var(--shadow-md)',
              border: `2px solid ${selected.color}20`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h2 style={{ fontFamily: 'Noto Serif SC, serif', fontSize: 20, color: 'var(--ink)' }}>
                  {selected.name} · 活动照片
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    background: 'none', border: 'none', fontSize: 20,
                    cursor: 'pointer', color: 'var(--text-muted)', padding: '4px 8px'
                  }}
                >✕</button>
              </div>
              {getPhotos(selected.code).length > 0 ? (
                <div className="photo-gallery">
                  {getPhotos(selected.code).map((photo, i) => (
                    <div className="photo-item" key={i}>
                      <img
                        src={photo.src}
                        alt={`${selected.name}活动照片${i + 1}`}
                        onError={(e) => {
                          e.target.closest('.photo-item').style.display = 'none';
                        }}
                      />
                      <div className="photo-overlay">{photo.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📷</div>
                  <p>暂无活动照片</p>
                </div>
              )}
              <p style={{ marginTop: 20, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {selected.description}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
