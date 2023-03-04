import storeItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"


export function Store() {
    return (
    <>
        <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col>{JSON.stringify(item)}</Col>
                ))}
            </Row>
    </>
    )
}