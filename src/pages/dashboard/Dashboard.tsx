import React, { useCallback, useState } from "react"

export const Dashboard = () => {
  const [lista, setLista] = useState<string[]>(['Teste1','Teste2','Teste3',]);

  const handleInputeKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if(e.key === "Enter") {
      if(e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value

      e.currentTarget.value = '';

      setLista((oldList) => {
        if (oldList.includes(value)) return oldList;

        return[...oldList, value]
      });
    }
  },[])
  

  return (
    <div>
      <p>Lista</p>

      <input 
        onKeyDown={handleInputeKeyDown}
      />

    <ul>
      {lista.map((value, index) => {
       return(
        <li key={index}>{value}</li>
       ) 
      })}
    </ul>

    </div>
  )
}