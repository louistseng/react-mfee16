import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  container: {
    backgroundColor: '#cfe8fc',
    padding: '10px',
  },
  receive: {
    '& > *': {
      margin: '20px',
      width: '50ch',
    },
  },
  h4: { margin: '20px' },
})

function BasicTextFields() {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container} maxWidth="lg">
        <h4 className={classes.h4}>請填寫收件地址：</h4>
        <hr />
        <form className={classes.receive} noValidate autoComplete="off">
          <div>收件人資料：</div>
          <TextField
            id="outlined-basic-1"
            label="請輸入姓名.."
            variant="outlined"
          />
          <TextField
            id="outlined-basic-2"
            label="請輸入電話..."
            variant="outlined"
          />
          <br />
          <div>收件地址：</div>
          <TextField
            id="outlined-select-currency"
            select
            label="請選擇縣市"
            helperText="Please select your currency"
          >
            <option>桃園區</option>
            <option>中壢區</option>
            <option>內壢區</option>
            <option>楊梅區</option>
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="請選擇區域"
            helperText="Please select your currency"
          >
            <option>桃園區</option>
            <option>中壢區</option>
            <option>內壢區</option>
            <option>楊梅區</option>
          </TextField>
          <TextField
            fullWidth
            label={'請輸入詳細巷弄門牌號碼...'}
            id="fullWidth"
          />
          <br />
          <div>配送方式：</div>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel
              value="門市取貨"
              control={<Radio />}
              label="門市取貨"
            />
            <FormControlLabel
              value="貨到付款"
              control={<Radio />}
              label=" 貨到付款"
            />
          </RadioGroup>
        </form>
      </Container>
    </>
  )
}
export default BasicTextFields
