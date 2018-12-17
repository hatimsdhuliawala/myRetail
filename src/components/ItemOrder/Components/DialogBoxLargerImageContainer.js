import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import DialogBoxLargerImage from './DialogBoxLargerImage'
import styles from '../theme'
import {
  closeImage,
} from '../../../store/itemOrder/actionCreator'

class DialogBoxLargerImageContainer extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  closeImage = (value) => {
    this.props.closeImage(value)
  }

  render () {
    return (
      <DialogBoxLargerImage
        largerImage={this.props.largerImage}
        closeImage={this.closeImage}
        itemOrder={this.props.CatalogEntryView[0]}
        currentImage={this.props.currentImage}
      />
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    closeImage,
  }, dispatch)

const mapStateToProps = state => {
  const {
    itemOrder,
  } = state
  const {
    CatalogEntryView,
    largerImage,
    currentImage,
  } = itemOrder
  return {
    largerImage,
    currentImage,
    CatalogEntryView,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DialogBoxLargerImageContainer))
