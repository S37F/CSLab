
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import RSAArticle from './RSAArticle';
import RSASimulator from './RSASimulator';

const RSAPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <RSAArticle /> },
    { label: 'Interactive Calculator', content: <RSASimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">RSA Algorithm</h1>
        <p className="text-text-tertiary mt-1">A foundational public-key cryptosystem for secure data transmission.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default RSAPage;
