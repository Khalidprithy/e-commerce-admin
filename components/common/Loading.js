const Loading = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      <h4 className="text-2xl p-4 text-center text-white">
        Loading
        <span className="animate-pulse ml-4 text-4xl">...</span>
      </h4>
    </div>
  );
};

export default Loading;
