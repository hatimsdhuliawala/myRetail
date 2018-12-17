import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from '../theme'
import {
  Grid,
  Button,
} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import MobileStepper from "@material-ui/core/MobileStepper"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import DialogBoxLargerImageContainer from './DialogBoxLargerImageContainer'
import ZoomIn from "@material-ui/icons/ZoomIn"

function escapeHtml (input) {
  return { __html: input }
}

function ImageSection (props) {
  const { itemOrder, currentImage, handleBack, handleNext, closeImage, classes} = props
  return (
    <Grid item container direction="column" justify="center" style={{width: '450px'}}>
      { currentImage === null
        ? <CircularProgress />
        : <Grid container item xs={12} justify="center" alignItems="center">
            <Grid>
              <div className={`${classes.titleStyle} ${classes.marginBottom30}`} dangerouslySetInnerHTML={escapeHtml(itemOrder.title)} />
            </Grid>
            <Grid item xs={12} className={classes.marginBottom30}>
              {
                currentImage === 0
                ? <img src={itemOrder.Images[0].PrimaryImage[0].image} alt={itemOrder.Images[0].PrimaryImage[0].image} />
                : <img src={itemOrder.Images[0].AlternateImages[currentImage - 1].image} alt={itemOrder.Images[0].AlternateImages[currentImage-1].image} />
              }
            </Grid>
            <Grid item xs={12} container justify="center" alignItems="center">
              <ZoomIn className={classes.viewLargerIcon} onClick={() => closeImage(true)}/>
              <span className={classes.viewLarger} onClick={() => closeImage(true)}>View Larger</span></Grid>
            <DialogBoxLargerImageContainer />
            <Grid>
            <MobileStepper className={classes.stepperWidth}
              steps={Number.parseInt(itemOrder.Images[0].imageCount)}
              position="static"
              activeStep={currentImage}
              nextButton={
                <Button
                  className={classes.nextBack}
                  size="small"
                  onClick={handleNext}
                  disabled={currentImage === itemOrder.Images[0].imageCount - 1}
                >
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button
                  className={classes.nextBack}
                  size="small"
                  onClick={handleBack}
                  disabled={currentImage === 0}
                >
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
              />
            </Grid>
          </Grid>
      }
    </Grid>
  )
}

export default withStyles(styles, { withTheme: true })(ImageSection)
