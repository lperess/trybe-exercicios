const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Lavar pratos', 'Lavar roupas', 'Limpar casa', 'Tirar lixo', 'Lavar banheiro', 'Arrumar casa', 'Cozinhar'];

function App() {
  return (
    <ul>
      {tarefas.map(tarefa => Task(tarefa))}
    </ul>
  );
}

export default App;
