export default function Album() {
  const photos = [
    '/me1.jpg',
    '/me2.jpg',
    '/me3.jpg',
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <h2 className="text-3xl font-bold mb-6">Photo Album</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Me ${index}`}
            className="w-full h-auto rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}
