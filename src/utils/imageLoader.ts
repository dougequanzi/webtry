// 图片加载工具 - 直接从文件系统读取图片
// 注意：在开发环境中，我们需要将图片放在public目录下
// 在生产环境中，这些图片应该从服务器API获取

export interface CategoryImage {
  id: string;
  name: string; // 界别名称，如"中共"
  code: string; // 界别代码，如"01"
  images: ImageInfo[];
}

export interface ImageInfo {
  id: string;
  filename: string;
  path: string; // 相对于public目录的路径
  title: string;
  description?: string;
  date?: string;
  category: string;
}

// 界别映射
const CATEGORY_MAP: Record<string, { name: string; code: string }> = {
  '1中共': { name: '中共', code: '01' },
  '2民革': { name: '民革', code: '02' },
  '3民盟、民进': { name: '民盟、民进', code: '03' },
  '4工会': { name: '工会', code: '04' },
  '5妇联': { name: '妇联', code: '05' },
  '6青联': { name: '青联', code: '06' },
  '7科技、科协': { name: '科技、科协', code: '07' },
  '8侨、台': { name: '侨、台', code: '08' },
  '9新闻文体': { name: '新闻文体', code: '09' },
  '10经济': { name: '经济', code: '10' },
  '11环境资源和农业': { name: '环境资源和农业', code: '11' },
  '12教育': { name: '教育', code: '12' },
  '13医卫': { name: '医卫', code: '13' },
  '14社会福利和保障': { name: '社会福利和保障', code: '14' },
  '15民宗': { name: '民宗', code: '15' },
  '16特邀': { name: '特邀', code: '16' },
};

// 模拟从文件系统加载图片数据
// 在实际项目中，这些数据应该从服务器API获取
export const loadCategoryImages = async (): Promise<CategoryImage[]> => {
  // 这里模拟加载数据
  // 实际开发中，应该从服务器获取真实的图片列表
  
  const categories: CategoryImage[] = Object.entries(CATEGORY_MAP).map(([folder, info]) => ({
    id: info.code,
    name: info.name,
    code: info.code,
    images: generateMockImages(info.name, info.code)
  }));

  return categories;
};

// 生成实际的图片数据
const generateMockImages = (categoryName: string, categoryCode: string): ImageInfo[] => {
  // 根据界别代码返回实际的图片数据
  const imageData: Record<string, ImageInfo[]> = {
    '01': [ // 中共
      {
        id: '01-1',
        filename: '2024.02.02 中共界别小组讨论会.webp',
        path: '/images/category-01/image-1.webp',
        title: '中共界别小组讨论会',
        description: '中共界别委员开展小组讨论，研究政协工作',
        date: '2024.02.02',
        category: '中共'
      },
      {
        id: '01-2',
        filename: '2023.11.15 中共界别调研活动.webp',
        path: '/images/category-01/image-2.webp',
        title: '中共界别调研活动',
        description: '中共界别委员深入基层开展调研工作',
        date: '2023.11.15',
        category: '中共'
      }
    ],
    '10': [ // 经济
      {
        id: '10-1',
        filename: '2024.03.10 经济界别企业发展座谈会.webp',
        path: '/images/category-10/image-1.webp',
        title: '经济界别企业发展座谈会',
        description: '经济界别委员与企业代表座谈，共商发展大计',
        date: '2024.03.10',
        category: '经济'
      },
      {
        id: '10-2',
        filename: '2023.12.20 经济界别企业走访调研.webp',
        path: '/images/category-10/image-2.webp',
        title: '经济界别企业走访调研',
        description: '经济界别委员走访企业，了解经营情况',
        date: '2023.12.20',
        category: '经济'
      }
    ],
    '12': [ // 教育
      {
        id: '12-1',
        filename: '2024.04.05 教育界别学校调研.webp',
        path: '/images/category-12/image-1.webp',
        title: '教育界别学校调研',
        description: '教育界别委员调研学校教育工作',
        date: '2024.04.05',
        category: '教育'
      },
      {
        id: '12-2',
        filename: '2023.09.10 教育界别教师节座谈会.webp',
        path: '/images/category-12/image-2.webp',
        title: '教育界别教师节座谈会',
        description: '教育界别委员与教师代表共庆教师节',
        date: '2023.09.10',
        category: '教育'
      }
    ],
    '13': [ // 医卫
      {
        id: '13-1',
        filename: '2024.01.20 医卫界别健康义诊.webp',
        path: '/images/category-13/image-1.webp',
        title: '医卫界别健康义诊',
        description: '医卫界别委员开展健康义诊服务群众',
        date: '2024.01.20',
        category: '医卫'
      },
      {
        id: '13-2',
        filename: '2023.10.15 医卫界别医疗技术培训.webp',
        path: '/images/category-13/image-2.webp',
        title: '医卫界别医疗技术培训',
        description: '医卫界别委员组织医疗技术培训',
        date: '2023.10.15',
        category: '医卫'
      }
    ]
  };

  return imageData[categoryCode] || [];
};

// 生成随机日期
const generateRandomDate = (): string => {
  const year = 2022 + Math.floor(Math.random() * 4); // 2022-2025
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

// 获取单个界别的图片
export const getCategoryImages = async (categoryCode: string): Promise<ImageInfo[]> => {
  const categories = await loadCategoryImages();
  const category = categories.find(cat => cat.code === categoryCode);
  return category?.images || [];
};

// 获取所有图片
export const getAllImages = async (): Promise<ImageInfo[]> => {
  const categories = await loadCategoryImages();
  return categories.flatMap(cat => cat.images);
};

// 搜索图片
export const searchImages = async (keyword: string): Promise<ImageInfo[]> => {
  const allImages = await getAllImages();
  const lowerKeyword = keyword.toLowerCase();
  
  return allImages.filter(image => 
    image.title.toLowerCase().includes(lowerKeyword) ||
    image.description?.toLowerCase().includes(lowerKeyword) ||
    image.category.toLowerCase().includes(lowerKeyword)
  );
};