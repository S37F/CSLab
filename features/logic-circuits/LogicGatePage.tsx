import React from 'react';
import Tabs from '../../components/ui/Tabs';
import LogicGateArticle from './LogicGateArticle';
import LogicGateSimulator from './LogicGateSimulator';

const LogicGatePage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <LogicGateArticle /> },
    { label: 'Interactive Simulator', content: <LogicGateSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Logic Gate Simulator</h1>
        <p className="text-text-tertiary mt-1">The basic building blocks of a digital system.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default LogicGatePage;
