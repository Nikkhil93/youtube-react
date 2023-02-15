const SearchSuggestions = ({suggestions}) => {
  return (
        (suggestions.length>0 ? <div className="bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 absolute z-50">
          <ul>
            {suggestions.map((suggest) => (
              <li key={suggest} className="py-2 px-3 shadow-sm hover:bg-gray-100"> {suggest} </li>
            ))}
          </ul>
        </div>: null)
  )
}

export default SearchSuggestions