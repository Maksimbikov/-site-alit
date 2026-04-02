import { Loader2, Search, Edit3, Sparkles } from 'lucide-react';

export default function LoadingState({ status }) {
  if (status === 'idle') return null;

  const getStatusConfig = () => {
    switch (status) {
      case 'thinking':
        return { icon: Loader2, text: 'Думает...', spin: true };
      case 'searching_web':
        return { icon: Search, text: 'Поиск в сети...', spin: false };
      case 'writing_answer':
        return { icon: Edit3, text: 'Пишет ответ...', spin: false };
      default:
        return { icon: Loader2, text: 'Загрузка...', spin: true };
    }
  };

  const { icon: Icon, text, spin } = getStatusConfig();

  return (
    <div className="flex gap-4 max-w-3xl mx-auto w-full">
      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0">
        <Sparkles className="w-5 h-5" />
      </div>
      
      <div className="flex flex-col gap-1 items-start">
        <div className="text-sm font-medium text-neutral-400">Alit</div>
        <div className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-400">
          <Icon className={`w-4 h-4 ${spin ? 'animate-spin' : 'animate-pulse'}`} />
          <span className="animate-pulse">{text}</span>
        </div>
      </div>
    </div>
  );
}
