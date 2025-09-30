
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getInsertionSortSimulation } from '../../services/insertionSortService';
import type { AlgorithmSimulation, AlgorithmStep } from '../../types';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Slider from '../../components/ui/Slider';
import { PlayIcon, PauseIcon, StepForwardIcon, RotateCcwIcon } from '../../components/Icons';
import { useInterval } from '../../hooks/useInterval';

const InsertionSortSimulator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('6, 5, 3, 1, 8, 7, 2, 4');
  const [array, setArray] = useState<number[]>([6, 5, 3, 1, 8, 7, 2, 4]);
  const [simulation, setSimulation] = useState<AlgorithmSimulation | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(50);
  
  const intervalDelay = useMemo(() => 1000 - (speed * 9.5), [speed]);

  const runSimulation = useCallback(() => {
    const parsedArray = inputValue.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
    if (parsedArray.length > 0) {
      setArray(parsedArray);
      const simData = getInsertionSortSimulation(parsedArray);
      setSimulation(simData);
      setCurrentStep(0);
      setIsPlaying(false);
    }
  }, [inputValue]);
  
  useEffect(() => {
    runSimulation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReset = () => {
    runSimulation();
  };

  const handleStepForward = () => {
    if (simulation && currentStep < simulation.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      setIsPlaying(false);
    }
  };

  useInterval(() => {
    if (isPlaying && simulation && currentStep < simulation.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else if (isPlaying) {
      setIsPlaying(false);
    }
  }, isPlaying ? intervalDelay : null);
  
  const stepData: AlgorithmStep | null = simulation ? simulation.steps[currentStep] : null;
  const maxValue = useMemo(() => Math.max(...array, 1), [array]);

  const getBarColor = (index: number) => {
    if (stepData?.state.highlights.inserting?.includes(index)) return 'bg-accent-success';
    if (stepData?.state.highlights.key?.includes(index)) return 'bg-yellow-500'; // Key color
    if (stepData?.state.highlights.shifting?.includes(index)) return 'bg-accent-warning';
    if (stepData?.state.highlights.comparing?.includes(index)) return 'bg-accent-primary';
    if (stepData?.state.sortedIndices.includes(index)) return 'bg-green-700'; // Sorted part color
    return 'bg-border';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="min-h-[500px]">
          <div className="flex flex-col h-full">
            <div className="flex-grow flex items-end justify-center space-x-2 p-4" style={{minHeight: '350px'}}>
              {stepData && (
                <AnimatePresence>
                  {stepData.state.array.map((value, index) => (
                    <motion.div
                      key={index}
                      layout
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-8 md:w-10 rounded-t-md transition-colors duration-300 ${getBarColor(index)}`}
                        style={{ height: `${(value / maxValue) * 100 * 2.5 + 20}px` }}
                      />
                      <span className="text-sm font-mono mt-2 text-text-secondary">{value}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
            <div className="p-4 border-t border-border mt-4">
              <p className="text-sm text-center font-mono text-text-secondary h-5">
                {stepData?.description}
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="lg:col-span-1 space-y-6">
        <Card title="Controls">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-text-secondary mb-1 block">Input Array (comma-separated)</label>
              <div className="flex space-x-2">
                <Input 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="e.g., 5, 2, 8, 1"
                  className="font-mono"
                />
                <Button onClick={runSimulation}>Run</Button>
              </div>
            </div>
            <div className="flex items-center justify-around pt-2">
              <Button onClick={handleReset} variant="ghost" size="lg"><RotateCcwIcon className="w-5 h-5"/></Button>
              <Button onClick={() => setIsPlaying(!isPlaying)} variant="primary" size="lg">
                {isPlaying ? <PauseIcon className="w-5 h-5"/> : <PlayIcon className="w-5 h-5"/>}
              </Button>
              <Button onClick={handleStepForward} variant="ghost" size="lg" disabled={!simulation || currentStep >= simulation.steps.length - 1}>
                <StepForwardIcon className="w-5 h-5"/>
              </Button>
            </div>
            <div>
              <Slider 
                label="Speed"
                min="1"
                max="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              />
            </div>
          </div>
        </Card>
        <Card title="Metrics">
            {stepData && (
              <div className="font-mono text-sm space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Step:</span>
                  <span className="text-text-primary">{currentStep} / {simulation!.steps.length - 1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Comparisons:</span>
                  <span className="text-text-primary">{stepData.metrics.comparisons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Shifts:</span>
                  <span className="text-text-primary">{stepData.metrics.swaps}</span>
                </div>
              </div>
            )}
        </Card>
        <Card title="Educational Notes">
           <div className="text-sm text-text-secondary h-24 overflow-y-auto">
             {stepData?.educational_notes && stepData.educational_notes.length > 0 ? (
                <ul className="list-disc list-inside space-y-2">
                    {stepData.educational_notes.map((note, idx) => <li key={idx}>{note}</li>)}
                </ul>
             ) : (
                <p>No notes for this step.</p>
             )}
           </div>
        </Card>
      </div>
    </div>
  );
};

export default InsertionSortSimulator;
