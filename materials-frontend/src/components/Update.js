import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const { id } = useParams();
    const [material, setMaterial] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
		try {
		  const response = await fetch(`http://localhost:5096/api/Materials/${id}`, {
	        method: 'GET', // or 'POST', 'PUT', etc.
		  });
	  
		  if (!response.ok) {
			throw new Error('Network response was not ok');
		  }
	  
		  const data = await response.json(); // assuming the response is JSON
		  setMaterial(data);
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
	  }, [id]); // Call fetchData when the component mounts


      const handleUpdate = async (event) => {
        event.preventDefault();
        material.updatedAt = new Date().toISOString();  // Ensure date is in correct format
      
        try {
          const response = await fetch(`http://localhost:5096/api/Materials/${id}`, {
            method: 'PUT',  // PUT method to update the material
            headers: {
              'Content-Type': 'application/json',  // Tell the server you're sending JSON
            },
            body: JSON.stringify(material),  // Convert the material object to JSON
          });
      
          if (!response.ok) {
            throw new Error('Failed to update the material');  // Handle any errors from the API
          }
      
          navigate('/');  // Redirect back to the item list after a successful update
        } catch (error) {
          setError('Failed to update item');  // Handle any errors caught in the try/catch
        }
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Changing ${name} to ${value}`); // Debugging: Log the input changes
        setMaterial((prevMaterial) => ({
          ...prevMaterial, // Keep previous material properties
          [name]: value,  // Update only the changed field
        }));
      };


     if (loading) return <p>Loading...</p>;
     if (error) return <p>{error}</p>;
     if (!material) return <p>Material not found</p>;


     return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <form onSubmit={handleUpdate}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Type</th>
                  <th scope="col" className="px-6 py-3">Tags</th>
                  <th scope="col" className="px-6 py-3">Amount</th>
                  <th scope="col" className="px-6 py-3">Created At</th>
                  <th scope="col" className="px-6 py-3">Updated At</th>
                </tr>
              </thead>
              <tbody className="border-collapse border border-slate-400 border-spacing-3">
                <tr>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      name="name"
                      value={material.name || ''}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      name="type"
                      value={material.type || ''}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      name="tags"
                      value={material.tags || ''}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      name="amount"
                      value={material.amount || ''}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-4">
                    {new Date(material.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(material.updatedAt).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    };
    

    export default Update;