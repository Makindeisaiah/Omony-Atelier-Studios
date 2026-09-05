import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#121212] text-[#FAF8F5] flex items-center justify-center p-6 text-center">
          <div className="max-w-md space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              OMONY ATELIER STUDIOS
            </span>
            <h1 className="font-editorial text-4xl text-[#FAF8F5]">
              Experience Loading Notice
            </h1>
            <p className="text-sm text-[#9C9488] font-light leading-relaxed">
              We encountered an unexpected display issue while preparing this space.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.href = '/';
                }}
                className="px-6 py-3 bg-[#C5A880] text-[#121212] text-xs font-semibold tracking-widest uppercase hover:bg-[#D4BC98] transition-colors"
              >
                RELOAD ATELIER
              </button>
              <a
                href="https://wa.me/2348168223827?text=Hello%20OMONY%20Atelier%20Studios"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#2D2B28] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase hover:border-[#C5A880] transition-colors"
              >
                WHATSAPP DIRECT
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
