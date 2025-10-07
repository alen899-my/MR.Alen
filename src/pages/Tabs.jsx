// File: Tabs.jsx
import React, { useState } from 'react';
import './Tabs.css'; // You'll need to create a Tabs.css file for styling

const Tabs = ({ tabs }) => {
  // Set the first tab's id as the initial active tab
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  // Find the content for the currently active tab
  const activeTabContent = tabs.find(tab => tab.id === activeTabId)?.content;

  return (
    <div className="tabs_component">
      {/* Tab Buttons */}
      <div className="tabs_nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab_button ${activeTabId === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTabId(tab.id)}
            aria-selected={activeTabId === tab.id}
            role="tab"
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="tabs_content" role="tabpanel" aria-labelledby={activeTabId}>
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tabs;