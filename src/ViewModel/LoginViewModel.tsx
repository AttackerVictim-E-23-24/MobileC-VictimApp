import { useState } from 'react';
import { loginRepository } from '../Repository/LoginRepository';


const useLoginViewModel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Llama a la función de autenticación del Repository
      const result = await loginRepository(username, password);
/*
      // Manejar el resultado, por ejemplo, redirigir a la página de inicio si es exitoso
      if (result.success) {
        // Redirigir a la página de inicio
      } else {
        setError(result.message);
      }*/
    } catch (error) {
      setError('Error de red o del servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    password,
    isLoading,
    error,
    setUsername,
    setPassword,
    login,
  };
};

export default useLoginViewModel;
