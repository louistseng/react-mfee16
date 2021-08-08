import React from 'react'
import ProgressBar from './ProgressBar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  container: {
    backgroundColor: '#cfe8fc',
    padding: '0',
    marginTop: '20px',
  },
})
function ProductOrder() {
  const classes = useStyles()
  return (
    <>
      <ProgressBar />
      <Container className={classes.container} maxWidth="lg">
        <Grid item xs={12} sm={12}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className={classes.container}>
                  <TableCell>商品名稱</TableCell>
                  <TableCell align="right">購買數量</TableCell>
                  <TableCell align="right">售價</TableCell>
                  <TableCell align="right">小計</TableCell>
                  <TableCell align="right">移除</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <img src="/logo192.png" alt="" />
                  </TableCell>
                  <TableCell align="right">1111</TableCell>
                  <TableCell align="right">2222</TableCell>
                  <TableCell align="right">3333</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary">
                      移除
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <img src="/logo192.png" alt="" />
                  </TableCell>
                  <TableCell align="right">1111</TableCell>
                  <TableCell align="right">2222</TableCell>
                  <TableCell align="right">3333</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary">
                      移除
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <img src="/logo192.png" alt="" />
                  </TableCell>
                  <TableCell align="right">1111</TableCell>
                  <TableCell align="right">2222</TableCell>
                  <TableCell align="right">3333</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary">
                      移除
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <img src="/logo192.png" alt="" />
                  </TableCell>
                  <TableCell align="right">1111</TableCell>
                  <TableCell align="right">2222</TableCell>
                  <TableCell align="right">3333</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary">
                      移除
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </>
  )
}
export default ProductOrder
