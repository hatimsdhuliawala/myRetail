const styles = theme => ({
  button: {
    margin: '0px 0px 0px 5px',
  },
  stepperWidth: {
    backgroundColor: 'white',
    width: '300px',
  },
  nextBack: {
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  titleStyle: {
    width: '300px',
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#555555',
    textAlign: 'center',
    paddingTop: '15px',
  },
  marginBottom30: {
    marginBottom: '30px',
  },
  paddingTop15: {
    paddingTop: '10px',
  },
  starRating: {
    fontSize: '25px',
    marginRight: '10px',
  },
  starRatingInner: {
    fontSize: '15px',
    marginBottom: '5px',
  },
  proConTitle: {
    fontFamily: 'Helvetica',
    fontWeight: '800',
    fontStyle: 'strong',
    fontSize: '14px',
    marginBottom: '5px',
  },
  proConReview: {
    marginBottom: '5px',
  },
  proConReviewerName: {
    marginRight: '5px',
    color: 'blue',
  },
  proConReviewerDate: {
    marginLeft: '5px',
    marginBottom: '10px',
  },
  table: {
    backgroundColor: 'rgba(255, 245, 208, 0.3)',
    marginTop: '10px',
    padding: '10px',
  },
  headTitle: {
    fontFamily: 'Helvetica',
    fontWeight: '800',
    fontStyle: 'strong',
    fontSize: '16px',
    marginBottom: '2px',
    color: 'black',
  },
})

export default styles
