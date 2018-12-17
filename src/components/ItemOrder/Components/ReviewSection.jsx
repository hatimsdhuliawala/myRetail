import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from '../theme'
import {
  Grid,
} from '@material-ui/core'
import StarRatingComponent from 'react-star-rating-component'
import TableProsConsContainer from './TableProsConsContainer'

function ReviewSection (props) {
  const { itemOrder, classes} = props
  return (
    <Grid item container direction="column" justify="center" style={{width: '450px'}}>
      <Grid item container direction="row" className={classes.paddingTop15}>
        <Grid item container justify="flex-start" alignItems="flex-end" xs={6}>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              starColor={'#DC143C'}
              emptyStarColor={'grey'}
              value={Number.parseInt(itemOrder.CustomerReview[0].consolidatedOverallRating)}
              className={classes.starRating}
            />
           <span className={classes.overAll}>overall</span>
         </Grid>
         <Grid item container justify="flex-end" alignItems="flex-end" xs={6}>
            <span className={classes.viewAllReview}>view all {itemOrder.CustomerReview[0].totalReviews} reviews</span>
          </Grid>
       </Grid>
       <TableProsConsContainer />
    </Grid>
  )
}

export default withStyles(styles)(ReviewSection)
