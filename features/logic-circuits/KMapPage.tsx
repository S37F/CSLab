import React from 'react';
import Tabs from '../../components/ui/Tabs';
import KMapArticle from './KMapArticle';
import KMapSimulator from './KMapSimulator';

const KMapPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <KMapArticle /> },
    { label: 'Interactive Solver', content: <KMapSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Karnaugh Map (K-Map) Solver</h1>
        <p className="text-text-tertiary mt-1">A graphical method for simplifying Boolean algebra expressions.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default KMapPage;
