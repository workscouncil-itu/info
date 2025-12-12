export default function MediaEvents() {
  // Sample blog posts - in a real app, these would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: 'Works Council Meeting - January 2024',
      date: 'January 15, 2024',
      excerpt: 'Summary of our latest works council meeting discussing employee benefits and workplace improvements.',
      category: 'Meeting',
    },
    {
      id: 2,
      title: 'Annual Employee Gathering',
      date: 'December 20, 2023',
      excerpt: 'Join us for our annual gathering to celebrate the year and discuss upcoming initiatives.',
      category: 'Event',
    },
    {
      id: 3,
      title: 'Media Coverage: Works Council Initiatives',
      date: 'November 10, 2023',
      excerpt: 'Recent media coverage highlighting our efforts to improve workplace conditions.',
      category: 'Media',
    },
    {
      id: 4,
      title: 'Workshop: Employee Rights and Benefits',
      date: 'October 5, 2023',
      excerpt: 'An informative workshop about employee rights, benefits, and how the works council can help.',
      category: 'Event',
    },
  ]

  const categories = ['All', 'Meeting', 'Event', 'Media']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Media & Events</h1>
        <p className="text-xl text-gray-600">
          Stay informed about our latest events, meetings, and media coverage.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <time className="text-sm text-gray-500">{post.date}</time>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Read more →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Load More / Pagination */}
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
          Load More Posts
        </button>
      </div>
    </div>
  )
}

