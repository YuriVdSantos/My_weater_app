import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email === 'admin@admin.com' && password === 'password') {
      localStorage.setItem('loggedIn', 'true');
      router.push('/dashboard'); // Redireciona o admin para o dashboard
    } else if (email === 'user@user.com' && password === 'password') {
      localStorage.setItem('loggedIn', 'true');
      router.push('/'); // Redireciona o usuário comum para a homepage
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
