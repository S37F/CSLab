

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './features/common/LandingPage';

// Page Components
import AboutPage from './features/common/AboutPage';
import ContactPage from './features/common/ContactPage';

// Sorting
import BubbleSortPage from './features/sorting/BubbleSortPage';
import InsertionSortPage from './features/sorting/InsertionSortPage';
import MergeSortPage from './features/sorting/MergeSortPage';
import QuickSortPage from './features/sorting/QuickSortPage';
import SelectionSortPage from './features/sorting/SelectionSortPage';
// OS
import FCFSSchedulingPage from './features/operating-systems/FCFSSchedulingPage';
import SJFSchedulingPage from './features/operating-systems/SJFSchedulingPage';
import RoundRobinPage from './features/operating-systems/RoundRobinPage';
import PrioritySchedulingPage from './features/operating-systems/PrioritySchedulingPage';
import BankersAlgorithmPage from './features/operating-systems/BankersAlgorithmPage';
// Cryptography
import CaesarCipherPage from './features/cryptography/CaesarCipherPage';
import RSAPage from './features/cryptography/RSAPage';
// Number Systems
import BaseConversionPage from './features/number-systems/BaseConversionPage';
import TwosComplementPage from './features/number-systems/TwosComplementPage';
import IEEE754Page from './features/number-systems/IEEE754Page';
import SignedMagnitudePage from './features/number-systems/SignedMagnitudePage';
// Memory Management
import FIFOPageReplacementPage from './features/memory-management/FIFOPageReplacementPage';
import LRUPageReplacementPage from './features/memory-management/LRUPageReplacementPage';
import OptimalPageReplacementPage from './features/memory-management/OptimalPageReplacementPage';
// Compression
import HuffmanCodingPage from './features/compression/HuffmanCodingPage';
import RunLengthEncodingPage from './features/compression/RunLengthEncodingPage';
import LZWPage from './features/compression/LZWPage';
// Graph
import DijkstrasPage from './features/graph-algorithms/DijkstrasPage';
import BFSDFSPage from './features/graph-algorithms/BFSDFSPage';
import KruskalsPage from './features/graph-algorithms/KruskalsPage';
import PrimsPage from './features/graph-algorithms/PrimsPage';
import BellmanFordPage from './features/graph-algorithms/BellmanFordPage';
// Error Control
import ParityBitsPage from './features/error-control/ParityBitsPage';
import ChecksumPage from './features/error-control/ChecksumPage';
import CRCPage from './features/error-control/CRCPage';
import HammingCodePage from './features/error-control/HammingCodePage';
// Disk Scheduling
import FCFSDiskPage from './features/disk-scheduling/FCFSDiskPage';
import SSTFPage from './features/disk-scheduling/SSTFPage';
import SCANPage from './features/disk-scheduling/SCANPage';
import CSCANPage from './features/disk-scheduling/CSCANPage';
// Database
import NormalizationPage from './features/database/NormalizationPage';
import SerializabilityPage from './features/database/SerializabilityPage';
import TransactionSchedulesPage from './features/database/TransactionSchedulesPage';
// Automata
import DFAAcceptancePage from './features/automata/DFAAcceptancePage';
import RegexToDFAPage from './features/automata/RegexToDFAPage';
import CFGPage from './features/automata/CFGPage';
// Logic Circuits
import LogicGatePage from './features/logic-circuits/LogicGatePage';
import BooleanAlgebraPage from './features/logic-circuits/BooleanAlgebraPage';
import KMapPage from './features/logic-circuits/KMapPage';
// Icons
import { CodeIcon, BarChartIcon, DatabaseIcon, CpuIcon, LockIcon, ShieldCheckIcon, CircuitBoardIcon } from './components/Icons';
import type { Algorithm } from './types';

