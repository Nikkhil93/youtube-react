import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="p-2 m-2 md:w-48 lg:w-64 h-52 shadow-lg bg-gray-200"></div>
        ))}
    </div>
  )
}

export default Shimmer