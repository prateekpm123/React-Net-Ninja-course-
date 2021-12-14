import { useEffect, useState } from "react";

const useFetch = (url) => {

    let [data, setData] = useState(null);
    // This is used to determine when to stop the loading message
    let [isPending, setIsPending] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        
        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource \n Check the URL');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if(err.name === "AbortError") {
                    console.log("aborted Fetch");
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
    
                }
           })
    }, [url]);

    return { data, error, isPending};
}

export default useFetch;