export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4">Synchromation</h3>
            <p className="text-muted leading-relaxed">
              iOS development consultancy delivering exceptional iPhone and iPad applications since 2009.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-muted">
              <li>iOS Development</li>
              <li>SwiftUI Development</li>
              <li>App Store Optimization</li>
              <li>iOS Strategy</li>
              <li>App Modernization</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-muted">
              <p>London, United Kingdom</p>
              <p>hello@synchromation.com</p>
              <p>Company No. 07123456</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary/20 mt-12 pt-8 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Synchromation Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}