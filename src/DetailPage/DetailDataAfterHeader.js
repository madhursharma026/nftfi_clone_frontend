import '../Header/Header.css'
import { Container } from 'react-bootstrap';
import './DetailDataAfterHeader.css'
import DetailPageTab from './DetailPageTab';

function DetailDataAfterHeader(props) {
    return (
        <>
            <div className='DetailDataAfterHeader pt-3' expand="xxl" style={{ background: "#16152D" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='main_container_detail_data_after_header'>
                    <h2 className='page_title pt-4' style={{ color: "#CF2E8C", textShadow: "4px 4px 0 rgb(207 46 140 / 25%)", fontSize: "65px" }}>#6939</h2>
                        <div class="sub-heading" style={{ fontWeight: "500", color: "white", fontSize: "25px" }}>BoredApeYachtClub</div>
                        <br /><br />
                        <br /><br />
                        <DetailPageTab page={props.page} />
                    </Container>
                </div>
            </div>
        </>
    );
}

export default DetailDataAfterHeader;
