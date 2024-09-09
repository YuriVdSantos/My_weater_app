// components/PrivateRoute.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      // Verifica se o usuário está autenticado com base no localStorage
      const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

      if (!isLoggedIn) {
        // Se não estiver autenticado, redireciona para a página de login
        router.push('/login');
      } else {
        // Caso contrário, autentica o usuário
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    // Exibe um loader enquanto verifica o estado de autenticação
    return <div>Carregando...</div>; // Substitua por um componente de loader se desejar
  }

  if (!isAuthenticated) {
    return <div>Redirecionando para login...</div>; // Mensagem de redirecionamento
  }

  return <>{children}</>; // Renderiza o conteúdo apenas se o usuário estiver autenticado
};

export default PrivateRoute;
