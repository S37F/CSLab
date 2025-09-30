
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import FIFOPageReplacementArticle from './FIFOPageReplacementArticle';
import FIFOPageReplacementSimulator from './FIFOPageReplacementSimulator';

const FIFOPageReplacementPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <FIFOPageReplacementArticle /> },
    { label: 'Interactive Simulator', content: <FIFOPageReplacementSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">FIFO Page Replacement</h1>
        <p className="text-text-tertiary mt-1">A memory management algorithm where the oldest page in memory is replaced.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default FIFOPageReplacementPage;
