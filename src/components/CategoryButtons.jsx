export default function CategoryButtons(props) {
  function categories(nombre) {
    props.onSelect(nombre);
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 my-4">
      <button
        onClick={function () {
          categories("Mountain");
        }}
        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded"
      >
        Mountain
      </button>

      <button
        onClick={function () {
          categories("Beaches");
        }}
        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded"
      >
        Beaches
      </button>

      <button
        onClick={function () {
          categories("Birds");
        }}
        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded"
      >
        Birds
      </button>

      <button
        onClick={function () {
          categories("Food");
        }}
        className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-4 py-2 rounded"
      >
        Food
      </button>
    </div>
  );
}
