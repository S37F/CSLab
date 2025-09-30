
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import BFSDFSArticle from './BFSDFSArticle';
import BFSDFSSimulator from './BFSDFSSimulator';

const BFSDFSPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <BFSDFSArticle /> },
    { label: 'Interactive Simulator', content: <BFSDFSSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">BFS & DFS Traversal</h1>
        <p className="text-text-tertiary mt-1">Fundamental algorithms for traversing or searching tree or graph data structures.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default BFSDFSPage;
