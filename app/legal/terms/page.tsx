export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-serif text-navy mb-8">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            These Terms of Use (&ldquo;Terms&rdquo;) govern your use of EDICTO (&ldquo;the Service&rdquo;), 
            operated by EDICTO (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). 
            By accessing or using our Service, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">1. Definitions</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Service:</strong> EDICTO, the official register of verified statements</li>
            <li><strong>User:</strong> Any individual or entity using the Service</li>
            <li><strong>Organization:</strong> A verified entity that publishes statements</li>
            <li><strong>Statement:</strong> Official communication published by an Organization</li>
            <li><strong>Content:</strong> Any information, data, or material on the Service</li>
          </ul>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">2. Eligibility</h2>
          <p className="mb-4">
            You must be at least 18 years old to use the Service. By using the Service, 
            you represent and warrant that you meet this requirement.
          </p>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">3. Account Types</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-navy mb-2">Individual Users</h3>
            <p className="mb-2">Free access to browse and search statements with limitations:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Limited search history (30 days)</li>
              <li>Follow up to 5 organizations</li>
              <li>Basic alerts only</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-navy mb-2">Pro Users</h3>
            <p className="mb-2">Enhanced features with subscription:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Unlimited search history</li>
              <li>Advanced search filters</li>
              <li>Export capabilities</li>
              <li>Unlimited follows and alerts</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-navy mb-2">Organizations</h3>
            <p className="mb-2">Verified entities that can publish statements:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Must complete verification process</li>
              <li>Domain ownership verification</li>
              <li>Admin review required</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">4. Verified Organizations</h2>
          <p className="mb-4">
            Organizations must complete a verification process to publish statements:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide official domain email</li>
            <li>Verify domain ownership via DNS TXT record</li>
            <li>Submit required documentation</li>
            <li>Pass admin review</li>
          </ul>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">5. Publishing Statements</h2>
          <p className="mb-4">
            Verified organizations may publish official statements subject to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Content must be official organizational communication</li>
            <li>No misleading or false information</li>
            <li>Compliance with applicable laws</li>
            <li>Respect for intellectual property rights</li>
          </ul>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">6. Prohibited Conduct</h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Attempt to gain unauthorized access to the Service</li>
            <li>Interfere with the Service&apos;s operation</li>
            <li>Use the Service for spam or harassment</li>
            <li>Publish false or misleading information</li>
          </ul>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">7. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content are owned by EDICTO and protected by 
            copyright, trademark, and other intellectual property laws. Organizations 
            retain rights to their published statements.
          </p>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">8. Paid Plans</h2>
          <p className="mb-4">
            Pro and Team plans are billed monthly or annually. You may cancel at any time. 
            Refunds are handled according to our refund policy.
          </p>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">9. Disclaimers</h2>
          <p className="mb-4">
            The Service is provided &ldquo;as is&rdquo; without warranties. We do not guarantee 
            the accuracy, completeness, or reliability of any content.
          </p>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">10. Limitation of Liability</h2>
          <p className="mb-4">
            EDICTO shall not be liable for any indirect, incidental, special, or 
            consequential damages arising from your use of the Service.
          </p>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">11. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your access to the Service at any time for 
            violations of these Terms or for any other reason.
          </p>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">12. Changes to Terms</h2>
          <p className="mb-4">
            We may modify these Terms at any time. Continued use of the Service 
            constitutes acceptance of the modified Terms.
          </p>
          
          <h2 className="text-2xl font-serif text-navy mt-8 mb-4">13. Contact Information</h2>
          <p className="mb-6">
            If you have questions about these Terms, please contact us at{' '}
            <a href="/contact" className="text-gold hover:text-navy underline">
              our contact page
            </a>.
          </p>
          
          <p className="text-sm text-gray-600 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}

