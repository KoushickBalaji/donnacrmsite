import { Link, useLocation } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  const location = useLocation()
  return (
    <>
      <Seo title="Page not found" canonicalPath="/404" noindex />
      <div className="flex min-h-[70vh] items-center justify-center bg-muted/30">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">
            Oops! Page not found ({location.pathname})
          </p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  )
}
