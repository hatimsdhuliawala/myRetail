import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { DefaultState } from './Components/ItemOrderData'
import styles from './theme'

class ItemOrder extends React.Component {
  constructor () {
    super()
    this.state = DefaultState
  }
  render () {
    return (
      <React.Fragment>
        <div>Hello</div>
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
