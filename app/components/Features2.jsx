'use client'

import FeatureCard from './features/FeatureCard'
import SectionTitle from './features/SectionTitle'
import FeatureData from './features/FeatureData.json'

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Features"
          subtitle="Discover the powerful features that make our platform stand out"
        />

        <div className="space-y-20">
          {FeatureData.features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              feature={feature}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}