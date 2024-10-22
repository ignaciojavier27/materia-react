import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getData = async() => {
            try{
                let res = await fetch(url);

                if(!res.ok){
                    throw { 
                        error:true, 
                        status: res.status,
                        statusText: !res.statusText
                                        ? "Ocurrió un error"
                                        : res.statusText
                    }
                }

                let data = await res.json();
                setIsLoading(false);
                setData(data);
                setError({error:false})

            }catch(error){
                setIsLoading(true);
                setError(error);
            }
        }

        getData(url);
        
    }, [url])
    
    return { data, isLoading, error }
}