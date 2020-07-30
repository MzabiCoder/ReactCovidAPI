import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

 export const fetchData = async (country) => {
     try {
        let newURL=url 
         if (country) {
             newURL = `${url}/countries/${country}`
         }  
         const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios(newURL)
         //console.log(`confirmed :${confirmed.value} recovered:${recovered.value} deaths:${deaths.value}`,lastUpdate);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
     } catch (error) {
        
    }
}

export const fetchDaily = async () => {
    
     try {
         const { data } = await axios.get(`${url}/daily`)
         
        return data.map((dailyDate) => ({
                 confirmed: dailyDate.confirmed.total,
                 deaths: dailyDate.deaths.total,
                 date:dailyDate.reportDate,
                     
        }))
        
     
     } catch (error) {
         
     }
}

export const exportCountry = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)
      return countries.map(val=>val.name)
        
    } catch (error) {
        
    }
}
 