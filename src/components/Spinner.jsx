const Spinner = ({ size = 24, color = 'var(--primary)', thickness = 3 }) => {
  return (
    <div className="custom-spinner" style={{
      width: size,
      height: size,
      borderWidth: thickness,
      borderTopColor: color,
    }}>
      <style>{`
        .custom-spinner {
          border-style: solid;
          border-color: var(--border-light);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
