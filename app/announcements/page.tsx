export default function Announcements() {
  // Sample announcements - in a real app, these would come from a CMS or database
  const announcements = [
    {
      id: 1,
      title: 'Important: Upcoming Works Council Election',
      date: 'February 1, 2024',
      priority: 'high',
      content: 'The works council election will take place next month. All employees are encouraged to participate and vote for their representatives.',
    },
    {
      id: 2,
      title: 'New Employee Benefits Package',
      date: 'January 25, 2024',
      priority: 'medium',
      content: 'We are pleased to announce an updated employee benefits package that includes improved health insurance and additional vacation days.',
    },
    {
      id: 3,
      title: 'Works Council Office Hours Update',
      date: 'January 10, 2024',
      priority: 'low',
      content: 'Our office hours have been updated. We are now available Monday through Friday from 9:00 AM to 5:00 PM.',
    },
    {
      id: 4,
      title: 'Annual General Meeting - Save the Date',
      date: 'December 15, 2023',
      priority: 'high',
      content: 'Mark your calendars! The annual general meeting will be held on March 15, 2024. More details to follow.',
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Announcements</h1>
        <p className="text-xl text-gray-600">
          Important updates and announcements from the Works Council.
        </p>
      </div>

      <div className="space-y-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
              announcement.priority === 'high'
                ? 'border-red-500'
                : announcement.priority === 'medium'
                ? 'border-yellow-500'
                : 'border-blue-500'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {announcement.title}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                      announcement.priority
                    )}`}
                  >
                    {announcement.priority.toUpperCase()}
                  </span>
                </div>
                <time className="text-sm text-gray-500">{announcement.date}</time>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
          </div>
        ))}
      </div>

      {/* Subscribe to Announcements */}
      <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-700 mb-6">
          Subscribe to receive email notifications for new announcements.
        </p>
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

