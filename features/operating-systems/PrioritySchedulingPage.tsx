import React from 'react';
import Tabs from '../../components/ui/Tabs';
import PrioritySchedulingArticle from './PrioritySchedulingArticle';
import PrioritySchedulingSimulator from './PrioritySchedulingSimulator';

const PrioritySchedulingPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <PrioritySchedulingArticle /> },
    { label: 'Interactive Simulator', content: <PrioritySchedulingSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Priority Scheduling</h1>
        <p className="text-text-tertiary mt-1">A scheduling algorithm that selects processes based on their priority.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default PrioritySchedulingPage;