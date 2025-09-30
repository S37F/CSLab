
import React from 'react';
import Tabs from '../../components/ui/Tabs';
import BaseConversionArticle from './BaseConversionArticle';
import BaseConversionSimulator from './BaseConversionSimulator';

const BaseConversionPage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <BaseConversionArticle /> },
    { label: 'Interactive Calculator', content: <BaseConversionSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Base Conversion</h1>
        <p className="text-text-tertiary mt-1">Convert numbers between different numeral systems (e.g., binary, decimal, hexadecimal).</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default BaseConversionPage;
