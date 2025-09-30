import React from 'react';
import Tabs from '../../components/ui/Tabs';
import BankersAlgorithmArticle from './BankersAlgorithmArticle';
import BankersAlgorithmSimulator from './BankersAlgorithmSimulator';

const BankersAlgorithmPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <BankersAlgorithmArticle /> },
    { label: 'Interactive Simulator', content: <BankersAlgorithmSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Banker's Algorithm</h1>
        <p className="text-text-tertiary mt-1">A resource allocation and deadlock avoidance algorithm.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default BankersAlgorithmPage;