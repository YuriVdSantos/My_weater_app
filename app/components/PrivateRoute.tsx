// components/PrivateRoute.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário está autenticado com base no localStorage
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    
    if (!isLoggedIn) {
      // Se não estiver autenticado, redireciona para a página de login
      router.push('/login');
    } else {
      // Caso contrário, autentica o usuário
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div>Carregando...</div>; // Exibe um loader enquanto verifica o estado de autenticação
  }

  return <>{children}</>; // Renderiza o conteúdo apenas se o usuário estiver autenticado
};

export default PrivateRoute;
