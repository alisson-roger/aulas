import React, { useCallback, useEffect, useState } from "react"
import { ApiException } from "../../shared/services/api/ApiException";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefasService";

// Dashboard Component

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  // Getting all the list

  useEffect(() => {
    TarefasService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista(result);
        }
      });
  }, []);

  // Creating a new 'Tarefa'

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      e.currentTarget.value = '';

      if (lista.some((listItem) => listItem.title === value)) return;

      TarefasService.create({ title: value, isCompleted: false })
        .then((result) => {
          if (result instanceof ApiException) {
            alert(result.message);
          } else {
            setLista((oldLista) => [...oldLista, result]);
          }
        });
    }
  }, [lista]);

  const handleTogleComplete = useCallback((id: number) => {
    const tarefasUpdate = lista.find((tarefa) => tarefa.id === id);
    if (!tarefasUpdate) return;

    TarefasService.updateById(id,{
      ...tarefasUpdate,
      isCompleted: !tarefasUpdate.isCompleted,
    })
    .then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setLista(oldLista => {
          return oldLista.map(oldListItem => {
            if (oldListItem.id === id) return result;
            return oldListItem;
          });
        })        
      }
    })


  }, [lista])

  return (
    <div>
      <p>Lista</p>

      <input
        onKeyDown={handleInputKeyDown}
      />
      <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>

      <ul>
        {lista.map((listItem) => {
          return (
            <li key={listItem.id}>
              <input type='checkbox'
                checked={listItem.isCompleted}
                onChange={() => handleTogleComplete(listItem.id)}
              />
              {listItem.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}