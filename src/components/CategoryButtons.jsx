export default function CategoryButtons({ onCategorySelect }) {
  const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];

  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className="px-8 py-3 bg-gray-700 text-white text-lg rounded-full hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
}