const Print = () => {
	return(
		<div>
			<Hello title="ทดสอบ" number ="1"/>
            <Hello title="ทดสอบ" number ="2"/>
            <Hello title="ทดสอบ" number ="3"/>
            <Hello title="ทดสอบ" number ="4"/>
            <Hello title="ทดสอบ" number ="5"/>
		</div>
	);
}

const Hello = (props) => {
	return(
        <div>
            <p>{props.title}</p>
            <p>{props.number}</p>
        </div>
    );
}

export default Print;