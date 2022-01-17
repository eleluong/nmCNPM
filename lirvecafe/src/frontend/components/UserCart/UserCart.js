import React, {Fragment} from "react";
import User from "../User/User";
import styles from "./UserCart.css"
import "../../css/bootstrap.min.css";
import "../../css/bootstrap.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

const UserInfor = () => {
    return (
        <Fragment>
            <Header />
            <User></User>

            <div class="div-content">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
                      integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous"/>
                <div class="padding-top-2x mt-2 hidden-lg-up"></div>

                <div class="table-responsive wishlist-table margin-bottom-none">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#">Xóa toàn bộ</a>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div class="product-item">
                                    <a class="product-thumb" href="#"><img
                                        src="https://via.placeholder.com/220x180/FF0000/000000" alt="Product"/></a>
                                    <div class="product-info">
                                        <h4 class="product-title"><a href="#">Caffe sữa</a></h4>
                                        <div class="text-lg text-medium text-muted">43.000đ</div>
                                        <div>Availability:
                                            <div class="d-inline text-success">In Stock</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title=""
                                                       data-original-title="Remove item"><i class="icon-cross"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="product-item">
                                    <a class="product-thumb" href="#"><img
                                        src="https://via.placeholder.com/220x180/87CEFA/000000" alt="Product"/></a>
                                    <div class="product-info">
                                        <h4 class="product-title"><a href="#">Truyện Conan</a></h4>
                                        <div class="text-lg text-medium text-muted">15.000đ</div>
                                        <div>Availability:
                                            <div class="d-inline text-warning">2 - 3 Weeks</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title=""
                                                       data-original-title="Remove item"><i class="icon-cross"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="product-item">
                                    <a class="product-thumb" href="#"><img
                                        src="https://via.placeholder.com/220x180/483D8B/000000" alt="Product"/></a>
                                    <div class="product-info">
                                        <h4 class="product-title"><a href="#">Trà sữa</a></h4>
                                        <div class="text-lg text-medium text-muted">25.000đ</div>
                                        <div>Availability:
                                            <div class="d-inline text-success">In Stock</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title=""
                                                       data-original-title="Remove item"><i class="icon-cross"></i></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <hr class="mb-4"/>
                <div class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="inform_me" checked=""/>
                    <label class="custom-control-label" for="inform_me">Thông báo cho tôi nếu có sản phẩm mới!</label>
                </div>
            </div>

        

        </Fragment>
    )
}
export default UserInfor