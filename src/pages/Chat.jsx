import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatHeader from '../components/ChatHeader';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';

export default function Chat() {
  const [model, setModel] = useState('fast'); // 'fast' | 'think'
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Привет! Я Alit. Чем могу помочь сегодня?' }
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [status, setStatus] = useState('idle'); // 'idle', 'thinking', 'searching_web', 'writing_answer'

  const handleSendMessage = (text) => {
    const newMsg = { id: Date.now(), role: 'user', content: text };
    setMessages(prev => [...prev, newMsg]);
    
    // Simulate AI response process
    setStatus('thinking');
    setTimeout(() => {
      setStatus('searching_web');
      setTimeout(() => {
        setStatus('writing_answer');
        setTimeout(() => {
          setStatus('idle');
          setMessages(prev => [...prev, { id: Date.now(), role: 'assistant', content: 'Это демонстрационный ответ. В реальном приложении здесь будет ответ от API.' }]);
        }, 1500);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-200 font-sans overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <ChatHeader 
          model={model} 
          setModel={setModel} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          isSidebarOpen={isSidebarOpen}
        />
        
        <ChatMessages messages={messages} status={status} />
        
        <ChatInput onSendMessage={handleSendMessage} disabled={status !== 'idle'} />
      </div>
    </div>
  );
}
