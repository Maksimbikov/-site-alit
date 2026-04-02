import { Sparkles, User } from 'lucide-react';
import { clsx } from 'clsx';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={clsx("flex gap-4 max-w-3xl mx-auto w-full", isUser ? "flex-row-reverse" : "")}>
      <div className={clsx(
        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
        isUser ? "bg-neutral-800" : "bg-white text-black"
      )}>
        {isUser ? <User className="w-5 h-5 text-neutral-300" /> : <Sparkles className="w-5 h-5" />}
      </div>
      
      <div className={clsx(
        "flex flex-col gap-1 min-w-0",
        isUser ? "items-end" : "items-start"
      )}>
        <div className="text-sm font-medium text-neutral-400">
          {isUser ? 'Вы' : 'Alit'}
        </div>
        <div className={clsx(
          "px-4 py-2.5 rounded-2xl max-w-prose text-sm leading-relaxed",
          isUser ? "bg-neutral-800 text-white rounded-tr-sm" : "bg-transparent text-neutral-200"
        )}>
          {message.content}
        </div>
      </div>
    </div>
  );
}
