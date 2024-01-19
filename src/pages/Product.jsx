import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleCurrentPrice = (e) => {
    setCurrentPrice(e.target.value);
  };
  const handleOldPrice = (e) => {
    setOldPrice(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const showToastAlert = (err) => {
    toast.error(`Error: ${err}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/products", {
        name: name,
        image: image,
        description: description,
        currentPrice: currentPrice,
        oldPrice: oldPrice,
        category: category,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Product Added Successfully");

        // Clear input fields after successful submission
        setName("");
        setImage("");
        setDescription("");
        setCurrentPrice("");
        setOldPrice("");
        setCategory("");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        // alert(err.response.data.error)
        showToastAlert(err.response.data.error);
      });
  };

  return (
    <>
      <h1 className=" block text-lg font-semibold p-4 w-full bg-white">
        Products
      </h1>
      <div className="flex gap-10 text-sm font-semibold text-slate-400 bg-white p-4 pb-0  border-b-[1px] border-slate-200 ">
        <p className="active:text-black cursor-pointer border-blue-700 border-b-2 text-black active:border-blue-700 active:border-b-2 pb-2">
          Add Product
        </p>
        <p className="active:text-black cursor-pointer active:border-blue-700 active:border-b-2 pb-2">
          Update Product
        </p>
        <p className="active:text-black cursor-pointer active:border-blue-700 active:border-b-2 pb-2">
          Delete Product
        </p>
      </div>
      <BoxWrapper>
        <div className="flex flex-col h-full md:flex-row justify-between gap-14 mx-4 items-start">
          <div>
            <h1 className="text-xl font-semibold pb-3 font-sans tracking-tighter">
              Add New Product
            </h1>
            <div>
              <form action="" method="Post" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    onChange={handleName}
                    value={name}
                    className="w-full bg-slate-50 py-2 px-3 text-sm"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="description"
                    className="text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter"
                  >
                    Description (optional)
                  </label>
                  <input
                    type="text"
                    onChange={handleDescription}
                    value={description}
                    className="w-full bg-slate-50 py-2 px-3 text-sm"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="category"
                    className="text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter"
                  >
                    Category
                  </label>
                  <p className="text-xs pb-1">
                    Include a category to assist in quick product identification
                  </p>
                  <input
                    type="text"
                    onChange={handleCategory}
                    value={category}
                    className="w-full bg-slate-50 py-2 px-3 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="Pricing"
                    className="text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter"
                  >
                    Pricing
                  </label>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-xs pb-1">selling Price</p>
                      <input
                        type="text"
                        onChange={handleCurrentPrice}
                        value={currentPrice}
                        className="w-full bg-slate-50 py-2 px-3 text-sm"
                      />
                    </div>
                    <div>
                      <p className="text-xs pb-1">Discount Price</p>
                      <input
                        type="text"
                        onChange={handleOldPrice}
                        value={oldPrice}
                        className="w-full bg-slate-50 py-2 px-3 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="stock"
                    className="text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter"
                  >
                    Stock
                  </label>
                  <p className="text-xs pb-1">Stock Availability</p>
                  <input
                    type="text"
                    className="w-full bg-slate-50 py-2 px-3 text-sm"
                  />
                </div>

                <button className="text-base my-10  bg-blue-400 hover:bg-blue-500 cursor-pointer text-slate-100 py-2 px-10 rounded-full ">
                  Add Product
                </button>
              </form>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className=" bg-slate-50 w-[600px] h-[400px]  flex justify-center items-center rounded-xl text-sm font-medium">
              <div className="flex flex-col justify-center items-center w-[550px] h-[350px] bg-white rounded-xl p-6 text-center">
                <form action="" method="post" enctype="multipart/form-data">
                  <input
                    type="file"
                    name="image"
                    onChange={handleImage}
                    value={image}
                    id="fileToUpload"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </BoxWrapper>
    </>
  );
}
function BoxWrapper({ children }) {
  return (
    <div className="bg-white hover:bg-gray-100 rounded-sm p-4 flex items-center">
      {children}
    </div>
  );
}

export default Product;
