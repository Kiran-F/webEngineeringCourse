import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditUser = ({ fetchUsers }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const fetchUser = async () => {
        try {
            const response = await axios.get(`/api/users/${id}`);
            setName(response.data.data[0].name);
            setEmail(response.data.data[0].email);
            setPassword(response.data.data[0].password);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email, password };
        if (id) {
            try {
                await axios.put(`/api/users/${id}`, newUser);
                navigate('/users');
            } catch (error) {
                console.error('Error updating user:', error);
            }
        } else {
            try {
                await axios.post('/api/users', newUser);
                fetchUsers();
                navigate('/users');
            } catch (error) {
                console.error('Error adding user:', error);
            }
        }
    };

    useEffect(() => {
        if (id) {
            console.log('here');
            fetchUser();
        }
    }, [id]);

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// const AddEditUser = ({ fetchUsers }) => {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     // Fetch user data when component mounts or id changes
//     useEffect(() => {
//         const fetchUserData = async () => {
//             if (id) {
//                 try {
//                     const response = await axios.get(`http://localhost:5000/api/users/${id}`);
//                     setName(response.data.data[0].name);
//                     setEmail(response.data.data[0].email);
//                     setPassword(response.data.data[0].password);
//                 } catch (error) {
//                     console.error('Error fetching user:', error);
//                 }
//             }
//         };
//         fetchUserData();
//     }, [id]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newUser = { name, email, password };
//         if (id) {
//             try {
//                 await axios.put(`http://localhost:5000/api/users/${id}`, newUser);
//                 navigate('/users');
//             } catch (error) {
//                 console.error('Error updating user:', error);
//             }
//         } else {
//             try {
//                 await axios.post('http://localhost:5000/api/users', newUser);
//                 fetchUsers();
//                 navigate('/users');
//             } catch (error) {
//                 console.error('Error adding user:', error);
//             }
//         }
//     };

    return (
        <div>
            <h2 className="text-xl font-bold mb-2"> {id ? 'Edit' : 'Add'} User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEditUser;