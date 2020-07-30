import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup'
import Spinner from '../Spinner'
import cx from 'classnames'
 import styles from 'classnames'

const Cards = ({Data,loading}) => {
    if (loading) {
       return <Spinner/>
    }
    if (Data !== null) {
        const {confirmed,recovered,deaths,lastUpdate}=Data

        return (
            <div className="container">
                <Grid container spacing={3} justify="center">
                  
        <Grid item component={Card} xs={12} md={3} className="card infected">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>   Infected</Typography>   
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={confirmed.value}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography> 
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number od active cases COVID</Typography> 
                        </CardContent>      
                    </Grid> 
                    <Grid item component={Card} xs={12} md={3} className="card recovered">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>   
                            <Typography variant="h5"><CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                            /></Typography> 
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>

                             <Typography variant="body2">Number of recoveries from COVID-19</Typography> 
                        </CardContent>      
                    </Grid> 
                    <Grid item component={Card} xs={12} md={3} className="card deaths">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>   
                            <Typography variant="h5"><CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                            /></Typography> 
                            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>

                             <Typography variant="body2">Number of deaths caused by COVID-19</Typography> 
                        </CardContent>      
                    </Grid> 
                    </Grid>     
            </div>
        )
     }
       
    
    
}
export default Cards