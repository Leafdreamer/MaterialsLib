import Material from "./Material";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
// import { v4 as uuidv4 } from "uuid";

function Materials() {
	const [materials, setMaterials] = useState([]);
	const [amount, setAmount] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	//const [materials, setMaterials] = useState(
	//	[
	//		{name: "Plank", amount: 10},
	//		{name: "Plank", amount: 15},
	//		{name: "Nail", amount: 10},
	//		{name: "Brick", amount: 10},
	//		{name: "Brick", amount: 10},
	//	]
	//);

	const fetchData = async () => {
		try {
		  const response = await fetch('http://localhost:5096/api/Materials', {
			method: 'GET', // or 'POST', 'PUT', etc.
			headers: {
			  'Content-Type': 'application/json',
			  // Add other headers if needed (like authorization tokens)
			},
		  });
	  
		  if (!response.ok) {
			throw new Error('Network response was not ok');
		  }
	  
		  const data = await response.json(); // assuming the response is JSON
		  setMaterials(data);
		  console.log(data);
		  setLoading(false);


		} catch (error) {
		  setError(error.message);		
		  console.error('There has been a problem with your fetch operation:', error);
		  setLoading(false)
		}
	  };
	  
	  useEffect(() => {
		fetchData();
	  }, []); // Call fetchData when the component mounts

	  if (loading) return <p>Loading...</p>;
	  if (error) return <p>An error has occurred: {error}</p>;

	
	//useEffect(() => {
	//	fetch('url')
	//		.then((response) => response.json())
	//		.then((data) => {
	//			setMaterials(data[0]);
	//			console.log(data[0]);
	//		})
	//}, []);

	return <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<input type="text" onChange={(e) => {
				setAmount(e.target.value)
		}}/>
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3">Name</th>
					<th scope="col" class="px-6 py-3">Type</th>
					<th scope="col" class="px-6 py-3">Tags</th>
					<th scope="col" class="px-6 py-3">Amount</th>
					<th scope="col" class="px-6 py-3">Created At</th>
					<th scope="col" class="px-6 py-3">Updated At</th>
				</tr>
			</thead>
  		<tbody class="border-collapse border border-slate-400 border-spacing-3">
				{materials.map((material) => {
					let Cat = format(material.createdAt, "MMMM do yyyy, h:mm:ss a")
					let Uat = format(material.updatedAt, "MMMM do yyyy, h:mm:ss a")
					return <Material key={material.id} name={material.name} type={material.type} tags={material.tags} amount={material.amount} createdAt={Cat} updatedAt={Uat}/>
				})}
			</tbody>
		</table>
	</div>
}

export default Materials;