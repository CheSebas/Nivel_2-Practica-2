export default function ImageGallery(props) {
  if (props.loading) {
    return <p className="text-center mt-6">Cargando imágenes...</p>;
  }

  if (props.images.length === 0) {
    return <p className="text-center mt-6">No se encontraron resultados.</p>;
  }

  function showImages() {
    let lista = [];
    for (let i = 0; i < props.images.length; i++) {
      let img = props.images[i];
      lista.push(
        <img
          key={img.id}
          src={img.src.medium}
          alt={img.alt}
          className="w-full h-60 object-cover rounded shadow"
        />
      );
    }
    return lista;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {showImages()}
    </div>
  );
}
