const Shimmer = () => {
  return (
    <div
      className="shimmer-container"
      role="status"
      aria-label="Loading restaurants">
      {Array.from({ length: 8 }, (_, index) => (
        <div className="shimmer-card" aria-hidden="true" key={index}>
          <div className="shimmer-image" />
          <div className="shimmer-line shimmer-title" />
          <div className="shimmer-line shimmer-description" />
          <div className="shimmer-line shimmer-meta" />
          <div className="shimmer-line shimmer-meta shimmer-meta-short" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
