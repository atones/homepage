/* eslint-disable*/
import React from "react";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <footer className="text-center text-lg-start text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-12 col-lg-12 col-xl-12 mx-auto mb-12">
                                <h6 className="text-uppercase fw-bold mt-4 mb-4">
                                    <i className="fas fa-gem me-3"></i>
                                    (주)앳원스
                                </h6>
                                <address>
                                    사업자 등록번호 : 120-12-12345 | 대표 : 홍성완<br/>
                                    통신판매업 신고번호: 2021-서울강남-12345<br/>
                                    06236 서울특별시 강남구 논현동 177
                                </address>
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-md-10 col-lg-10 col-xl-10 mx-auto mb-10">
                                <ul className={"footer_term-wrapper"}>
                                    <li className={"footer_term"}>
                                        <a>개인정보처리방침</a>
                                    </li>
                                    <li className={"footer_term"}>
                                        <a>서비스 이용약관</a>
                                    </li>
                                    <li className={"footer_term"}>
                                        <a>제휴 제안 신청</a>
                                    </li>
                                    <li className={"footer_term"}>
                                        <a>공지사항</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                                Powered by Atones
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}
