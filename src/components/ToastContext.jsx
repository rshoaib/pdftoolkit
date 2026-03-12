import { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{
      success: (msg, d) => addToast(msg, 'success', d),
      error: (msg, d) => addToast(msg, 'error', d),
      info: (msg, d) => addToast(msg, 'info', d),
    }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <div className="toast-icon">
              {toast.type === 'success' && <CheckCircle2 size={20} />}
              {toast.type === 'error' && <AlertCircle size={20} />}
              {toast.type === 'info' && <Info size={20} />}
            </div>
            <div className="toast-message">{toast.message}</div>
            <button className="toast-close" onClick={() => removeToast(toast.id)}>
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .toast-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          pointer-events: none;
        }

        .toast {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-panel);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          pointer-events: auto;
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1), fadeOut 0.3s ease-out 3.7s;
          max-width: 400px;
        }

        .toast-success .toast-icon { color: var(--success); }
        .toast-error .toast-icon { color: var(--error); }
        .toast-info .toast-icon { color: var(--primary); }

        .toast-message {
          flex: 1;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .toast-close {
          color: var(--text-muted);
          transition: 0.2s;
          display: flex;
        }

        .toast-close:hover {
          color: var(--text-main);
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @media (max-width: 600px) {
          .toast-container {
            bottom: 16px;
            right: 16px;
            left: 16px;
          }
          .toast {
            max-width: none;
            width: 100%;
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
};
