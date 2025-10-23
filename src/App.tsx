import { useState } from 'react'

function App() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Creator Insights Tracker
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Which posts actually made you money?
            </p>
          </div>

          {/* Hero Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Unified Creator Analytics
                </h2>
                <p className="text-gray-600">
                  Connect your platforms and see which content drives revenue
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  isConnected ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <span className="text-sm text-gray-600">
                  {isConnected ? 'Connected' : 'Not Connected'}
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FeatureCard 
                icon="📊"
                title="Revenue Attribution"
                description="Track which posts led to actual sales"
              />
              <FeatureCard 
                icon="🔗"
                title="Cross-Platform"
                description="Connect Instagram, Twitter, YouTube & more"
              />
              <FeatureCard 
                icon="💡"
                title="Smart Insights"
                description="Get AI-powered content recommendations"
              />
              <FeatureCard 
                icon="📈"
                title="Content ROI"
                description="Understand which content types perform best"
              />
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsConnected(!isConnected)}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isConnected ? 'View Dashboard' : 'Connect Your Whop Account'}
            </button>
          </div>

          {/* Info Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">
              🚀 Currently in Development
            </h3>
            <p className="text-blue-800 text-sm">
              This Whop app is being built to help creators like you make data-driven
              decisions about content creation. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default App