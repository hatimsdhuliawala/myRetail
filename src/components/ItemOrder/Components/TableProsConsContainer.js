import React from 'react'
import TableProsCons from './TableProsCons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from '../theme'
import { withStyles } from '@material-ui/core/styles'

class TableProsConsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    return (
      <TableProsCons
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
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TableProsConsContainer))
