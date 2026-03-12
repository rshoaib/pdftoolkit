import { useState, useCallback } from 'react';
import { useToast } from '../components/ToastContext';

export function usePdfFiles(options = { multiple: false }) {
  const [files, setFiles] = useState(options.multiple ? [] : null);
  const toast = useToast();

  const handleFiles = useCallback((newFiles) => {
    const validPdfs = newFiles.filter(f => f.type === 'application/pdf');
    
    if (validPdfs.length === 0) {
      toast.error('Invalid file type. Please upload PDF files only.');
      return;
    }

    if (options.multiple) {
      setFiles(prev => [...prev, ...validPdfs]);
    } else {
      setFiles(validPdfs[0]);
    }
  }, [options.multiple, toast]);

  const resetFiles = useCallback(() => {
    setFiles(options.multiple ? [] : null);
  }, [options.multiple]);

  const removeFile = useCallback((index) => {
    if (!options.multiple) return;
    setFiles(prev => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  }, [options.multiple]);

  return {
    files,
    setFiles,
    handleFiles,
    resetFiles,
    removeFile
  };
}
