import { FileText } from 'lucide-react';

interface DocumentViewerProps {
  documentUrl: string | null;
}

const DocumentViewer = ({ documentUrl }: DocumentViewerProps) => {
  if (!documentUrl) {
    return (
      <div className="max-h-[60vh] bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <FileText size={64} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tài liệu không khả dụng</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-[60vh] bg-gray-900 flex items-center justify-center">
      <div className="text-center text-white">
        <FileText size={64} className="mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Tài liệu học tập</h3>
        <a
          href={documentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f3e6c4] text-[#3a2a00] font-semibold rounded-xl hover:brightness-105 transition-all"
        >
          Mở tài liệu
        </a>
      </div>
    </div>
  );
};

export default DocumentViewer;
