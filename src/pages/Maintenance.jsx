import { Sparkles, Clock } from 'lucide-react';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col justify-center items-center p-4 text-neutral-200 font-sans text-center">
      <div className="max-w-md flex flex-col items-center">
        <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 border border-neutral-800">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-2xl font-medium text-white mb-4">Технические работы</h1>
        
        <p className="text-neutral-400 mb-2">
          Извините, но, к сожалению, сейчас ведутся технические работы.
        </p>
        <p className="text-neutral-400 mb-8">
          Пожалуйста, попробуйте зайти позже.
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 w-full mb-8 flex items-center justify-center gap-3">
          <Clock className="w-5 h-5 text-neutral-500" />
          <div className="text-sm text-left">
            <div className="text-neutral-300">Примерное время восстановления:</div>
            <div className="text-white font-medium">Сегодня, 18:00 (МСК)</div>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="bg-white text-black font-medium rounded-lg px-6 py-2.5 hover:bg-neutral-200 transition-colors"
        >
          Повторить попытку
        </button>

        <p className="mt-8 text-xs text-neutral-600">
          Если работы затянутся, мы обновим информацию на этой странице.
        </p>
      </div>
    </div>
  );
}
