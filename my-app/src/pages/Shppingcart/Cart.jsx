import React from 'react'

function Cart(props) {
  return (
    <>
      <div class="container">
        <div class=""></div>
        {/* <!-- 購物流程圖 --> */}
        <div class="content-step">
          <div class="step-list step-active">
            <div>
              <span>1</span>
            </div>
            <span>購物車清單</span>
          </div>
          <div class="step-address">
            <div>
              <span>2</span>
            </div>
            <span>確認付款與地址</span>
          </div>
          <div class="step-complete">
            <div>
              <span>3</span>
            </div>
            <span>購物完成</span>
          </div>
        </div>
        {/* <!-- 購物清單 --> */}
        <div class="content-order">
          {/* <!-- 購物清單標題 --> */}
          <ul class="shopping-title padding-box">
            <li>
              <input type="checkbox" />
              <span>全選</span>
            </li>
            <li>商品名稱</li>
            <li>規格</li>
            <li>小計</li>
            <li>數量</li>
            <li>變更</li>
          </ul>
          {/* <!-- 購物清單選項 --> */}
          <ul class="shoppingBox padding-box">
            <li>
              <div class="product_pic">
                <input type="checkbox" name="" id="" />
                <a href="/" alt="">
                  <img src="/img/cabbage.jpg_1140x855.jpg" alt="" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="/" alt="">
                  青花菜
                </a>
              </div>
            </li>
            <li>250g±10%</li>
            <li>
              <div class="subtotal">
                <span>NT49</span>
              </div>
            </li>
            <li class="number">
              <div class="number">
                <img
                  src="https://online.carrefour.com.tw/Content/images/shoppingcart/minus.svg"
                  alt=""
                />
                <input type="text" value="1" class="number_input" />
                <img
                  src="https://online.carrefour.com.tw/Content/images/shoppingcart/plus.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <span class="td-delete">刪除</span>
            </li>
          </ul>

          {/* 其他人也買了 */}
          <div class="title">
            <p>其他人也買了：</p>
          </div>
          {/* {<描述總計欄  */}
          <div class="descriBox">
            <div class="discount col-10">
              <p>折價券使用</p>

              <select name="" id="" class="px-5 py-1">
                <option selected>請選擇</option>
                <option value="1">aaaaaaaa</option>
                <option value="2">bbbbbbbb</option>
                <option value="3">cccccccc</option>
              </select>
            </div>
            <div class="col-2">
              <p>
                共購買<span>?</span>樣商品
              </p>
              <p>總計100元</p>
            </div>
          </div>
        </div>
        {/* 流程 */}
        <div class="content-step">
          <div class="step-list step-active">
            <div>
              <span>1</span>
            </div>
            <span>購物車清單</span>
          </div>
          <div class="step-address">
            <div>
              <span>2</span>
            </div>
            <span>確認付款與地址</span>
          </div>
          <div class="step-complete">
            <div>
              <span>3</span>
            </div>
            <span>購物完成</span>
          </div>
        </div>
        {/* 信用卡 */}
        <div class="payForm">
          <div class="title">
            <p>付款資訊:</p>
          </div>
          <div class="form-check m-2">
            <div class="check_box">
              <input
                type="radio"
                class="form-check-input"
                name="pay_method"
                required
              />
              <label class="form-check-label" for="validationFormCheck2">
                信用卡付款
              </label>
            </div>
            <div class="check_box">
              <input
                type="radio"
                class="form-check-input"
                id="validationFormCheck3"
                name="pay_method"
                required
              />
              <label class="form-check-label" for="validationFormCheck2">
                門市取貨
              </label>
            </div>
          </div>

          <div class="formContainer">
            <form class="row g-3 needs-validation credit m-1 p-2" novalidate>
              <div class="col-md-6">
                <label for="validationCustom01" class="form-label">
                  持卡人姓名
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  value="請輸入持卡人姓名"
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">
                  信用卡類型
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>VISA / MASTER / JCB</option>
                  <option value="1">VISA</option>
                  <option value="2">MASTER</option>
                  <option value="3">JCB</option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label">信用卡卡號：</label>
                <div class="group">
                  <input type="text" class="card form-control" maxlength="4" />
                  <input type="text" class="card form-control" maxlength="4" />
                  <input type="text" class="card form-control" maxlength="4" />
                  <input type="text" class="card form-control" maxlength="4" />
                </div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom04" class="form-label">
                  到期日
                </label>
                <input type="date" class="form-control" />
              </div>
              <div class="col-md-4">
                <label for="validationCustom05" class="form-label">
                  背面末三碼
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  required
                />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    我同意本次付款資訊，並設為快速結帳
                  </label>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <button class="btn btn-primary" type="submit">
                  送出
                </button>
              </div>
            </form>
          </div>

          <div class="form-check mb-3"></div>
        </div>
      </div>
    </>
  )
}

export default Cart
