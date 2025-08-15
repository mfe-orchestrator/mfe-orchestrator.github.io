import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <nav className="fixed top-5 left-5 right-5 z-50 bg-black/30 backdrop-blur-md border border-primary/30 rounded-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              MFE Orchestrator
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/start-now"
              className="ml-4 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
