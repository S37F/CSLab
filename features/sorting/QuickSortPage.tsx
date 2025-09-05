
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import QuickSortArticle from './QuickSortArticle';
import QuickSortSimulator from './QuickSortSimulator';

const QuickSortPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <QuickSortArticle /> },
    { label: 'Interactive Simulator', content: <QuickSortSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Quick Sort</h1>
        <p className="text-text-tertiary mt-1">An efficient in-place sorting algorithm that uses a divide and conquer strategy.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default QuickSortPage;
