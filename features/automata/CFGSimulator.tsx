import React from 'react';
import Card from '../../components/ui/Card';

const CFGSimulator: React.FC = () => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center h-full text-text-tertiary p-8">
        <h2 className="text-2xl font-bold">Implementation Coming Soon</h2>
        <p>The interactive simulator for Context-Free Grammars is under construction.</p>
        <p>This feature will allow you to define a CFG and test if strings belong to the language it generates.</p>
      </div>
    </Card>
  );
};

export default CFGSimulator;