const algorithms: Algorithm[] = [
  { name: 'Base Conversion', category: 'Number Systems' },
  { name: 'Two\'s Complement', category: 'Number Systems' },
  { name: 'IEEE-754', category: 'Number Systems' },
  { name: 'Signed Magnitude', category: 'Number Systems' },
  { name: 'Parity Bits', category: 'Error Control' },
  { name: 'Checksum', category: 'Error Control' },
  { name: 'CRC', category: 'Error Control' },
  { name: 'Hamming Codes', category: 'Error Control' },
  { name: 'Huffman Coding', category: 'Compression' },
  { name: 'Run-Length Encoding', category: 'Compression' },
  { name: 'LZW Compression', category: 'Compression' },
  { name: 'FCFS Scheduling', category: 'Operating Systems' },
  { name: 'SJF Scheduling', category: 'Operating Systems' },
  { name: 'Round Robin', category: 'Operating Systems' },
  { name: 'Priority Scheduling', category: 'Operating Systems' },
  { name: 'Banker\'s Algorithm', category: 'Operating Systems' },
  { name: 'FIFO Page Replacement', category: 'Memory Management' },
  { name: 'LRU Page Replacement', category: 'Memory Management' },
  { name: 'Optimal Page Replacement', category: 'Memory Management' },
  { name: 'FCFS Disk', category: 'Disk Scheduling' },
  { name: 'SSTF', category: 'Disk Scheduling' },
  { name: 'SCAN', category: 'Disk Scheduling' },
  { name: 'C-SCAN', category: 'Disk Scheduling' },
  { name: 'BFS/DFS', category: 'Graph Algorithms' },
  { name: 'Dijkstra\'s', category: 'Graph Algorithms' },
  { name: 'Kruskal\'s MST', category: 'Graph Algorithms' },
  { name: 'Prim\'s MST', category: 'Graph Algorithms' },
  { name: 'Bellman-Ford', category: 'Graph Algorithms' },
  { name: 'Bubble Sort', category: 'Sorting' },
  { name: 'Insertion Sort', category: 'Sorting' },
  { name: 'Selection Sort', category: 'Sorting' },
  { name: 'Merge Sort', category: 'Sorting' },
  { name: 'Quick Sort', category: 'Sorting' },
  { name: 'Normalization', category: 'Database' },
  { name: 'Serializability', category: 'Database' },
  { name: 'Transaction Schedules', category: 'Database' },
  { name: 'DFA Acceptance', category: 'Automata' },
  { name: 'Regex to DFA', category: 'Automata' },
  { name: 'Context-Free Grammars', category: 'Automata' },
  { name: 'Logic Gate Simulator', category: 'Logic Circuits' },
  { name: 'Boolean Algebra', category: 'Logic Circuits' },
  { name: 'K-Map Solver', category: 'Logic Circuits' },
  { name: 'Caesar Cipher', category: 'Cryptography' },
  { name: 'RSA Algorithm', category: 'Cryptography' },
];

// FIX: Changed React.ReactNode to React.ReactElement to allow cloning with new props.
// FIX: The type for `categoryIcons` was too generic (`React.ReactElement`), causing TypeScript to fail to recognize the `className` prop when using `React.cloneElement`. I've made the type more specific to `React.ReactElement<{ className?: string }>` to solve the overload error.
const categoryIcons: { [key: string]: React.ReactElement<{ className?: string }> } = {
  'Number Systems': <CpuIcon className="w-6 h-6 text-blue-400" />,
  'Error Control': <ShieldCheckIcon className="w-6 h-6 text-emerald-400" />,
  'Compression': <DatabaseIcon className="w-6 h-6 text-amber-400" />,
  'Operating Systems': <CpuIcon className="w-6 h-6 text-rose-400" />,
  'Memory Management': <DatabaseIcon className="w-6 h-6 text-indigo-400" />,
  'Disk Scheduling': <CpuIcon className="w-6 h-6 text-cyan-400" />,
  'Graph Algorithms': <CodeIcon className="w-6 h-6 text-fuchsia-400" />,
  'Sorting': <BarChartIcon className="w-6 h-6 text-orange-400" />,
  'Database': <DatabaseIcon className="w-6 h-6 text-lime-400" />,
  'Automata': <CodeIcon className="w-6 h-6 text-sky-400" />,
  'Cryptography': <LockIcon className="w-6 h-6 text-red-400" />,
  'Logic Circuits': <CircuitBoardIcon className="w-6 h-6 text-teal-400" />,
};

type Page = 'simulator' | 'about' | 'contact';

