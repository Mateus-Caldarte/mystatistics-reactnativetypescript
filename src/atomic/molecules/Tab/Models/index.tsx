export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface TabViewProps {
  tabs: TabItem[];
}

export interface TabProps {}

export interface TabViewRenderProps extends TabViewProps {
  activeIndex: number;
  onTabClick: (index: number) => void;
}
