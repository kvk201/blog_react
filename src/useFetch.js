import { useState, useEffect } from "react";

// custom hook need to start with keyword use
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

     //best place to fetch data
    useEffect(()=>{
        console.log('use effect ran only once during intialization..');
        setTimeout(() => {
            fetch(url)
                .then(res=>{
                    if (!res.ok){
                        throw Error('could not fetch data for resource')
                    }
                    return res.json();
                })
                .then(data=>{
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    setError(err.message)
                    setIsPending(false)
                });
                }, 1000);
        
    }, [url]);

    return { data, isPending, error}
}
export default useFetch;