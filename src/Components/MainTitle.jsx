import React from 'react'

const directionMap = {
  content_center: 'text-center items-center',
  content_left: 'text-left items-start',
  content_right: 'text-right items-end',
}

const MainTitle = ({ direction = 'content_center', subTitle = '', title, description }) => {
  const alignmentClasses = directionMap[direction] || directionMap.content_center

  return (
    <div className={`flex flex-col gap-3 ${alignmentClasses} w-full mb-8`}>
      {subTitle && (
        <p className="text-xs font-medium tracking-[0.25em] text-yellow-500 uppercase">
          {subTitle}
        </p>
      )}
      
      <h2 className="text-4xl sm:text-5xl tracking-tight text-white">
        {title}
      </h2>
      
      {description && (
        <p className="max-w-2xl text-base text-neutral-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default MainTitle