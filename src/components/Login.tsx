import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { signIn } from '../services/firebase';

export function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    signIn(usuario, senha)
      .then((credential) => {
        alert('Bem-vindo!' + credential.user.uid);
      })
      .catch((error) => {
        alert('Usuário e/ou senha incorretos!');
      });
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input onChange={(e) => setUsuario(e.target.value)} value={usuario} />
        </div>
        <div>
          <label>Senha:</label>
          <input
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Acessar</button>
        </div>
        <div>
          Ainda não tem conta?
          <Link to="/criar-conta">
            <button>Que tal criar uma?</button>
          </Link>
        </div>
      </form>
    </>
  );
}