const App: React.FC = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('simulator');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('Bubble Sort');

  const groupedAlgorithms = algorithms.reduce((acc, algo) => {
    (acc[algo.category] = acc[algo.category] || []).push(algo);
    return acc;
  }, {} as Record<string, Algorithm[]>);

  const sortedCategories = Object.keys(groupedAlgorithms).sort();

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };
  
  const handleSelectAlgorithm = (algoName: string) => {
    setSelectedAlgorithm(algoName);
  }

  const handleStart = () => {
    setShowLandingPage(false);
  };

  const renderAlgorithmPage = () => {
    switch (selectedAlgorithm) {
      // Sorting
      case 'Bubble Sort': return <BubbleSortPage />;
      case 'Insertion Sort': return <InsertionSortPage />;
      case 'Selection Sort': return <SelectionSortPage />;
      case 'Merge Sort': return <MergeSortPage />;
      case 'Quick Sort': return <QuickSortPage />;
      
      // Operating Systems
      case 'FCFS Scheduling': return <FCFSSchedulingPage />;
      case 'SJF Scheduling': return <SJFSchedulingPage />;
      case 'Round Robin': return <RoundRobinPage />;
      case 'Priority Scheduling': return <PrioritySchedulingPage />;
      case 'Banker\'s Algorithm': return <BankersAlgorithmPage />;
      
      // Cryptography
      case 'Caesar Cipher': return <CaesarCipherPage />;
      case 'RSA Algorithm': return <RSAPage />;

      // Number Systems
      case 'Base Conversion': return <BaseConversionPage />;
      case 'Two\'s Complement': return <TwosComplementPage />;
      case 'IEEE-754': return <IEEE754Page />;
      case 'Signed Magnitude': return <SignedMagnitudePage />;

      // Memory Management
      case 'FIFO Page Replacement': return <FIFOPageReplacementPage />;
      case 'LRU Page Replacement': return <LRUPageReplacementPage />;
      case 'Optimal Page Replacement': return <OptimalPageReplacementPage />;
      
      // Compression
      case 'Huffman Coding': return <HuffmanCodingPage />;
      case 'Run-Length Encoding': return <RunLengthEncodingPage />;
      case 'LZW Compression': return <LZWPage />;
      
      // Graph Algorithms
      case 'Dijkstra\'s': return <DijkstrasPage />;
      case 'BFS/DFS': return <BFSDFSPage />;
      case 'Kruskal\'s MST': return <KruskalsPage />;
      case 'Prim\'s MST': return <PrimsPage />;
      case 'Bellman-Ford': return <BellmanFordPage />;

      // Error Control
      case 'Parity Bits': return <ParityBitsPage />;
      case 'Checksum': return <ChecksumPage />;
      case 'CRC': return <CRCPage />;
      case 'Hamming Codes': return <HammingCodePage />;

      // Disk Scheduling
      case 'FCFS Disk': return <FCFSDiskPage />;
      case 'SSTF': return <SSTFPage />;
      case 'SCAN': return <SCANPage />;
      case 'C-SCAN': return <CSCANPage />;
      
      // Database
      case 'Normalization': return <NormalizationPage />;
      case 'Serializability': return <SerializabilityPage />;
      case 'Transaction Schedules': return <TransactionSchedulesPage />;

      // Automata
      case 'DFA Acceptance': return <DFAAcceptancePage />;
      case 'Regex to DFA': return <RegexToDFAPage />;
      case 'Context-Free Grammars': return <CFGPage />;

      // Logic Circuits
      case 'Logic Gate Simulator': return <LogicGatePage />;
      case 'Boolean Algebra': return <BooleanAlgebraPage />;
      case 'K-Map Solver': return <KMapPage />;

      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-text-tertiary">
            <h2 className="text-2xl font-bold">Implementation Coming Soon</h2>
            <p>The interactive simulator for "{selectedAlgorithm}" is under construction.</p>
          </div>
        );
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
        case 'simulator':
            return (
                <div className="flex flex-1 overflow-hidden">
                    <aside className="w-64 bg-background-secondary p-4 border-r border-border overflow-y-auto flex-shrink-0">
                      <nav className="space-y-4">
                        {sortedCategories.map((category) => (
                          <div key={category}>
                            <h2 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2 flex items-center">
                              {/* FIX: Removed type assertion which was causing an error. The type of categoryIcons was narrowed to fix this. */}
                              {React.cloneElement(categoryIcons[category], { className: "w-4 h-4 mr-2"})} {category}
                            </h2>
                            <ul className="space-y-1">
                              {groupedAlgorithms[category].sort((a,b) => a.name.localeCompare(b.name)).map((algo) => (
                                <li key={algo.name}>
                                  <button
                                    onClick={() => handleSelectAlgorithm(algo.name)}
                                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 flex items-center ${
                                      selectedAlgorithm === algo.name
                                        ? 'bg-accent-primary text-white font-semibold'
                                        : 'text-text-secondary hover:bg-background-elevated hover:text-text-primary'
                                    }`}
                                  >
                                    {algo.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </nav>
                    </aside>
                    <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
                      {/* FIX: The framer-motion props were causing errors, likely due to a type definition issue or library version mismatch. Removing them to resolve the error. */}
                      <motion.div
                        key={selectedAlgorithm}
                        
                        
                        
                      >
                        {renderAlgorithmPage()}
                      </motion.div>
                    </main>
                </div>
            );
        case 'about':
            return <AboutPage
                stats={{
                    algorithms: algorithms.length,
                    categories: sortedCategories.length,
                }}
                categories={sortedCategories}
                groupedAlgorithms={groupedAlgorithms}
                categoryIcons={categoryIcons}
            />;
        case 'contact':
            return <ContactPage categories={sortedCategories} />;
        default:
            return null;
    }
  };
  
  if (showLandingPage) {
    return <LandingPage onStart={handleStart} />;
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background-primary text-text-primary">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      {renderCurrentPage()}
      <Footer onNavigate={handleNavigation} onSelectAlgorithm={handleSelectAlgorithm} />
    </div>
  );
};

export default App;
