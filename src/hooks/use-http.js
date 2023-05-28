import { useState } from "react";
import { useDispatch } from "react-redux";

const useHttp = (requestDetails, onFetchComplete, dispatchBeforeLoadingEvents = []) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  
  const fetchDetails = async() => {
    if(dispatchBeforeLoadingEvents && dispatchBeforeLoadingEvents.length>0){
      dispatchBeforeLoadingEvents.forEach(dispatchEvent => dispatch(dispatchEvent.key(dispatchEvent.value)))
    }
    setError(null);
    try {
      const response = await fetch(
        requestDetails.url,
        {
          method: requestDetails.method? requestDetails.method: 'GET',
          headers: requestDetails.headers? requestDetails.headers: {},
          body: requestDetails.body? JSON.stringify(requestDetails.body): null,
        });
        if(!response.ok){
          throw new Error("Something went wrong with the public API")
        }
        const json = await response.json();
        onFetchComplete(json);
      } catch (err) {
        setError(err.message || "Something went wrong with the public API")
      }
  }
  return { error, fetchDetails };
}

export default useHttp