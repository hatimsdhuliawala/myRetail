import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProductDetail from './ProductDetail'
import styles from '../theme'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setQuantity,
} from '../../../store/itemOrder/actionCreator'

class ProductDetailContainer extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  setQuantity = (value) => {
    this.props.setQuantity(value)
  }

  render () {
    return (
      <ProductDetail
        itemOrder={this.props.CatalogEntryView[0]}
        setQuantity={this.setQuantity}
        itemQuantity={this.props.itemQuantity}
      />
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setQuantity,
  }, dispatch)

  const mapStateToProps = state => {
    const {
      itemOrder,
    } = state
    const {
      itemQuantity,
      CatalogEntryView
    } = itemOrder
    return {
      itemQuantity,
      CatalogEntryView,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductDetailContainer))
