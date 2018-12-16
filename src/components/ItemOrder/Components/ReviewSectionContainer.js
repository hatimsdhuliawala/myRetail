import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ReviewSection from './ReviewSection'
import styles from '../theme'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ReviewSectionContainer extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    return (
      <ReviewSection
        itemOrder={this.props.CatalogEntryView[0]}
      />
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
    const {
      CatalogEntryView,
    } = itemOrder
    return {
      CatalogEntryView,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReviewSectionContainer))
