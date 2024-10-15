// import Material from "./Material";
import { useEffect, useState } from "react";
// import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from "uuid";

function Materials() {
	const [materials, setMaterials] = useState([]);
	const [filter, setFilter] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	//const handleEdit = (id) => {
	//	navigate(`/Materials/${id}`); // Navigate to edit page
	//};

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

	  // Filtered materials based on the filter input
	  const filteredMaterials = materials.filter(material =>
		material.name.toLowerCase().includes(filter.toLowerCase())
	  );

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
		  <div className="flex justify-between items-center mb-4">
			<input
			  type="text"
			  placeholder="Filter materials..."
			  value={filter}
			  onChange={(e) => setFilter(e.target.value)}
			  className="border rounded px-4 py-2 text-gray-700 w-1/3"/>
			<button
			  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
			  onClick={() => navigate('/create')}>
			  Create New Material
			</button>
		  </div>
	
		  {error && <p className="text-red-500">{error}</p>}
	
		  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			  <tr>
				<th scope="col" className="px-6 py-3">Name</th>
				<th scope="col" className="px-6 py-3">Type</th>
				<th scope="col" className="px-6 py-3">Tags</th>
				<th scope="col" className="px-6 py-3">Amount</th>
				<th scope="col" className="px-6 py-3">Created On</th>
				<th scope="col" className="px-6 py-3">Updated On</th>
				<th scope="col" className="px-6 py-3">Actions</th>
			  </tr>
			</thead>
			<tbody className="border-collapse border border-slate-400 border-spacing-3">
			  {filteredMaterials.length > 0 ? (
				filteredMaterials.map((material) => {
				  const formattedCreatedAt = new Date(material.createdAt).toLocaleString();
				  const formattedUpdatedAt = new Date(material.updatedAt).toLocaleString();
	
				  return (
					<tr key={material.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					  <td className="px-6 py-4">{material.name}</td>
					  <td className="px-6 py-4">{material.type}</td>
					  <td className="px-6 py-4">{material.tags}</td>
					  <td className="px-6 py-4">{material.amount}</td>
					  <td className="px-6 py-4">{formattedCreatedAt}</td>
					  <td className="px-6 py-4">{formattedUpdatedAt}</td>
					  <td className="px-6 py-4">
						<button
						  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
						  onClick={() => navigate(`/update/${material.id}`)}>
						  Edit
						</button>
					  </td>
					</tr>
				  );
				})
			  ) : (
				<tr>
				  <td colSpan="7" className="px-6 py-4 text-center">No materials found</td>
				</tr>
			  )}
			</tbody>
		  </table>
		</div>
	  );
	};

export default Materials;