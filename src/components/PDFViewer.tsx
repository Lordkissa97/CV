import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '@/styles/components/PDFViewer.css';

// Set up the worker for react-pdf using local worker file with matching version
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PDFViewerProps {
  url: string;
  title: string;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url, title, onClose }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log('PDF loaded successfully:', { numPages, url });
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    console.error('PDF load error:', error);
    setError(`Failed to load PDF: ${error.message}`);
    setLoading(false);
  }

  function onPageLoadError(error: Error) {
    console.error('Page load error:', error);
    setError(`Failed to load page: ${error.message}`);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
  };

  console.log('PDFViewer rendering with URL:', url);

  return (
    <div className="pdf-viewer-overlay">
      <div className="pdf-viewer-container">
        <div className="pdf-viewer-header">
          <h3>{title}</h3>
          <div className="pdf-viewer-controls">
            <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
              ← Previous
            </button>
            <span className="page-info">
              Page {pageNumber} of {numPages || '?'}
            </span>
            <button onClick={goToNextPage} disabled={pageNumber >= (numPages || 1)}>
              Next →
            </button>
            <button onClick={onClose} className="close-btn">
              ✕ Close
            </button>
          </div>
        </div>

        <div className="pdf-viewer-content">
          {loading && (
            <div className="pdf-loading">
              <p>Loading PDF... ({url})</p>
            </div>
          )}

          {error && (
            <div className="pdf-error">
              <p>{error}</p>
              <button onClick={onClose}>Close</button>
            </div>
          )}

          {!error && (
            <div style={{ border: '2px solid red', padding: '10px' }}>
              <p>Debug: Loading document from: {url}</p>
              <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div style={{ background: 'yellow', padding: '20px' }}>
                    Loading PDF document...
                  </div>
                }
                error={
                  <div style={{ background: 'red', padding: '20px', color: 'white' }}>
                    Failed to load PDF document.
                  </div>
                }
              >
                {numPages && (
                  <div style={{ border: '2px solid blue', padding: '10px' }}>
                    <p>
                      Debug: Rendering page {pageNumber} of {numPages}
                    </p>
                    <Page
                      pageNumber={pageNumber}
                      width={Math.min(800, window.innerWidth - 100)}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      onLoadError={onPageLoadError}
                      loading={
                        <div style={{ background: 'green', padding: '20px' }}>Loading page...</div>
                      }
                      onLoadSuccess={() => console.log('Page loaded successfully')}
                    />
                  </div>
                )}
              </Document>
            </div>
          )}
        </div>

        <div className="pdf-viewer-footer">
          <a href={url} download target="_blank" rel="noopener noreferrer">
            📥 Download PDF
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            🔗 Open in New Tab
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
