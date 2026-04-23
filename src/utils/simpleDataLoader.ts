// 简单的数据加载工具
// 用于加载和展示实际数据目录中的内容

// 界别基本信息
export interface CategoryInfo {
  id: number;
  code: string;
  name: string;
  description: string;
  memberCount: number;
  hasPhotos: boolean;
  photoPath?: string;
}

// 街道信息
export interface StreetInfo {
  id: number;
  name: string;
  description: string;
  committeeCount: number;
  hasDocument: boolean;
  documentPath?: string;
}

// 委员工作室信息
export interface StudioInfo {
  id: number;
  name: string;
  street: string;
  category: string;
  starRating: number;
  activityCount: number;
  description: string;
}

// 加载界别信息
export const loadCategoryInfo = (): CategoryInfo[] => {
  return [
    { id: 1, code: '01', name: '中共', description: '中国共产党界别', memberCount: 25, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\1中共' },
    { id: 2, code: '02', name: '民革', description: '中国国民党革命委员会界别', memberCount: 15, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\2民革' },
    { id: 3, code: '03', name: '民盟、民进', description: '中国民主同盟、中国民主促进会界别', memberCount: 18, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\3民盟、民进' },
    { id: 4, code: '04', name: '工会', description: '工会界别', memberCount: 12, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\4工会' },
    { id: 5, code: '05', name: '妇联', description: '妇女联合会界别', memberCount: 10, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\5妇联' },
    { id: 6, code: '06', name: '青联', description: '青年联合会界别', memberCount: 8, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\6青联' },
    { id: 7, code: '07', name: '科技、科协', description: '科学技术界、科学技术协会界别', memberCount: 20, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\7科技、科协' },
    { id: 8, code: '08', name: '侨、台', description: '归国华侨、台湾同胞界别', memberCount: 15, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\8侨、台' },
    { id: 9, code: '09', name: '新闻文体', description: '新闻出版、文化艺术、体育界别', memberCount: 12, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\9新闻文体' },
    { id: 10, code: '10', name: '经济', description: '经济界别', memberCount: 30, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\10经济' },
    { id: 11, code: '11', name: '环境资源和农业', description: '环境资源、农业界别', memberCount: 10, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\11环境资源和农业' },
    { id: 12, code: '12', name: '教育', description: '教育界别', memberCount: 25, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\12教育' },
    { id: 13, code: '13', name: '医卫', description: '医药卫生界别', memberCount: 20, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\13医卫' },
    { id: 14, code: '14', name: '社会福利和保障', description: '社会福利和社会保障界别', memberCount: 15, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\14社会福利和保障' },
    { id: 15, code: '15', name: '民宗', description: '少数民族、宗教界别', memberCount: 8, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\15民宗' },
    { id: 16, code: '16', name: '特邀', description: '特别邀请人士界别', memberCount: 20, hasPhotos: true, photoPath: 'D:\\zhuomian\\ddd\\data\\3. 界别基本情况\\活动照片\\16特邀' },
  ];
};

// 加载街道信息
export const loadStreetInfo = (): StreetInfo[] => {
  return [
    { id: 1, name: '湖滨街道', description: '湖滨街道委员小组', committeeCount: 5, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 2, name: '清波街道', description: '清波街道委员小组', committeeCount: 4, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 3, name: '小营街道', description: '小营街道委员小组', committeeCount: 6, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 4, name: '望江街道', description: '望江街道委员小组', committeeCount: 5, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 5, name: '南星街道', description: '南星街道委员小组', committeeCount: 4, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 6, name: '紫阳街道', description: '紫阳街道委员小组', committeeCount: 5, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 7, name: '闸弄口街道', description: '闸弄口街道委员小组', committeeCount: 4, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 8, name: '凯旋街道', description: '凯旋街道委员小组', committeeCount: 5, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 9, name: '采荷街道', description: '采荷街道委员小组', committeeCount: 6, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 10, name: '四季青街道', description: '四季青街道委员小组', committeeCount: 5, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 11, name: '笕桥街道', description: '笕桥街道委员小组', committeeCount: 4, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 12, name: '彭埠街道', description: '彭埠街道委员小组', committeeCount: 5, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 13, name: '九堡街道', description: '九堡街道委员小组', committeeCount: 4, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
    { id: 14, name: '丁兰街道', description: '丁兰街道委员小组', committeeCount: 5, hasDocument: true, documentPath: 'D:\\zhuomian\\ddd\\data\\2. 街道委员小组\\14街道.pdf' },
  ];
};

// 加载委员工作室信息
export const loadStudioInfo = (): StudioInfo[] => {
  // 这里可以从实际的performanceData.json加载
  return [
    { id: 1, name: '湖滨街道委员工作室', street: '湖滨街道', category: '经济', starRating: 5, activityCount: 12, description: '经济界别委员工作室' },
    { id: 2, name: '清波街道委员工作室', street: '清波街道', category: '教育', starRating: 5, activityCount: 10, description: '教育界别委员工作室' },
    { id: 3, name: '小营街道委员工作室', street: '小营街道', category: '医卫', starRating: 5, activityCount: 15, description: '医药卫生界别委员工作室' },
    { id: 4, name: '望江街道委员工作室', street: '望江街道', category: '社会福利和保障', starRating: 4, activityCount: 8, description: '社会福利界别委员工作室' },
    { id: 5, name: '南星街道委员工作室', street: '南星街道', category: '环境资源和农业', starRating: 4, activityCount: 9, description: '环境资源界别委员工作室' },
  ];
};

// 获取数据目录信息
export const getDataDirectoryInfo = () => {
  return {
    basePath: 'D:\\zhuomian\\ddd\\data',
    directories: [
      { name: '1. 委员之家', description: '委员基本信息与档案管理', fileCount: 3 },
      { name: '2. 街道委员小组', description: '14个街道委员小组组织管理', fileCount: 1 },
      { name: '3. 界别基本情况', description: '16个政协界别信息与活动管理', fileCount: 17 },
      { name: '4. 政协界别委员联系界别群众实践 - 南城发展', description: '南城发展专题实践', fileCount: 3 },
      { name: '5. 委员履职平台', description: '50个委员工作室履职记录与统计', fileCount: 27 },
      { name: '6. 星级委员评定', description: '委员履职星级评定管理', fileCount: 1 },
      { name: '7. 2026年度履职计划', description: '年度工作计划与目标管理', fileCount: 2 },
    ],
    totalFiles: 54,
    lastUpdated: '2026-04-23'
  };
};