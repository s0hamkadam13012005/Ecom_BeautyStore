import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { userRequest } from "./requestMethods.js";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await userRequest.delete(`/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      alert("Failed to delete user. Please try again.");
      console.error(err);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "role", headerName: "Role", width: 130 },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <FaTrash
          className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(params.row._id);
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const res = await userRequest.get("/users");
        setUsers(res.data);
        setError(null);
      } catch (err) {
        setError("Failed to load users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (error) {
    return (
      <div className="w-[70vw] p-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[5px]">
        <h1 className="m-[20px] text-[20px]">All Users</h1>
      </div>

      <div className="m-[30px]">
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
          loading={loading}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Users;
