
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import CaesarCipherArticle from './CaesarCipherArticle';
import CaesarCipherSimulator from './CaesarCipherSimulator';

const CaesarCipherPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <CaesarCipherArticle /> },
    { label: 'Interactive Calculator', content: <CaesarCipherSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Caesar Cipher</h1>
        <p className="text-text-tertiary mt-1">One of the simplest and most widely known encryption techniques.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default CaesarCipherPage;
