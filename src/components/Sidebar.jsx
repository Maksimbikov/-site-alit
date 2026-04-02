import { Plus, MessageSquare, Settings, PanelLeftClose, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const chats = [
    { id: 1, title: 'Идеи для стартапа' },
    { id: 2, title: 'Помощь с кодом React' },
    { id: 3, title: 'Рецепт пасты' },
  ];

  return (
    <div className={clsx(
      "flex flex-col bg-neutral-900 border-r border-neutral-800 transition-all duration-300 shrink-0",
      isOpen ? "w-64" : "w-0 overflow-hidden border-none"
    )}>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-white" />
          <span className="font-medium text-white">Alit</span>
        </div>
        <button onClick={toggleSidebar} className="text-neutral-400 hover:text-white md:hidden">
          <PanelLeftClose className="w-5 h-5" />
        </button>
      </div>

      <div className="px-3 pb-4">
        <button className="w-full flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg px-3 py-2 transition-colors text-sm font-medium">
          <Plus className="w-4 h-4" />
          Новый чат
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        <div className="text-xs font-medium text-neutral-500 mb-2 px-2">Сегодня</div>
        {chats.map(chat => (
          <button key={chat.id} className="w-full flex items-center gap-2 px-2 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded-md transition-colors text-left truncate">
            <MessageSquare className="w-4 h-4 shrink-0 opacity-70" />
            <span className="truncate">{chat.title}</span>
          </button>
        ))}
      </div>

      <div className="p-3 border-t border-neutral-800">
        <button className="w-full flex items-center gap-2 px-2 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded-md transition-colors">
          <Settings className="w-4 h-4" />
          Настройки
        </button>
      </div>
    </div>
  );
}
