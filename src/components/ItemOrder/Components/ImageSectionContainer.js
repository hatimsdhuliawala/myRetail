import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ImageSection from './ImageSection'
import styles from '../theme'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setCurrentImage
} from '../../../store/itemOrder/actionCreator'

class ImageSectionContainer extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  handleNext = () => {
      this.props.setCurrentImage(1)
  }

  handleBack = () => {
    this.props.setCurrentImage(-1)
  }

  render () {
    return (
      <ImageSection
        itemOrder={this.props.CatalogEntryView[0]}
        currentImage={this.props.currentImage}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
      />
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setCurrentImage,
  }, dispatch)


  const mapStateToProps = state => {
    const {
      itemOrder,
    } = state
    const {
      currentImage,
      CatalogEntryView
    } = itemOrder
    return {
      currentImage,
      CatalogEntryView,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ImageSectionContainer))
