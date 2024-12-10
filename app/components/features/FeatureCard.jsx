'use client'

export default function FeatureCard({ feature, isReversed }) {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
      <div className="w-full md:w-1/2">
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        </div>
      </div>
      
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-gray-900">
          {feature.title}
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed">
          {feature.description}
        </p>
        
      </div>
    </div>
  )
}