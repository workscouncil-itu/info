export default function Surveys() {
  // Sample surveys - in a real app, these would come from a CMS or database
  const activeSurveys = [
    {
      id: 1,
      title: 'Employee Satisfaction Survey 2024',
      description: 'Help us understand your experience at IT:U and identify areas for improvement.',
      deadline: 'March 15, 2024',
      responses: 145,
      status: 'active',
    },
    {
      id: 2,
      title: 'Work-Life Balance Assessment',
      description: 'Share your thoughts on work-life balance and suggest improvements.',
      deadline: 'February 28, 2024',
      responses: 89,
      status: 'active',
    },
  ]

  const pastSurveys = [
    {
      id: 3,
      title: 'Benefits Package Feedback',
      description: 'Your feedback on the current benefits package.',
      deadline: 'December 31, 2023',
      responses: 203,
      status: 'closed',
    },
    {
      id: 4,
      title: 'Workplace Environment Survey',
      description: 'Assessment of workplace facilities and environment.',
      deadline: 'November 30, 2023',
      responses: 178,
      status: 'closed',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Surveys</h1>
        <p className="text-xl text-gray-600">
          Participate in our surveys and share your feedback. Your voice matters!
        </p>
      </div>

      {/* Active Surveys */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Active Surveys</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {activeSurveys.map((survey) => (
            <div
              key={survey.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-primary-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      ACTIVE
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {survey.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{survey.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Deadline: {survey.deadline}</span>
                    <span>{survey.responses} responses</span>
                  </div>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Take Survey
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Past Surveys */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Past Surveys</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pastSurveys.map((survey) => (
            <div
              key={survey.id}
              className="bg-gray-50 rounded-lg shadow-md p-6 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                      CLOSED
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {survey.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{survey.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Closed: {survey.deadline}</span>
                    <span>{survey.responses} responses</span>
                  </div>
                </div>
              </div>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                View Results
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Survey Information */}
      <div className="mt-12 bg-primary-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Why Your Participation Matters
        </h2>
        <p className="text-gray-700 mb-4">
          Your feedback helps us understand your needs and concerns, allowing us to better 
          represent your interests and work towards improvements in the workplace. All 
          responses are confidential and will be used to inform our discussions with 
          management and our strategic planning.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>All surveys are completely anonymous</li>
          <li>Your feedback directly influences our priorities</li>
          <li>Results are shared with all employees</li>
          <li>We act on the insights you provide</li>
        </ul>
      </div>
    </div>
  )
}

