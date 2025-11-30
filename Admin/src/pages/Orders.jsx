import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { FaCheckCircle, FaCheckDouble, FaClock } from "react-icons/fa";


const Orders = () => {
  const orders = [
    {
      _id: "0101",
      name: "Alice Johnson",
      email: "alice@example.com",
      status: 1,
    },
    { _id: "0102", name: "Bob Smith", email: "bob@example.com", status: 0 },
    {
      _id: "0103",
      name: "Charlie Brown",
      email: "charlie@example.com",
      status: 2,
    },
    { _id: "0104", name: "David Clark", email: "david@example.com", status: 1 },
    { _id: "0105", name: "Eve Stone", email: "eve@example.com", status: 0 },
    {
      _id: "0106",
      name: "Frank Wilson",
      email: "frank@example.com",
      status: 1,
    },
    { _id: "0107", name: "Grace Lee", email: "grace@example.com", status: 2 },
    { _id: "0108", name: "Henry Kim", email: "henry@example.com", status: 0 },
  ];

  const columns = [
    { field: "_id", headerName: "Order ID", width: 100 },
    { field: "name", headerName: "Customer Name", width: 200 },
    { field: "email", headerName: "Customer Email", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === 0 || params.row.status === 1 ? (
              <FaClock className="text-yellow-500 text-[25px] cursor-pointer mt-2" />
            ) : (
              <FaCheckDouble className="text-green-500 text-[25px]" />
            )}
          </>
        );
      },
    },
    {
      field: "Deliver",
      headerName: "Mark as Delivered",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === 1 || params.row.status === 0 ? (
              <FaCheckCircle className=" text-[25px] cursor-pointer mt-2"
              onClick={() => {
               // handleUpdateOrder(params.row._id);
              }}
              />
            ) : null}
          </>
        );
      },
    },
  ];
  return (
     <div className="p-5 w-[70vw]">
       <div className="flex justify-between items-center m-[30px]">
         <h2 className="m-[20px] text-[20px] ">All Products</h2>
 
         <button className="bg-[#1e1e1e] p-[10px] font-semibold text-white cursor-pointer">
           Create
         </button>
       </div>
       <div className="">
         <DataGrid
           getRowId={(row) => row._id}
           rows={orders}
           columns={columns}
           checkboxSelection
           autoHeight
         />
       </div>
     </div>
   );
 };
export default Orders