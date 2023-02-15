const SearchSuggestions = ({suggestions}) => {
  return (
        <div className="bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 absolute">
          <ul>
            {suggestions.map((suggest) => (
              <li key={suggest} className="py-2 px-3 shadow-sm hover:bg-gray-100"> {suggest} </li>
            ))}
          </ul>
        </div>
  )
}

export default SearchSuggestions