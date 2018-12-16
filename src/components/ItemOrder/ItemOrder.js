import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { DefaultState } from './Components/ItemOrderData'
import styles from './theme'
import ImageSectionContainer from './Components/ImageSectionContainer'
import ReviewSectionContainer from './Components/ReviewSectionContainer'
import {
  Grid,
} from '@material-ui/core'

class ItemOrder extends React.Component {
  constructor () {
    super()
    this.state = DefaultState
  }
  render () {
    return (
      <React.Fragment>
        <Grid container direction="row">
          <Grid container justify="flex-end" alignItems="center" lg={6} md={6} sm={12}>
              <ImageSectionContainer />
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <ReviewSectionContainer />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  }, dispatch)

const mapStateToProps = state => {
  const {
    itemOrder,
  } = state
  return {
    itemOrder,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ItemOrder))
