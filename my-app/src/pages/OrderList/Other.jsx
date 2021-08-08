import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  container: {
    padding: '30px 0',
  },
  card: {
    margin: '10px 15px',
  },
  img: {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

function Other() {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.h4}>
          <h4>其他人也買了：</h4>
          <hr />
        </div>
        <Grid container direction="row" justifyContent="center">
          <Card className={classes.card}>
            <CardContent>
              <img className={classes.img} src="/m2.jpg" alt="" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                有機白米2kg
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                購買
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <img className={classes.img} src="/m2.jpg" alt="" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                有機白米2kg
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                購買
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <img className={classes.img} src="/m2.jpg" alt="" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                有機白米2kg
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                購買
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <img className={classes.img} src="/m2.jpg" alt="" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                有機白米2kg
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                購買
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </>
  )
}
export default Other
