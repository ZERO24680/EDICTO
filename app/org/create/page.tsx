'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateOrganizationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    contactEmail: '',
    bio: '',
    country: '',
    sector: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/org/verification/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        router.push('/org/create/success')
      } else {
        console.error('Failed to submit')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-4xl font-serif text-navy mb-8">Create Organization Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
              Organization Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-navy mb-2">
              Website *
            </label>
            <input
              type="url"
              id="website"
              name="website"
              required
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-navy mb-2">
              Contact Email (from your domain) *
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              required
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-navy mb-2">
              Brief Description
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-navy mb-2">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">Select country</option>
                <option value="FR">France</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="DE">Germany</option>
                <option value="CA">Canada</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-navy mb-2">
                Sector
              </label>
              <select
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">Select sector</option>
                <option value="energy">Energy</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="technology">Technology</option>
                <option value="government">Government</option>
                <option value="ngo">NGO</option>
              </select>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy text-ivory py-3 px-6 rounded-md hover:bg-navy/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit for Verification'}
          </button>
        </form>
      </div>
    </div>
  )
}

