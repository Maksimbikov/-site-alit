import { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { clsx } from 'clsx';

export default function ChatInput({ onSendMessage, disabled }) {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (text.trim() && !disabled) {
      onSendMessage(text.trim());
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [text]);

  return (
    <div className="p-4 bg-neutral-950 shrink-0">
      <div className="max-w-3xl mx-auto relative flex items-end gap-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-2 focus-within:border-neutral-600 transition-colors shadow-sm">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Спросить Alit..."
          className="w-full max-h-[200px] bg-transparent text-white placeholder-neutral-500 resize-none outline-none py-2 px-3 text-sm"
          rows={1}
          disabled={disabled}
        />
        <button
          onClick={handleSend}
          disabled={!text.trim() || disabled}
          className={clsx(
            "p-2 rounded-xl flex items-center justify-center shrink-0 transition-all",
            text.trim() && !disabled
              ? "bg-white text-black hover:bg-neutral-200"
              : "bg-neutral-800 text-neutral-500"
          )}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <div className="text-center mt-2 text-xs text-neutral-500">
        Alit может допускать ошибки. Проверяйте важную информацию.
      </div>
    </div>
  );
}
