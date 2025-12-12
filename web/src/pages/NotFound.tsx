import { Link, useLocation } from 'react-router-dom'

export function NotFoundPage() {
  const location = useLocation()
  return (
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
  )
}

