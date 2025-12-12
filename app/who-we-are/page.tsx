export default function WhoWeAre() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Who We Are</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The IT:U Works Council represents the interests of all employees at the 
            Interdisciplinary Transformation University. We are committed to ensuring 
            fair working conditions, advocating for employee rights, and maintaining 
            open communication between staff and management.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to protect and promote the rights and interests of all employees, 
            ensuring a fair, respectful, and productive working environment at IT:U.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Representing employee interests in workplace matters</li>
            <li>Negotiating with management on behalf of staff</li>
            <li>Ensuring compliance with labor laws and regulations</li>
            <li>Providing support and advice to employees</li>
            <li>Organizing events and initiatives for the community</li>
          </ul>
        </div>

        <div className="border-t pt-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Inquiries</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Email:</strong> works.council@itu.at
                </p>
                <p>
                  <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Location</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  IT:U Interdisciplinary Transformation University<br />
                  Works Council Office<br />
                  [Address to be added]
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-gray-700">
              If you have questions, concerns, or need assistance with workplace matters, 
              please don't hesitate to reach out to us. We're here to help and ensure 
              your voice is heard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

