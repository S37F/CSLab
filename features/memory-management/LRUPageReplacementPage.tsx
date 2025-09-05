
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import LRUPageReplacementArticle from './LRUPageReplacementArticle';
import LRUPageReplacementSimulator from './LRUPageReplacementSimulator';

const LRUPageReplacementPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <LRUPageReplacementArticle /> },
    { label: 'Interactive Simulator', content: <LRUPageReplacementSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">LRU Page Replacement</h1>
        <p className="text-text-tertiary mt-1">A memory management algorithm that replaces the least recently used page.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default LRUPageReplacementPage;
