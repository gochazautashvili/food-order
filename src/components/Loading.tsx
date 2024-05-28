const Loading = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10 grid grid-cols-2 gap-5">
      <div className="flex flex-col bg-neutral-300 h-35 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
      </div>
      <div className="flex flex-col bg-neutral-300 h-35 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
      </div>
      <div className="flex flex-col bg-neutral-300 h-35 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
      </div>
      <div className="flex flex-col bg-neutral-300 h-35 animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export default Loading;
