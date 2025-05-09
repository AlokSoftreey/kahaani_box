export default function HeroSection() {
  return (
    <>
      <section className="relative w-full bg-blue-600 px-6 py-16 shadow-md">
        <div className="max-w-4xl mx-auto h-25">
            <div className="absolute top-20 right-4 bg-white rounded-md">
                <button className="px-4 py-2 cursor-pointer">Add New Story</button>
            </div>
        </div>
      </section>

      {/* Overlapping Card Grid */}
      <div className="relative z-20 -mt-16 px-4">
        <div className="max-w-8xl max-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Create Stories</h3>
                <p className="text-sm text-gray-600">Start a new story from scratch and let your creativity flow.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">My Stories</h3>
                <p className="text-sm text-gray-600">Access and manage all your previously created stories.</p>
            </div>
             {/* Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Explore</h3>
                <p className="text-sm text-gray-600">Read stories from other creators and get inspired.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">New Stories</h3>
                <p className="text-sm text-gray-600">Arrival new created stories.</p>
            </div>
        </div>
      </div>
    </>
  );
}
