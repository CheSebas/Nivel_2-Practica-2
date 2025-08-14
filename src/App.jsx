import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import ImageGallery from "./components/ImageGallery";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  async function obtenerImagenes(busqueda) {
    setCargando(true);
    try {
      const respuesta = await fetch(
        "https://api.pexels.com/v1/search?query=" + busqueda + "&per_page=20",
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const datos = await respuesta.json();
      setImagenes(datos.photos);
    } catch (error) {
      console.log("Error al obtener imágenes:", error);
    }
    setCargando(false);
  }

  useEffect(function () {
    obtenerImagenes("Mountain");
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex justify-center items-center p-4">
        <h1 className="text-3xl font-bold">Pexels Gallery</h1>
        <ThemeToggle />
      </div>

      <SearchBar onSearch={obtenerImagenes} />
      <CategoryButtons onSelect={obtenerImagenes} />
      <ImageGallery images={imagenes} loading={cargando} />
    </div>
  );
}
