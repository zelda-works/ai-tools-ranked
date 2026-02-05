import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Our affiliate disclosure policy - how we earn money and maintain editorial independence.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Affiliate Disclosure</h1>
      
      <div className="prose-custom">
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Last updated: February 2026
        </p>

        <h2>How We Make Money</h2>
        <p>
          AI Tools Ranked is a reader-supported website. We earn money through affiliate partnerships 
          with some of the tools we review. When you click on certain links on our site and make a 
          purchase, we may receive a commission at no additional cost to you.
        </p>

        <h2>What This Means for You</h2>
        <p>
          <strong>Our reviews are never influenced by affiliate relationships.</strong> We review tools 
          based on their merits, and many of the tools we recommend do not have affiliate programs at all. 
          We've given negative reviews to tools that offer high commissions, and positive reviews to tools 
          that don't pay us anything.
        </p>

        <h2>Our Editorial Policy</h2>
        <ul>
          <li>We only recommend tools we have personally tested and believe provide value</li>
          <li>Affiliate relationships never influence our ratings or recommendations</li>
          <li>We clearly disclose when links may earn us a commission</li>
          <li>We update reviews when tools change, even if it means recommending against a tool that was previously an affiliate partner</li>
        </ul>

        <h2>FTC Compliance</h2>
        <p>
          In accordance with the Federal Trade Commission's guidelines concerning the use of endorsements 
          and testimonials in advertising, we want you to be aware of the following:
        </p>
        <ul>
          <li>This website contains affiliate links that may result in a commission to us when you click through and make a purchase</li>
          <li>We are required to disclose this material connection</li>
          <li>We always strive to provide honest, accurate information regardless of any financial relationship</li>
        </ul>

        <h2>Which Tools Pay Us?</h2>
        <p>
          Not all tools we review have affiliate programs. Some do, some don't. Here's how we handle different scenarios:
        </p>
        <ul>
          <li><strong>Tools with affiliate programs:</strong> We may earn a commission if you sign up through our links. These links are marked with a disclosure notice.</li>
          <li><strong>Tools without affiliate programs:</strong> We review these with equal thoroughness, because our goal is to help you find the best tools, not just the ones that pay us.</li>
          <li><strong>Tools that declined our affiliate application:</strong> We still review these if they're worth covering. A company's affiliate policy doesn't affect our editorial decisions.</li>
        </ul>

        <h2>How to Support Us</h2>
        <p>
          If you find our reviews helpful, using our affiliate links when you decide to purchase a tool 
          is a great way to support our work at no extra cost to you. However, you should always choose 
          the tool that's right for your needs, regardless of whether we have an affiliate relationship with them.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships or editorial policy, please don't 
          hesitate to <Link href="/about" className="text-primary-600 hover:text-primary-700">contact us</Link>.
        </p>

        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
          <h3 className="text-lg font-bold mb-2">Summary</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            We may earn commissions from some links, but this never affects our reviews. 
            We recommend tools based on quality, not payment. Your trust is more important than any commission.
          </p>
        </div>
      </div>
    </div>
  )
}
