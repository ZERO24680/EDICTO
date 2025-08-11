'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

interface Statement {
  id: string
  title: string
  summaryAI?: string | null
  contentText?: string | null
  organization?: {
    name: string
  }
  publishedAt: string
}

function SearchContent() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [results, setResults] = useState<Statement[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    
    setIsSearching(true)
    try {
      const response = await fetch(`/api/public/statements?query=${encodeURIComponent(query)}`)
      const data = await response.json()
      setResults(data.statements || [])
    } catch (error) {
      console.error('Search failed:', error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-navy mb-8">Recherche</h1>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4 max-w-2xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher par mot-clé, organisation ou sujet..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3 bg-navy text-ivory rounded-lg hover:bg-navy/90 disabled:opacity-50"
            >
              {isSearching ? 'Recherche...' : 'Rechercher'}
            </button>
          </div>
        </form>
        
        {results.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-navy mb-4">
              Résultats ({results.length})
            </h2>
            {results.map((statement) => (
              <div key={statement.id} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {statement.title}
                </h3>
                <p className="text-gray-700 mb-3">
                  {statement.summaryAI || statement.contentText?.substring(0, 200)}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{statement.organization?.name}</span>
                  <span>{new Date(statement.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {query && results.length === 0 && !isSearching && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucun résultat trouvé pour &ldquo;{query}&rdquo;
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-lg text-gray-600">Chargement...</div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}

