import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieCheck');
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieCheck', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieCheck', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          We use cookies to analyze traffic and improve your experience.
          Your files are never uploaded — all processing is 100% local.
        </p>
        <div className="cookie-buttons">
          <button onClick={handleDecline} className="btn-decline">Decline</button>
          <button onClick={handleAccept} className="btn-accept">Accept</button>
        </div>
      </div>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 520px;
          background: var(--bg-panel);
          border: 1px solid var(--border-light);
          padding: 16px 24px;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 40px rgba(0,0,0,0.25);
          z-index: 1000;
          animation: slideUp 0.35s ease-out;
        }
        .cookie-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .cookie-content p {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }
        .cookie-buttons {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .btn-accept, .btn-decline {
          padding: 8px 18px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
          white-space: nowrap;
        }
        .btn-accept {
          background: var(--gradient);
          color: #fff;
          border: none;
        }
        .btn-accept:hover { opacity: 0.9; }
        .btn-decline {
          background: transparent;
          border: 1px solid var(--border-active);
          color: var(--text-main);
        }
        .btn-decline:hover {
          background: var(--bg-surface);
        }
        @media (max-width: 600px) {
          .cookie-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .cookie-buttons {
            width: 100%;
            justify-content: flex-end;
          }
        }
        @keyframes slideUp {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
