
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import HuffmanCodingArticle from './HuffmanCodingArticle';
import HuffmanCodingSimulator from './HuffmanCodingSimulator';

const HuffmanCodingPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <HuffmanCodingArticle /> },
    { label: 'Interactive Simulator', content: <HuffmanCodingSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Huffman Coding</h1>
        <p className="text-text-tertiary mt-1">A lossless data compression algorithm using variable-length codes.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default HuffmanCodingPage;
