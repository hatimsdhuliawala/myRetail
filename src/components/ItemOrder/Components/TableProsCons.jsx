import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import {
  Grid,
} from '@material-ui/core'
import styles from '../theme'
import StarRatingComponent from 'react-star-rating-component'

function escapeHtml (input) {
  return { __html: input }
}
function datFormatter (input) {
  var d = new Date(input);
  return d.toDateString()
}
let TableProsCons = props => {
  const { itemOrder, classes } = props
  return (
    <div className={classes.table}>
      <Table aria-labelledby="tableTitle">
      <TableHead>
        <TableRow>
          <TableCell padding="none">
            <Grid container direction="column" justify="flex-start" alignItems="flex-start">
              <span className={classes.headTitle}>PRO</span>
              <span>most helpful 4-5 star review</span>
            </Grid>
          </TableCell>
          <TableCell padding="none">
            <Grid container direction="column" justify="flex-start" alignItems="flex-start">
              <span className={classes.headTitle}>CON</span>
              <span>most helpful 1-2 star review</span>
            </Grid>
          </TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{maxWidth: '200px', paddingTop: '0px'}} padding="none">
              <Grid container direction="column" justify="flex-start" alignItems="flex-start">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                starColor={'#DC143C'}
                emptyStarColor={'grey'}
                value={Number.parseInt(itemOrder.CustomerReview[0].Pro[0].overallRating)}
                className={classes.starRatingInner}
              />
                <span className={classes.proConTitle} dangerouslySetInnerHTML={escapeHtml(itemOrder.CustomerReview[0].Pro[0].title)} />
                <span className={classes.proConReview} dangerouslySetInnerHTML={escapeHtml(itemOrder.CustomerReview[0].Pro[0].review)} />
                <Grid item container direction="row">
                  <span className={classes.proConReviewerName}>{itemOrder.CustomerReview[0].Pro[0].screenName}</span>
                  <span className={classes.proConReviewerDate}>{datFormatter(itemOrder.CustomerReview[0].Pro[0].datePosted)}</span>
                </Grid>
              </Grid>
            </TableCell>
            <TableCell style={{maxWidth: '200px'}} padding="none">
              <Grid container direction="column" justify="flex-start" alignItems="flex-start">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                starColor={'#DC143C'}
                emptyStarColor={'grey'}
                value={Number.parseInt(itemOrder.CustomerReview[0].Con[0].overallRating)}
                className={classes.starRatingInner}
              />
                <span className={classes.proConTitle} dangerouslySetInnerHTML={escapeHtml(itemOrder.CustomerReview[0].Con[0].title)} />
                <span className={classes.proConReview} dangerouslySetInnerHTML={escapeHtml(itemOrder.CustomerReview[0].Con[0].review)} />
                <Grid item container direction="row">
                  <span className={classes.proConReviewerName}>{itemOrder.CustomerReview[0].Con[0].screenName}</span>
                  <span className={classes.proConReviewerDate}>{datFormatter(itemOrder.CustomerReview[0].Con[0].datePosted)}</span>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </div>
  )
}
export default withStyles(styles)(TableProsCons)
