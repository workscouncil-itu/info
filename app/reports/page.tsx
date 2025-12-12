export default function Reports() {
  // Sample reports - in a real app, these would come from a CMS or database
  const reports = [
    {
      id: 1,
      title: 'Works Council Meeting Minutes - January 2024',
      date: 'January 20, 2024',
      type: 'Meeting Minutes',
      description: 'Detailed minutes from our January works council meeting covering discussions on employee benefits and workplace policies.',
    },
    {
      id: 2,
      title: 'Annual Report 2023',
      date: 'December 31, 2023',
      type: 'Annual Report',
      description: 'Comprehensive annual report summarizing our activities, achievements, and initiatives throughout 2023.',
    },
    {
      id: 3,
      title: 'Employee Satisfaction Survey Results',
      date: 'November 15, 2023',
      type: 'Survey Report',
      description: 'Results and analysis from the employee satisfaction survey conducted in Q3 2023.',
    },
    {
      id: 4,
      title: 'Budget Report - Q4 2023',
      date: 'October 30, 2023',
      type: 'Financial Report',
      description: 'Quarterly budget report detailing works council expenditures and allocations.',
    },
    {
      id: 5,
      title: 'Works Council Meeting Minutes - September 2023',
      date: 'September 25, 2023',
      type: 'Meeting Minutes',
      description: 'Minutes from the September works council meeting focusing on workplace safety and employee wellness programs.',
    },
    {
      id: 6,
      title: 'Policy Update Report',
      date: 'August 10, 2023',
      type: 'Policy Report',
      description: 'Report on recent policy updates and changes affecting employees at IT:U.',
    },
  ]

  const reportTypes = ['All', 'Meeting Minutes', 'Annual Report', 'Survey Report', 'Financial Report', 'Policy Report']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Reports</h1>
        <p className="text-xl text-gray-600">
          Access our reports, meeting minutes, and documentation.
        </p>
      </div>

      {/* Report Type Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {reportTypes.map((type) => (
          <button
            key={type}
            className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors font-medium"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Reports List */}
      <div className="space-y-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {report.type}
                  </span>
                  <time className="text-sm text-gray-500">{report.date}</time>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {report.title}
                </h2>
                <p className="text-gray-600 mb-4">{report.description}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  View PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Archive Notice */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-700">
          Looking for older reports?{' '}
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            Browse Archive
          </button>
        </p>
      </div>
    </div>
  )
}

