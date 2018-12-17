import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from '../theme'
import {
  Grid,
  Button,
} from '@material-ui/core'
import Label from "@material-ui/icons/Label";

function escapeHtml (input) {
  return { __html: input }
}

function ProductDetail (props) {
  const { itemOrder, setQuantity, itemQuantity, classes} = props
  return (
    <Grid item container direction="column" justify="center" style={{width: '450px'}}>
        <Grid item container direction="row" alignItems="flex-end" className={classes.productDetailTop}>
          <span className={classes.price}>{itemOrder.Offers[0].OfferPrice[0].formattedPriceValue}</span>
          <span className={classes.priceQualifier}>{itemOrder.Offers[0].OfferPrice[0].priceQualifier}</span>
        </Grid>
        <Grid item container direction="column">
          <hr className={classes.line} />
            {itemOrder.Promotions.map(promotion => {
              return (
                <Grid item container directrion="row" justify="flex-start" alignItems="center" key={promotion.Description[0].shortDescription}>
                  <Label className={classes.promotionLabel} />
                  <span className={classes.promotionDesc}>{promotion.Description[0].shortDescription}</span>
                </Grid>
              )
            })}
          <hr className={classes.line} />
        </Grid>
        {/* Quantity Section */}
        <Grid item container direction="row" alignItems="center" className={classes.quantitySection}>
          <Grid item xs={4}container justify="flex-start">
            <span className={classes.quantityTag}>quantity:</span>
          </Grid>
          <Grid item xs={8} container justify="flex-end" alignItems="center">
            <Button onClick={() => setQuantity(-1)}
            className={classes.quantityButton}
            disabled={itemQuantity <= 1}>
            -
            </Button>
            <span>{itemQuantity} </span>
            <Button onClick={() => setQuantity(+1)}
            className={classes.quantityButton}>
            +
            </Button>
          </Grid>
        </Grid>
        {/* Add to Cart and Buy Online Buttons */}
        <Grid className={classes.buttonSection} item container>
          <Grid item xs={6}>
            {(itemOrder.purchasingChannelCode === '0' || itemOrder.purchasingChannelCode === '2') &&
              <Grid item container justify="center">
                <Button className={classes.pickUpInStore}>
                  Pick up in store
                </Button>
                <span className={classes.pickUpInStoreText}>find in a store</span>
              </Grid>
            }
          </Grid>
          <Grid item xs={6}>
            {(itemOrder.purchasingChannelCode === '0' || itemOrder.purchasingChannelCode === '1') &&
              <Button className={classes.addToCart}>
                Add to cart
              </Button>
            }
          </Grid>
        </Grid>
        {/* Return Section */}
        <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
          <span className={classes.return}> returns </span>
          <span className={classes.returnSlash}> | </span>
          <span className={classes.returnText}>
            This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.
          </span>
        </Grid>
        {/* Button Section */}
        <Grid className={classes.buttonSection} item container justify="center" alignItems="center">
          <Grid item xs={4}>
            <Button className={classes.secondaryButton}>
              Add to registry
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.secondaryButton}>
              add to list
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.secondaryButton}>
              share
            </Button>
          </Grid>
        </Grid>
        {/* Product Description */}
        <Grid item container direction="column" justify="flex-start" alignItems="flex-start">
          <span className={classes.productHighlights}>Product Highlights</span>
          <ul className={classes.listGroup}>
            {itemOrder.ItemDescription[0].features.map(item => {
              return (
                <li className={classes.productHighlightList} dangerouslySetInnerHTML={escapeHtml(item)} key={item}/>
              )
            })}
          </ul>
        </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ProductDetail)
