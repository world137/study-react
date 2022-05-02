const Print = () => {
    const data = [
        {title:"a",price:20},
        {title:"b",price:30},
        {title:"c",price:50}
    ]
	return(
		<div>
			<Hello title={data[0].title} price ={data[0].price}/>
            <Hello title={data[1].title} price ={data[1].price}/>
            <Hello title={data[2].title} price ={data[2].price}/>
		</div>
	);
}

const Hello = (props) => {
	return(
        <div>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default Print;