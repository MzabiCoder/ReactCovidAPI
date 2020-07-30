 import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { exportCountry } from '../../api'


const CountryPicker = ({changeCountry}) => {
    const [countries,setCountries]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
 
        const fetchCountries = async () => {
            setCountries(await exportCountry())
            setLoading(!loading)
           
        }
      
        fetchCountries()
         
    }, [setCountries])
  
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect  onChange={(e)=>changeCountry(e.target.value)}>
        <option value="global">Global</option>
       {!loading && countries.map((count, i)=><option value={count} key={i}>{count}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker