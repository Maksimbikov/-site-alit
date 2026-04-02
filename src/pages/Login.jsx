import { Link, useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col justify-center items-center p-4 text-neutral-200 font-sans">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-white" />
          <span className="text-2xl font-medium text-white tracking-tight">Alit</span>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-neutral-400">Email или Логин</label>
            <input 
              type="text" 
              className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neutral-600 transition-colors"
              placeholder="name@example.com"
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-neutral-400">Пароль</label>
            <input 
              type="password" 
              className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neutral-600 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="mt-2 bg-white text-black font-medium rounded-lg px-4 py-2.5 hover:bg-neutral-200 transition-colors"
          >
            Войти
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-500">
          Нет аккаунта? <Link to="/register" className="text-white hover:underline">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
}
