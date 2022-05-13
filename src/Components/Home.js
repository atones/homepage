import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";

function Home() {
    return (
        <div className="home">
            <div className="home-top-background">
                <div className="home-top-background-img">
                    <div className="home-top-text">
                        <h2>복잡한 세상, 결제만은 간편하게</h2>
                        <h2>장롱카드 재활용 프로젝트</h2>
                    </div>
                    <div className="mt-8">
                        <Button className="btn-download lg" type="button">앱 다운로드</Button>
                    </div>
                </div>
            </div>
            <div>
                <div className="home-mid-text">
                    <h2>여러분의 소중한 머니</h2>
                    <h2>캔디페이가 아껴 드릴게요!</h2>
                </div>
                <div className="home-mid">
                    <Tabs defaultActiveKey="personal" className="mb-5">
                        <Tab eventKey="personal" title="개인 계정">
                            <div className="row row-cols-1">
                                <div className="col tab-card-col tab-card-col-11">
                                    내가 가진 카드 <br></br>손쉽게 활용 하기
                                </div>
                                <div className="col tab-card-col tab-card-col-12">
                                    신용카드로 간편하게<br></br>더치페이 하기
                                </div>
                                <div className="tab-card-col tab-card-col-2">
                                    아빠 카드로<br></br>가족끼리 결제공유
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="business" title="사업자 계정">
                            <div className="row row-cols-1">
                                <div className="col tab-card-col tab-card-col-11">
                                    결제 수수료 이외<br></br>핵심 서비스 수수료 무료
                                </div>
                                <div className="col tab-card-col tab-card-col-12">
                                    스마트폰 하나면 OK
                                </div>
                                <div className="tab-card-col tab-card-col-2">
                                    비대면 기반<br></br>다양한 마케팅
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Home;