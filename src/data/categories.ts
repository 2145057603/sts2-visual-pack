export interface Category {
  id: string;
  name: string;
  description: string;
  cover?: string;
  order: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'mod-skin',
    name: '角色皮肤',
    description: '修改游戏角色外观，让战士、猎人、机器人焕然一新',
    order: 1,
  },
  {
    id: 'card-skin',
    name: '卡牌皮肤',
    description: '替换卡牌图案与视觉效果，打造专属卡组风格',
    order: 2,
  },
  {
    id: 'relic-skin',
    name: '遗物皮肤',
    description: '遗物外观替换包，个性化你的遗物收藏',
    order: 3,
  },
  {
    id: 'ui-mod',
    name: 'UI 美化',
    description: '界面与字体美化 Mod，提升游戏视觉体验',
    order: 4,
  },
  {
    id: 'gameplay-mod',
    name: '玩法 Mod',
    description: '新增或修改游戏机制，探索全新玩法可能',
    order: 5,
  },
  {
    id: 'other',
    name: '其他',
    description: '其他类型的实用资源与工具',
    order: 6,
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.name])
);
