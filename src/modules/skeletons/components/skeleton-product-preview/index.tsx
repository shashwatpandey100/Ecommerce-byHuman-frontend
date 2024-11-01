const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-square w-full bg-gray-100 bg-ui-bg-subtle"></div>
      <div className="flex flex-col gap-1 text-base-regular mt-2">
        <div className="w-3/5 h-6 bg-gray-100"></div>
        <div className="w-1/5 h-6 bg-gray-100"></div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview
