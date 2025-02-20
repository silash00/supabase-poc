import { useEffect } from "react";
import { useUserStore } from "./stores/useUserStore";

export default function App() {
  const { users, isLoading, error, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h1>Usuários</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.created_at).toLocaleDateString("pt-BR")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
