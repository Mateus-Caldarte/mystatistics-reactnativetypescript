import React, { useState } from "react";
import { View } from "react-native";
import { TabItem, TabProps } from "./Models";
import TabView from "./view";

interface Props extends TabProps {
  tabs: TabItem[];
}

const Tab: React.FC<Props> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <View style={{ width: "100%" }}>
      <TabView
        tabs={tabs}
        activeIndex={activeIndex}
        onTabClick={handleTabClick}
      />
    </View>
  );
};

export default Tab;
