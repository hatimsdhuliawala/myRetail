import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { withStyles } from '@material-ui/core/styles'
import styles from '../theme'

function DialogBoxError (props) {
  const { largerImage, closeImage, itemOrder, currentImage, classes } = props
  console.log(largerImage)
  return (
    <Dialog
      open={largerImage}
      onClose={() => closeImage(false)}
      className={classes.dialogBox}
    >
      <DialogContent>
      {
        currentImage === 0
        ? <img src={itemOrder.Images[0].PrimaryImage[0].image} alt={itemOrder.Images[0].PrimaryImage[0].image} />
        : <img src={itemOrder.Images[0].AlternateImages[currentImage - 1].image} alt={itemOrder.Images[0].AlternateImages[currentImage-1].image} />
      }
      </DialogContent>
    </Dialog>
  )
}
export default withStyles(styles)(DialogBoxError)
