import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy explaining how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose-custom">
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Last updated: February 2026
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect minimal information to provide and improve our services:
        </p>
        <ul>
          <li><strong>Email address</strong> - If you subscribe to our newsletter</li>
          <li><strong>Usage data</strong> - Anonymous analytics about how you use our site</li>
          <li><strong>Cookies</strong> - For site functionality and preferences (like dark mode)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To send you our newsletter (if you subscribed)</li>
          <li>To improve our website and content</li>
          <li>To understand what content is most helpful</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Analytics</strong> - To understand site usage (anonymized)</li>
          <li><strong>Affiliate networks</strong> - Some links may track clicks for commission purposes</li>
        </ul>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request deletion of your data</li>
          <li>Unsubscribe from communications at any time</li>
          <li>Opt out of analytics tracking</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For any privacy-related questions, please contact us at privacy@aitoolsranked.com
        </p>
      </div>
    </div>
  )
}
