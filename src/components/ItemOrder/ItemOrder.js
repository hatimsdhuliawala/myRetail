import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { DefaultState } from './Components/ItemOrderData'
import styles from './theme'
import ImageSectionContainer from './Components/ImageSectionContainer'
import ReviewSectionContainer from './Components/ReviewSectionContainer'
import ProductDetailContainer from './Components/ProductDetailContainer'
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
      <Grid container justify="center" alignItems="flex-start">
        <Grid container direction="row" justify="center" alignItems="flex-start" style={{width: '950px'}}>
          <Grid container item justify="center" alignItems="center" lg={6} md={6} sm={12}>
              <ImageSectionContainer />
          </Grid>
          <Grid item justify="center" container alignItems="center" lg={6} md={6} sm={12}>
            <ProductDetailContainer />
          </Grid>
          <Grid item justify="center" container alignItems="center" lg={6} md={6} sm={12}>
            <ReviewSectionContainer />
          </Grid>
          <Grid item justify="center" container alignItems="center" lg={6} md={6} sm={12} />
        </Grid>
      </Grid>
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
