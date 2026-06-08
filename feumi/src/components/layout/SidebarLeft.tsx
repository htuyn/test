import { Menu } from 'antd';
import type { MenuProps } from 'antd';

interface SidebarLeftProps {
  selectedKey: string;
  onSelect: (key: string) => void;
  isAdmin: boolean;
}

export default function SidebarLeft({ selectedKey, onSelect, isAdmin }: SidebarLeftProps) {
  const items: MenuProps['items'] = [
    { key: '/', label: 'Câu hỏi' },
    { key: '/ask', label: 'Đặt câu hỏi' },
  ];

  if (isAdmin) {
    items.push({ key: '/admin/posts', label: 'Quản trị bài' });
    items.push({ key: '/admin/users', label: 'Quản trị user' });
  }

  return (
    <aside style={{ width: 220, paddingTop: 24, background: '#fff', borderRight: '1px solid #e8eaee', minHeight: 'calc(100vh - 64px)' }}>
      <Menu selectedKeys={[selectedKey]} mode="inline" items={items} onClick={(info) => onSelect(info.key as string)} />
    </aside>
  );
}
