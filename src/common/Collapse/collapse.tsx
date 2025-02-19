import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface CollapsiblePanelProps {
  header: string;
  panelWidth?: string;
  children: React.ReactNode;
}

const CollapsePanel: React.FC<CollapsiblePanelProps> = ({ header, panelWidth, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Collapse style={{ width: panelWidth || '100%'}}>
      <Panel header={header} key="1">
        {children}
      </Panel>
    </Collapse>
    </div>
  );
};

export default CollapsePanel;