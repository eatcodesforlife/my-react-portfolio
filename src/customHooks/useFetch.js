import{ useState, useEffect } from 'react'

export const useFetch = (url) => {

    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const fetchData = async () => {
        const res = await fetch(url)
        const items = res.json()
        
        items.then( data =>{
            setIsLoading(false)
            setData(data)
        }).catch( err => console.log(err))

    }

    useEffect(()=>{

        fetchData()

    }, [url])


  return{
    data, isLoading
  }
}
