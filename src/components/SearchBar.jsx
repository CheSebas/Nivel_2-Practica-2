import { useState } from "react";

export default function SearchBar(props) {
  const [texto, setTexto] = useState("");

  function enviarFormulario(evento) {
    evento.preventDefault();
    if (texto !== "") {
      props.onSearch(texto);
      // setTexto(""); //
    }
  }

  return (
    <form onSubmit={enviarFormulario} className="flex justify-center my-4">
      <input
        type="text"
        value={texto}
        onChange={function (e) {
          setTexto(e.target.value);
        }}
        placeholder="Buscar imágenes..."
        className="border rounded-l px-4 py-2 w-64 dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
      >
        Buscar
      </button>
    </form>
  );
}
