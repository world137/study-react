const Print = () => {
	const data = [
		{title:"a",price:20},
		{title:"b",price:30},
		{title:"c",price:50},
		{title:"d",price:30},
		{title:"e",price:10},
		{title:"f",price:60}
	]
	return(
		<div>
			{data.map((element) => {
				return <Hello title={element.title} price={element.price}/>
			})}
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