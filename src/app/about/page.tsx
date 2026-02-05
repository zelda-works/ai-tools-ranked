import { Metadata } from 'next'
import { Target, Eye, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AI Tools Ranked - our mission, review methodology, and the team behind the reviews.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About AI Tools Ranked</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Your trusted guide to navigating the AI tools landscape
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
            <Target className="w-6 h-6 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold">Our Mission</h2>
        </div>
        <div className="prose-custom">
          <p>
            The AI tools market is exploding. Every day, new tools promise to revolutionize how we write, 
            create videos, generate images, and work. But with hundreds of options to choose from, how do 
            you know which ones are worth your time and money?
          </p>
          <p>
            That's where we come in. <strong>AI Tools Ranked</strong> was founded with a simple mission: 
            to provide honest, thorough, and practical reviews of AI tools so you can make informed decisions.
          </p>
          <p>
            We don't just skim the surface. We sign up for every tool, test it in real-world scenarios, 
            and give you the straight truth — including the downsides that other review sites conveniently forget to mention.
          </p>
        </div>
      </section>

      {/* Review Methodology */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
            <Eye className="w-6 h-6 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold">Our Review Process</h2>
        </div>
        <div className="prose-custom mb-6">
          <p>
            Every review on this site follows a rigorous process designed to give you the most accurate 
            and useful information possible:
          </p>
        </div>
        
        <div className="grid gap-4">
          {[
            { step: '1', title: 'Hands-On Testing', desc: 'We sign up and use the tool extensively, typically for 2-4 weeks minimum.' },
            { step: '2', title: 'Feature Analysis', desc: 'We document every feature, compare it to competitors, and test edge cases.' },
            { step: '3', title: 'Value Assessment', desc: 'We analyze pricing tiers and determine if the tool delivers value at each price point.' },
            { step: '4', title: 'Real-World Scenarios', desc: 'We test with actual projects, not just demo content, to see how tools perform under pressure.' },
            { step: '5', title: 'Ongoing Updates', desc: 'We revisit reviews when tools release major updates to keep information current.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rating System */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold">Our Rating System</h2>
        </div>
        <div className="prose-custom mb-6">
          <p>
            We rate tools on a 5-star scale, with scores reflecting our overall recommendation:
          </p>
        </div>
        
        <div className="space-y-3">
          {[
            { rating: '4.5 - 5.0', label: 'Exceptional', desc: 'Best-in-class tools we highly recommend', color: 'bg-green-500' },
            { rating: '4.0 - 4.4', label: 'Excellent', desc: 'Great tools with minor limitations', color: 'bg-green-400' },
            { rating: '3.5 - 3.9', label: 'Good', desc: 'Solid options for specific use cases', color: 'bg-yellow-500' },
            { rating: '3.0 - 3.4', label: 'Average', desc: 'Decent but with notable drawbacks', color: 'bg-orange-500' },
            { rating: 'Below 3.0', label: 'Below Average', desc: 'Generally not recommended', color: 'bg-red-500' },
          ].map((item) => (
            <div key={item.rating} className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <div className="w-24 font-mono text-sm">{item.rating}</div>
              <div className="font-semibold">{item.label}</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">— {item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
            <Users className="w-6 h-6 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold">Our Team</h2>
        </div>
        <div className="prose-custom mb-6">
          <p>
            AI Tools Ranked is run by a small team of content creators, marketers, and tech enthusiasts 
            who use AI tools in our daily work. We're not just observers — we're practitioners who depend 
            on these tools to get real work done.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: 'Alex Chen', role: 'Founder & Lead Reviewer', bio: 'Former content marketer who tested 100+ AI tools and decided someone needed to write honest reviews.' },
            { name: 'Sarah Mitchell', role: 'Video & Image Tool Specialist', bio: 'Video editor and graphic designer exploring how AI is changing creative workflows.' },
          ].map((person) => (
            <div key={person.name} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-2xl font-bold mb-4">
                {person.name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg">{person.name}</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">{person.role}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Have questions, suggestions, or a tool you'd like us to review?
        </p>
        <a 
          href="mailto:hello@aitoolsranked.com"
          className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
