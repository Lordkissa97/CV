import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '@/styles/components/PDFViewer.css';

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    setError(`Failed to load PDF: ${error.message}`);
    setLoading(false);
  }

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  };

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
              Page {pageNumber} of {numPages}
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
              <p>Loading PDF...</p>
            </div>
          )}
          
          {error && (
            <div className="pdf-error">
              <p>{error}</p>
              <button onClick={onClose}>Close</button>
            </div>
          )}

          {!error && (
            <Document
              file={url}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div>Loading PDF...</div>}
            >
              <Page
                pageNumber={pageNumber}
                width={Math.min(800, window.innerWidth - 100)}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
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
