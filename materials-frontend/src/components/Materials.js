import Material from "./Material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Materials() {
	const [amount, setAmount] = useState('1');
	const [materials, setMaterials] = useState(
		[
			{name: "Plank", amount: 10},
			{name: "Plank", amount: 15},
			{name: "Nail", amount: 10},
			{name: "Brick", amount: 10},
			{name: "Brick", amount: 10},
		]
	);

	useEffect(() => {
		fetch('url')
			.then((response) => response.json())
			.then((data) => {
				setMaterials(data[0]);
				console.log(data[0]);
			})
	}, []);

	return <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<input type="text" onChange={(e) => {
				setAmount(e.target.value)
		}}/>
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-6 py-3">Name</th>
					<th scope="col" class="px-6 py-3">Amount</th>
				</tr>
			</thead>
  		<tbody class="border-collapse border border-slate-400 border-spacing-3">
				{materials.map((material) => {
					return <Material key={uuidv4()} name={material.name} amount={material.amount}/>
				})}
			</tbody>
		</table>
	</div>
}

export default Materials;