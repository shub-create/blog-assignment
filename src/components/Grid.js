import React from 'react'
import Grid from '@mui/material/Grid';
import Card from './Card'

const GridLayout = (props) => {
   
  return (
    <div>
        <Grid container rowSpacing={ { xs: 3 ,sm: 4}} columnSpacing={{ xs: 2, sm: 3, md: 6 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12}}>
        {
          props?.item?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card post={item} />
          </Grid>
         ))
        }
       </Grid>
    </div>
  )
}

export default GridLayout