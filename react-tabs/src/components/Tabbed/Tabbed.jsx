import { useState } from "react";
import Tab from "../Tab/Tab";
import TabContent from "../TabContent/TabContent";

export default function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>
      {activeTab <= 2 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab).summary}
        />
      ) : (
        <div className="tab-content">
          <h4>Stay tuned with us :)</h4>
        </div>
      )}
    </div>
  );
}
