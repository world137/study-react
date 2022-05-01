const Title = () => {
    return(
        <h1>ทดสอบระบบ component</h1>
    );
}

const Description = () =>{
    return(
        <p>ส่วนทดสอบที่ 1</p>
    );
}

const Text = () => <h1>ส่วนทดสอบที่ 2</h1>
const Content = () => {
    return(
        <div>
            <ul>
                <li>1.&nbsp;<span>1200</span></li>
                <li>2.&nbsp;<span>1500</span></li>
                <li>3.&nbsp;<span>200</span></li>
            </ul>
            <Text/>
        </div>
    );
}

function Nested(){
    return(
        <div>
            <Title/>
            <Description/>
            <Content/>
        </div>
    );
}

export default Nested;