export default function HeroSection() {
  return (
    <div className="grid grid-rows-[auto,1fr]">
      {/* Row 1: Hero Section */}
      <section className="relative w-full bg-blue-600 px-8 py-22 shadow-md z-10">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-1 justify-between items-center -mt-10">
            <div>
              <h3 className="text-2xl font-semibold text-white">Welcome to the dashboard!</h3>
            </div>
            <div>
              <button className="bg-white cursor-pointer text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition">
                Add New Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: Overlapping Cards */}
      <div className="relative -mt-16 z-20 px-8">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
