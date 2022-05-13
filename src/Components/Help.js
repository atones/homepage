
import { Accordion, FormControl, InputGroup, Tab, Tabs } from "react-bootstrap";

const Help = () => {
    return (
        <div>
            <div className="help-top">
                <div className="help-text">
                    <h2>무엇을 도와드릴까요?</h2>
                </div>
                <div className="help-search">
                    <InputGroup>
                        <InputGroup.Text>
                        <span className="help-search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M22.3 21.2l-5.7-5.7c1.2-1.5 2-3.4 2-5.5 0-4.7-3.8-8.5-8.5-8.5S1.5 5.3 1.5 10s3.8 8.5 8.5 8.5c2.1 0 4-.8 5.5-2l5.7 5.7c.1.1.3.2.5.2s.4-.1.5-.2c.4-.2.4-.7.1-1zM3 10c0-3.9 3.2-7 7-7s7 3.2 7 7-3.2 7-7 7-7-3.1-7-7z" fill="#333d4b"></path>
                            </svg>
                        </span>
                        </InputGroup.Text>
                        <FormControl
                            placeholder="질문을 검색해 보세요"
                            aria-label="Search"
                            autoComplete="off"
                        />
                    </InputGroup>
                </div>
            </div>
            <div className="help-mid">
                <Tabs defaultActiveKey="payment" className="mb-5">
                    <Tab eventKey="payment" title="결제">
                        <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Q. 분할 결제는 몇 장의 카드로 결제가 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Q. 분할 결제는 몇장의 카드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Q. 가족결제는 어떻게 설정하나요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Q. 결제시 포인트도 함께 사용이 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Q. 분할 결제는 몇장의 까드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Q. 분할 결제는 몇장의 까드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Q. 오프라인 메장에서도 결제가 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Q. 캔디페이 카드는 실물 카드가 있나요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="business" title="포인트">
                        <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Q. 분할 결제는 몇 장의 카드로 결제가 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Q. 분할 결제는 몇장의 카드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Q. 가족결제는 어떻게 설정하나요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Q. 결제시 포인트도 함께 사용이 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Q. 분할 결제는 몇장의 까드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Q. 분할 결제는 몇장의 까드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Q. 오프라인 메장에서도 결제가 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Q. 캔디페이 카드는 실물 카드가 있나요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="member-store" title="가맹점">
                        <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Q. 분할 결제는 몇 장의 카드로 결제가 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Q. 분할 결제는 몇장의 카드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Q. 가족결제는 어떻게 설정하나요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Q. 결제시 포인트도 함께 사용이 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Q. 분할 결제는 몇장의 까드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Q. 분할 결제는 몇장의 까드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Q. 오프라인 메장에서도 결제가 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Q. 캔디페이 카드는 실물 카드가 있나요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="etc" title="기타">
                        <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Q. 분할 결제는 몇 장의 카드로 결제가 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Q. 분할 결제는 몇장의 카드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Q. 가족결제는 어떻게 설정하나요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Q. 결제시 포인트도 함께 사용이 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span>
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Q. 분할 결제는 몇장의 까드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Q. 분할 결제는 몇장의 까드까지 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Q. 오프라인 메장에서도 결제가 가능한가요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Q. 캔디페이 카드는 실물 카드가 있나요?</Accordion.Header>
                            <Accordion.Body>
                            <span style={{fontSize: 18, color: 'blue'}}>A.</span> 
                            분할 결제 시 사용 가능한 카드 수량은 제한 없습니다.<br/>
                            카드별 포인트와 청구 할인 등 다양한 혜택을 모두 누리세요.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Help;