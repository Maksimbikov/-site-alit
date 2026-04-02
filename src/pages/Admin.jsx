import { useState } from 'react';
import { Sparkles, Save, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';

export default function Admin() {
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [message, setMessage] = useState('Извините, но, к сожалению, сейчас ведутся технические работы. Пожалуйста, попробуйте зайти позже.');
  const [endTime, setEndTime] = useState('');

  const handleSave = () => {
    alert('Настройки сохранены (Mock)');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans p-6">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center gap-3 mb-10 pb-6 border-b border-neutral-800">
          <Sparkles className="w-6 h-6 text-white" />
          <h1 className="text-xl font-medium text-white">Alit Admin</h1>
        </header>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-5 h-5 text-neutral-400" />
            <h2 className="text-lg font-medium text-white">Настройки техработ (Maintenance)</h2>
          </div>

          <div className="space-y-6">
            {/* Switch */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Режим техработ</div>
                <div className="text-sm text-neutral-500">Включить страницу-заглушку для всех пользователей</div>
              </div>
              <button 
                onClick={() => setIsMaintenance(!isMaintenance)}
                className={clsx(
                  "w-12 h-6 rounded-full transition-colors relative",
                  isMaintenance ? "bg-white" : "bg-neutral-700"
                )}
              >
                <div className={clsx(
                  "w-4 h-4 rounded-full bg-black absolute top-1 transition-transform",
                  isMaintenance ? "translate-x-7" : "translate-x-1"
                )} />
              </button>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-300">Текст сообщения</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-neutral-600 min-h-[100px]"
              />
            </div>

            {/* End Time */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-300">Примерное время окончания</label>
              <input 
                type="datetime-local" 
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-neutral-600"
              />
            </div>

            <div className="pt-4 border-t border-neutral-800 flex justify-end">
              <button 
                onClick={handleSave}
                className="flex items-center gap-2 bg-white text-black font-medium rounded-lg px-5 py-2.5 hover:bg-neutral-200 transition-colors"
              >
                <Save className="w-4 h-4" />
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
