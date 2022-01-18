import React, {Fragment} from "react";
import { useState, useEffect } from "react"
import User from "../User/User";
import styles from "./UserCart.css"
import "../../css/bootstrap.min.css";
import "../../css/bootstrap.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import {getCookie, deleteCookie} from "../constants/userCookie"


const UserInfor = () => {

    const [bills, setBills] = useState([])

    const [billsChange, setBillsChange] = useState(false)

    let user = getCookie('customer');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = {}
    }
    const ID = user.id;

    console.log('ID: ', ID);

    useEffect(() => {
        fetch('http://localhost:5000/bill/get_by_customerId/' + ID)
            .then(response => response.json())
            .then(resBills => {
                console.log(resBills);
                setBills(resBills);
            })
    }, [billsChange])


    function handleDeleteBill(id){
        console.log('xxxx', id);
        fetch('http://localhost:5000/bill/delete/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            })
            .then(response => {
                console.log(response);
                console.log(response.json());
                return response
            })
            .then(res => {
                console.log(132);
                console.log(res);
                setBillsChange(!billsChange)
                
            })
    }

    return (
        <Fragment>
            <Header />
            <User></User>

            <div class="div-content">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
                <div class="padding-top-2x mt-2 hidden-lg-up"></div>
                    
                    <div class="table-responsive wishlist-table margin-bottom-none">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Đơn hàng</th>
                                    {/* <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#">Xóa toàn bộ</a></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bills.map((bill, index) => {
                                        return (
                                            <tr key= {index}>
                                                <td>
                                                    <div class="product-item">
                                                        <div class="product-info">
                                                            {/* <h4 class="product-title"><a href="#">Caffe sữa</a></h4> */}
                                                            {
                                                                bill.products.map((product, index) => 
                                                                    <div key= {index} class="text-lg text-medium text-muted">{product.name || 'productname'} x {product.number}</div>
                                                                
                                                                )
                                                            }
                                                            <div>Trạng thái: 
                                                                <div class={"d-inline text-" + (bill.state == 0 ? 'danger' : bill.state == 1 ? 'warning' : 'success')}>
                                                                    {bill.state == 0 ? ' Chờ xác nhận' : bill.state == 1 ? ' Chưa giao' : ' Hoàn thành'}
                                                                </div>
                                                                {
                                                                    
                                                                }
                                                            </div>
                                                            <h4 class="product-title"><a href="#">Tổng tiền: {bill.total || 'tong'} VND</a></h4>
                                                        </div>
                                                    </div>
                                                </td>
                                                            {/* <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#">Xóa toàn bộ</a></th> */}
                                                <td class="text-center">
                                                    <a class="remove-from-cart"  data-toggle="tooltip" title="" data-original-title="Remove item"
                                                        onClick={() => handleDeleteBill(bill.billId)}
                                                    >
                                                        <i class="icon-cross"></i>
                                                        Xóa
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                    {/* <hr class="mb-4"/>
                    <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox" id="inform_me" checked=""/>
                        <label class="custom-control-label" for="inform_me">Thông báo cho tôi nếu có sản phẩm mới!</label>
                    </div> */}
        </div>

        

        </Fragment>
    )
}
export default UserInfor