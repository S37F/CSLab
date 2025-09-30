
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import FCFSDiskArticle from './FCFSDiskArticle';
import FCFSDiskSimulator from './FCFSDiskSimulator';

const FCFSDiskPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <FCFSDiskArticle /> },
    { label: 'Interactive Simulator', content: <FCFSDiskSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">FCFS Disk Scheduling</h1>
        <p className="text-text-tertiary mt-1">Services disk I/O requests in the order in which they arrive.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default FCFSDiskPage;
