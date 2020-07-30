

import React,{useState,useEffect}  from 'react';
 //import InfiniteScroll from 'react-infinite-scroll-component'
import { Cards, CountryPicker, Charts } from './components'
import { fetchData } from './api'
import styles from './App.module.css'

const App = () => {
   const [Data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [Country,setCountry]=useState('')

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData()
       setData(data)
      setLoading(false)
       
      
   } 
    fetch()
    
  }, [])
  
  const changeCountry = async (country) => {
    setData(await fetchData(country))
    setCountry(country)
    setLoading(false)
  }
  return (
     <div className={styles.container}>
      <Cards loading={loading} Data={Data} />
      <CountryPicker changeCountry={changeCountry} />
      <Charts Data={Data} loading={loading} Country={Country} />
      </div>
  );

 }
 

export default App;







