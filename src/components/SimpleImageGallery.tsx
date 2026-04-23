import React, { useState, useEffect } from 'react';
import { loadCategoryImages, CategoryImage, ImageInfo } from '../utils/imageLoader';
import './SimpleImageGallery.css';

interface SimpleImageGalleryProps {
  categoryCode?: string; // 可选：指定特定界别
  title?: string;
}

const SimpleImageGallery: React.FC<SimpleImageGalleryProps> = ({ 
  categoryCode, 
  title = "界别活动照片" 
}) => {
  const [categories, setCategories] = useState<CategoryImage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryCode || null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<ImageInfo | null>(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      setLoading(true);
      const data = await loadCategoryImages();
      setCategories(data);
      
      // 如果没有指定categoryCode，默认选择第一个
      if (!categoryCode && data.length > 0) {
        setSelectedCategory(data[0].code);
      }
    } catch (error) {
      console.error('加载图片失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentImages = (): ImageInfo[] => {
    if (!selectedCategory) return [];
    const category = categories.find(cat => cat.code === selectedCategory);
    return category?.images || [];
  };

  const handleCategorySelect = (categoryCode: string) => {
    setSelectedCategory(categoryCode);
    setSelectedImage(null); // 切换分类时关闭图片详情
  };

  const handleImageClick = (image: ImageInfo) => {
    setSelectedImage(image);
  };

  const closeImageDetail = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="simple-gallery loading">
        <div className="loading-spinner"></div>
        <p>正在加载图片...</p>
      </div>
    );
  }

  const currentImages = getCurrentImages();
  const currentCategory = categories.find(cat => cat.code === selectedCategory);

  return (
    <div className="simple-gallery">
      <div className="gallery-header">
        <h3>{title}</h3>
        {currentCategory && (
          <div className="category-info">
            <span className="category-badge">
              {currentCategory.code} {currentCategory.name}
            </span>
            <span className="image-count">
              {currentImages.length} 张照片
            </span>
          </div>
        )}
      </div>

      {!categoryCode && (
        <div className="category-selector">
          <h4>选择界别：</h4>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category.code}
                className={`category-btn ${selectedCategory === category.code ? 'active' : ''}`}
                onClick={() => handleCategorySelect(category.code)}
              >
                {category.code} {category.name}
                <span className="btn-count">{category.images.length}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="image-grid">
        {currentImages.length === 0 ? (
          <div className="no-images">
            <p>暂无活动照片</p>
            <p>该界别尚未上传活动照片</p>
          </div>
        ) : (
          currentImages.map(image => (
            <div 
              key={image.id} 
              className="image-item"
              onClick={() => handleImageClick(image)}
            >
              <div className="image-container">
                {/* 显示实际的图片 */}
                <img 
                  src={image.path} 
                  alt={image.title}
                  className="real-image"
                  onError={(e) => {
                    // 如果图片加载失败，显示占位图
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'image-placeholder';
                    placeholder.innerHTML = `
                      <div class="placeholder-icon">🖼️</div>
                      <div class="placeholder-text">${image.category}活动</div>
                    `;
                    target.parentNode?.insertBefore(placeholder, target);
                  }}
                />
                <div className="image-overlay">
                  <span className="view-btn">点击查看</span>
                </div>
              </div>
              <div className="image-info">
                <h5>{image.title}</h5>
                <p className="image-date">{image.date}</p>
                <p className="image-desc">{image.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 图片详情模态框 */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageDetail}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h4>{selectedImage.title}</h4>
              <button className="close-btn" onClick={closeImageDetail}>×</button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={selectedImage.path} 
                  alt={selectedImage.title}
                  className="modal-real-image"
                  onError={(e) => {
                    // 如果图片加载失败，显示占位图
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'real-image-placeholder';
                    placeholder.innerHTML = `
                      <div class="placeholder-large">🖼️</div>
                      <p>图片：${selectedImage.filename}</p>
                      <p class="image-path">路径：${selectedImage.path}</p>
                    `;
                    target.parentNode?.appendChild(placeholder);
                  }}
                />
              </div>
              <div className="modal-info">
                <div className="info-row">
                  <span className="info-label">界别：</span>
                  <span className="info-value">{selectedImage.category}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">日期：</span>
                  <span className="info-value">{selectedImage.date}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">描述：</span>
                  <span className="info-value">{selectedImage.description}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">文件名：</span>
                  <span className="info-value">{selectedImage.filename}</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="download-btn">下载图片</button>
              <button className="close-modal-btn" onClick={closeImageDetail}>关闭</button>
            </div>
          </div>
        </div>
      )}

      <div className="gallery-footer">
        <p className="footer-note">
          📸 展示政协界别活动照片
        </p>
      </div>
    </div>
  );
};

export default SimpleImageGallery;