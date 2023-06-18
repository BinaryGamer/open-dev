import { useEffect, useState } from 'react'

export function Pokemon({ name }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData(null);
        setError(null);
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response)=>{
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}`);
            }
            return response.json();
        })
            .then((actualData) => {
                console.log(actualData);
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(()=> {
                setLoading(false);
            });
    }, [name]);



    return <>
    {loading && <p>Loading...</p>}
    {data && <img src={data["sprites"]["front_default"]} alt="nice" />}
    {error && <p>Error: {error}</p>}
    </>
    

}