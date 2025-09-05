import React from 'react';
import Tabs from '../../components/ui/Tabs';
import SignedMagnitudeArticle from './SignedMagnitudeArticle';
import SignedMagnitudeSimulator from './SignedMagnitudeSimulator';

const SignedMagnitudePage: React.FC = () => {
  const tabs = [
    { label: 'Educational Article', content: <SignedMagnitudeArticle /> },
    { label: 'Interactive Calculator', content: <SignedMagnitudeSimulator /> },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-text-primary">Signed Magnitude</h1>
        <p className="text-text-tertiary mt-1">A simple method for representing signed integers using a sign bit and a magnitude.</p>
      </header>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default SignedMagnitudePage;