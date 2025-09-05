
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import RoundRobinArticle from './RoundRobinArticle';
import RoundRobinSimulator from './RoundRobinSimulator';

const RoundRobinPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <RoundRobinArticle /> },
    { label: 'Interactive Simulator', content: <RoundRobinSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Round Robin (RR) Scheduling</h1>
        <p className="text-text-tertiary mt-1">A preemptive scheduling algorithm designed for time-sharing systems.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default RoundRobinPage;
