import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode; // Optional fallback UI
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  // This lifecycle method catches errors during rendering
  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error };
  }

  // This lifecycle method is for logging errors
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg m-4">
          <h2 className="text-2xl font-bold mb-3">Oops! Something went wrong.</h2>
          <p className="text-lg mb-4">We're sorry, but there was an error loading the trails.</p>
          {this.state.error && (
            <details className="mt-2 text-sm text-red-600">
              <summary>Error Details</summary>
              <pre className="whitespace-pre-wrap break-all text-left mt-2 p-2 bg-red-50 rounded-md">
                {this.state.error.message}
              </pre>
            </details>
          )}
          <button
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            onClick={() => window.location.reload()} 
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;