import React, { useEffect, useState } from 'react'

const useProductos = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setLoading(false);
                setData(json);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            })
    }, [url]);
    return { data, loading, error }
}

export default useProductos
