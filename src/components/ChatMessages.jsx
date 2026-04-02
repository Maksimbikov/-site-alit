import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import LoadingState from './LoadingState';

export default function ChatMessages({ messages, status }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <LoadingState status={status} />
      <div ref={bottomRef} className="h-4" />
    </div>
  );
}
