import React from 'react'
import ProgressBar from './ProgressBar'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})
function History() {
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()
  return (
    <>
      <ProgressBar />
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>123</TableBody>
        </Table>
      </TableContainer>
      <TableRow className={classes.root}>
        <TableCell>
          <Button
            aria-label="expand row"
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setOpen(!open)}
          >
            {open ? '關閉' : '打開'}
          </Button>
        </TableCell>
        <TableCell component="th" scope="row">
          111
        </TableCell>
        <TableCell align="right">222</TableCell>
        <TableCell align="right">333</TableCell>
        <TableCell align="right">444</TableCell>
        <TableCell align="right">555</TableCell>
      </TableRow>

      <TableRow>
        <TableCell
          style={{ width: '25%', paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      111
                    </TableCell>
                    <TableCell>111</TableCell>
                    <TableCell align="right">111</TableCell>
                    <TableCell align="right">222</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
export default History
