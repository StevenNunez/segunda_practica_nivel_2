export default function PhotoGrid({ photos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={photo.src.medium}
            alt={photo.alt || 'Photo'}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
         
        </div>
      ))}
    </div>
  );
}