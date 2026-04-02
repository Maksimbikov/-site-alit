import { Zap, Brain, PanelLeftOpen } from 'lucide-react';
import { clsx } from 'clsx';

export default function ChatHeader({ model, setModel, toggleSidebar, isSidebarOpen }) {
  return (
    <header className="h-14 flex items-center justify-between px-4 border-b border-neutral-800/50 shrink-0">
      <div className="flex items-center gap-2">
        {!isSidebarOpen && (
          <button onClick={toggleSidebar} className="text-neutral-400 hover:text-white mr-2">
            <PanelLeftOpen className="w-5 h-5" />
          </button>
        )}
        
        <div className="flex bg-neutral-900 rounded-lg p-1 border border-neutral-800">
          <button 
            onClick={() => setModel('fast')}
            className={clsx(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              model === 'fast' ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:text-neutral-200"
            )}
          >
            <Zap className="w-4 h-4" />
            Fast
          </button>
          <button 
            onClick={() => setModel('think')}
            className={clsx(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              model === 'think' ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-400 hover:text-neutral-200"
            )}
          >
            <Brain className="w-4 h-4" />
            Think
          </button>
        </div>
      </div>
    </header>
  );
}
