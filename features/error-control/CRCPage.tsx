
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import CRCArticle from './CRCArticle';
import CRCSimulator from './CRCSimulator';

const CRCPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <CRCArticle /> },
    { label: 'Interactive Calculator', content: <CRCSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Cyclic Redundancy Check (CRC)</h1>
        <p className="text-text-tertiary mt-1">A powerful error-detecting code based on polynomial division.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default CRCPage;
