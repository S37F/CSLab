import React from 'react';
import Card from '../../components/ui/Card';

const RegexToDFASimulator: React.FC = () => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center h-full text-text-tertiary p-8">
        <h2 className="text-2xl font-bold">Implementation Coming Soon</h2>
        <p>The interactive simulator for converting a Regular Expression to a DFA is under construction.</p>
        <p>This feature will allow you to input a regex and see the corresponding state machine get built visually.</p>
      </div>
    </Card>
  );
};

export default RegexToDFASimulator;
