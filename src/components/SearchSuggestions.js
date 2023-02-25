const SearchSuggestions = ({suggestions, fetchVideos}) => {
  return (
        (suggestions.length>0 ? <><div className="bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 absolute z-50">
          <ul>
            {suggestions.map((suggest) => (
              <li key={suggest} onClick= {()=> fetchVideos(suggest)} className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"> {suggest} </li>
            ))}
          </ul>
        </div>
        <div className=" w-screen h-screen absolute right-0 top-0"  onClick= {()=> fetchVideos('')}></div>
        </>: null)
  )
}

export default SearchSuggestions