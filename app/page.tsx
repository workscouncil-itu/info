import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to the IT:U Works Council
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Representing the interests of all employees at IT:U. We work to ensure
            fair working conditions, advocate for your rights, and keep you informed
            about important developments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Link
            href="/who-we-are"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-primary-200"
          >
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Who We Are</h2>
            <p className="text-gray-600">
              Learn about the Works Council members and how to contact us.
            </p>
          </Link>

          <Link
            href="/media-events"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-primary-200"
          >
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Media & Events</h2>
            <p className="text-gray-600">
              Stay updated with our latest events, media coverage, and blog posts.
            </p>
          </Link>

          <Link
            href="/announcements"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-primary-200"
          >
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Announcements</h2>
            <p className="text-gray-600">
              Important updates and announcements from the Works Council.
            </p>
          </Link>

          <Link
            href="/reports"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-primary-200"
          >
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Reports</h2>
            <p className="text-gray-600">
              Access our reports, meeting minutes, and documentation.
            </p>
          </Link>

          <Link
            href="/surveys"
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 hover:border-primary-200"
          >
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Surveys</h2>
            <p className="text-gray-600">
              Participate in our surveys and share your feedback.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

