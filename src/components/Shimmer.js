const Shimmer = () => {
  return (
    <div
      className="mx-auto grid w-full max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,250px),300px))] justify-center gap-[22px] px-[clamp(12px,3vw,32px)] pt-8 pb-12 max-[480px]:grid-cols-[minmax(0,1fr)] max-[480px]:gap-4 max-[480px]:px-3 max-[480px]:pt-6 max-[480px]:pb-8"
      role="status"
      aria-label="Loading restaurants">
      {Array.from({ length: 8 }, (_, index) => (
        <div
          className="min-w-0 rounded-[20px] border border-[#edf0f3] bg-white p-3 shadow-[0_6px_20px_rgba(15,23,42,0.055)]"
          aria-hidden="true"
          key={index}>
          <div className="mb-4 aspect-[1.45] animate-pulse rounded-[14px] bg-slate-100 motion-reduce:animate-none max-[480px]:aspect-[1.6]" />
          <div className="mb-3 h-[19px] w-[68%] animate-pulse rounded-full bg-slate-100 motion-reduce:animate-none" />
          <div className="my-2.5 h-[14px] w-[92%] animate-pulse rounded-full bg-slate-100 motion-reduce:animate-none" />
          <div className="my-2.5 h-[14px] w-[48%] animate-pulse rounded-full bg-slate-100 motion-reduce:animate-none" />
          <div className="my-2.5 h-[14px] w-[34%] animate-pulse rounded-full bg-slate-100 motion-reduce:animate-none" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
