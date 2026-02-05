import { Check, X, Minus } from 'lucide-react'
import { Rating } from './Rating'

interface Tool {
  name: string
  rating: number
  pricing: string
  features: Record<string, boolean | string>
  link: string
}

interface ComparisonTableProps {
  tools: Tool[]
  features: string[]
}

export function ComparisonTable({ tools, features }: ComparisonTableProps) {
  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      )
    }
    if (value === 'partial') {
      return <Minus className="w-5 h-5 text-yellow-500 mx-auto" />
    }
    return <span className="text-sm">{value}</span>
  }

  return (
    <div className="not-prose my-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-800">
            <th className="text-left p-4 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700">
              Feature
            </th>
            {tools.map((tool) => (
              <th 
                key={tool.name}
                className="text-center p-4 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 min-w-[150px]"
              >
                {tool.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Rating Row */}
          <tr className="bg-primary-50 dark:bg-primary-900/20">
            <td className="p-4 font-medium text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700">
              Our Rating
            </td>
            {tools.map((tool) => (
              <td key={tool.name} className="p-4 text-center border-b border-slate-200 dark:border-slate-700">
                <div className="flex justify-center">
                  <Rating score={tool.rating} size="sm" />
                </div>
              </td>
            ))}
          </tr>
          
          {/* Pricing Row */}
          <tr>
            <td className="p-4 font-medium text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700">
              Starting Price
            </td>
            {tools.map((tool) => (
              <td key={tool.name} className="p-4 text-center text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                {tool.pricing}
              </td>
            ))}
          </tr>

          {/* Feature Rows */}
          {features.map((feature, i) => (
            <tr key={feature} className={i % 2 === 0 ? 'bg-slate-50 dark:bg-slate-800/30' : ''}>
              <td className="p-4 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                {feature}
              </td>
              {tools.map((tool) => (
                <td 
                  key={tool.name} 
                  className="p-4 text-center border-b border-slate-200 dark:border-slate-700"
                >
                  {renderCell(tool.features[feature])}
                </td>
              ))}
            </tr>
          ))}

          {/* CTA Row */}
          <tr className="bg-slate-100 dark:bg-slate-800">
            <td className="p-4"></td>
            {tools.map((tool) => (
              <td key={tool.name} className="p-4 text-center">
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Try {tool.name}
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
