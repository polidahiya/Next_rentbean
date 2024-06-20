"use client";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "@/app/Context/Index";
import { typeofprices } from "@/components/Commondata";

const catandsubcat = {
  "Fitness and Gym": [
    "Treadmill",
    "Cross Trainer",
    "Gym Bikes",
    "Bicycle",
    "Home gym",
  ],
  Electronics: [
    "Games",
    "Laptop",
    "TV",
    "AC",
    "Cooler",
    "Projector",
    "Vacuum Cleaner",
    "Air Fryer",
  ],
  Furniture: [
    "Bed",
    "Study Table",
    "Dining",
    "Bookshelf",
    "Sofa",
    "Centre Table",
  ],
  "Event and Parties": [
    "Hookah",
    "DJ Lights",
    "Barbeque",
    "Beer Tower",
    "Dispenser",
  ],
  Others: [
    "Tent",
    "Sleeping Bags",
    "Baby Car Seats",
    "Beer Tower",
    "Baby Carrier",
  ],
};

function Productupdater() {
  const { notifictionarr, setnotifictionarr } = AppContextfn();

  const [category, setCategory] = useState(Object.keys(catandsubcat)[0]);
  const [subcategory, setSubcategory] = useState(catandsubcat[category][0]);

  const initialState = {
    name: "",
    image: [],
    limit: 1,
    available: 1,
    pricetype: 1,
    prices: new Array(1).fill(0),
    pid: "",
    desc: [""],
    refundableprice: 1500,
    options: [{ name: "Quantity", defaultvalue: "1", options: ["1"] }],
    metadesc: "",
    keywords: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleArrayChange = (e, index, key) => {
    const newArray = [...formData[key]];
    newArray[index] = e.target.value;
    setFormData({
      ...formData,
      [key]: newArray,
    });
  };

  const [previews, setPreviews] = useState([]);
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const files = Array.from(selectedFiles);
    setFormData({
      ...formData,
      image: files,
    });

    // Generate image previews
    const previewUrls = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        previewUrls.push(reader.result);
        if (previewUrls.length === selectedFiles.length) {
          setPreviews(previewUrls);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      prices: new Array(typeofprices[formData.pricetype].time.length).fill(0),
    });
  }, [formData.pricetype]);

  return (
    <div>
      <div className="flex items-center justify-center gap-[10px] mt-[20px]">
        <div className="bg-slate-300 p-[5px]">
          Category:{" "}
          <select
            className="p-[10px]"
            value={category}
            onChange={(e) => {
              setSubcategory(catandsubcat[e.target.value][0]);
              setCategory(e.target.value);
            }}
          >
            {Object.keys(catandsubcat).map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-slate-300 p-[5px]">
          Subcategory:{" "}
          <select
            className="p-[10px]"
            value={subcategory}
            onChange={(e) => {
              setSubcategory(e.target.value);
            }}
          >
            {catandsubcat[category].map((subcat, i) => (
              <option key={i} value={subcat}>
                {subcat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="p-[10px] md:p-[40px] ">
        <div className="flex flex-col gap-[5px] bg-slate-100 mt-[20px] border border-slate-300 p-[20px]">
          {/* name */}
          <div>
            <center>
              {" "}
              <label>Product name</label>
            </center>
            <input
              className="w-full h-[30px] px-[20px]"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          {/* images */}
          <div className="flex flex-col items-center gap-[10px] mt-[30px]">
            <center>
              <label className="w-full">Images</label>
            </center>
            <div className="relative h-[100px] aspect-square border border-slate-300 overflow-hidden ">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="opacity-0 h-full w-full cursor-pointer"
              />
              <div className="absolute top-0 left-0 h-full w-full text-[50px] flex items-center justify-center pointer-events-none">
                +
              </div>
            </div>
            <div className="text-[10px]">
              Select multiple files at once &#40; max 5 &#41;
            </div>
            {previews.length > 0 && (
              <div className="flex flex-wrap gap-[10px] border border-slate-300 p-[10px]">
                {previews.map((src, index) => (
                  <img
                    className="w-[100px] aspect-square object-contain border border-slate-300"
                    key={index}
                    src={src}
                    alt={`Preview ${index}`}
                  />
                ))}
              </div>
            )}
          </div>
          {/* limit */}
          <div className="flex flex-col items-center gap-[10px] mt-[30px]">
            <label>Max product limit</label>

            <input
              className="text-center h-[30px]"
              type="number"
              name="limit"
              value={formData.limit}
              onChange={handleInputChange}
            />
          </div>
          {/* available */}
          <div className="flex flex-col items-center mt-[30px]">
            <label>Available:</label>
            <div className="">
              <button
                className={`border border-slate-300 ml-[10px] p-[3px] px-[50px]  ${
                  formData.available == 1
                    ? "bg-green-600 text-white"
                    : "bg-white"
                }`}
                onClick={() => {
                  setFormData({ ...formData, available: 1 });
                }}
              >
                Yes
              </button>
              <button
                className={`border border-slate-300 ml-[10px] p-[3px] px-[50px] ${
                  formData.available == 0 ? "bg-red-600 text-white" : "bg-white"
                }`}
                onClick={() => {
                  setFormData({ ...formData, available: 0 });
                }}
              >
                No
              </button>
            </div>
          </div>
          {/* price type */}
          <div className="flex flex-col items-center mt-[30px]">
            <label>Price Type:</label>
            <div className="flex items-center justify-center gap-[10px] flex-wrap">
              {Object.keys(typeofprices).map((item, i) => {
                return (
                  <button
                    key={i}
                    className={`border border-slate-300  p-[3px] px-[30px]  ${
                      formData.pricetype == i
                        ? "bg-green-600 text-white"
                        : "bg-white"
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, pricetype: i });
                    }}
                  >
                    {typeofprices[item].reactname}
                  </button>
                );
              })}
            </div>
          </div>
          {/* prices */}
          <div className="mt-[30px] ">
            <center>
              <label>Prices</label>
            </center>
            <div className="flex justify-center gap-[10px] flex-wrap">
              {formData.prices.map((price, index) => (
                <input
                  key={index}
                  className="max-w-[80px] text-center h-[30px]"
                  type="number"
                  value={price}
                  onChange={(e) => handleArrayChange(e, index, "prices")}
                />
              ))}
            </div>
          </div>
          {/* pid */}
          <div className="flex flex-col items-center mt-[30px]">
            <label>Product ID</label>
            <input
              className="h-[30px] px-[10px] text-center"
              type="text"
              name="pid"
              value={formData.pid}
              onChange={handleInputChange}
            />
          </div>
          {/* desc */}
          <div className="flex flex-col items-center gap-[10px] mt-[30px]">
            <label>Description</label>
            {formData.desc.map((descItem, index) => (
              <span key={index} className="w-full flex gap-[10px]">
                <input
                  type="text"
                  value={descItem}
                  className="h-[30px] w-full outline-none rounded-[10px] px-[20px]"
                  onChange={(e) => handleArrayChange(e, index, "desc")}
                />
                <button
                  className="h-[30px] aspect-square bg-red-600 text-white rounded-[10px] border border-slate-300"
                  onClick={() => {
                    const newdesc = [...formData.desc];
                    newdesc.splice(index, 1);

                    setFormData({
                      ...formData,
                      desc: newdesc,
                    });
                  }}
                >
                  X
                </button>
              </span>
            ))}
            <button
              className="h-[30px] w-[100px] bg-green-600 text-white rounded-[10px] "
              onClick={() => {
                setFormData({ ...formData, desc: [...formData.desc, ""] });
              }}
            >
              +
            </button>
          </div>
          {/* refundable */}
          <div className="flex flex-col items-center gap-[10px] mt-[30px]">
            <label>Refundable Price</label>
            <input
              className="text-center h-[30px]"
              type="number"
              name="refundableprice"
              value={formData.refundableprice}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Options:</label>
            {formData.options.map((option, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={option.name}
                  onChange={(e) =>
                    handleArrayChange(e, index, "options", "name")
                  }
                />
                <input
                  type="text"
                  value={option.defaultvalue}
                  onChange={(e) =>
                    handleArrayChange(e, index, "options", "defaultvalue")
                  }
                />
                {option.options.map((opt, i) => (
                  <input
                    key={i}
                    type="text"
                    value={opt}
                    onChange={(e) =>
                      handleArrayChange(e, i, "options", "options")
                    }
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-[10px] mt-[30px]">
            <label>Meta Description:</label>
            <textarea
              className="w-full p-[10px]"
              name="metadesc"
              value={formData.metadesc}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col items-center gap-[10px] mt-[30px]">
            <label>Keywords:</label>
            <textarea
              className="w-full p-[10px]"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
            />
          </div>

          <center className="mt-[30px]">
            <button
              className="p-[10px] bg-green-600 text-white px-[20px]"
              onClick={async () => {
                const formDataToSubmit = new FormData();
                formDataToSubmit.append("category", category);
                formDataToSubmit.append("subcategory", subcategory);

                formDataToSubmit.append(
                  "productdata",
                  JSON.stringify(formData)
                );

                formData.image.forEach((file, i) => {
                  formDataToSubmit.append(i, file);
                });
                formDataToSubmit.append(
                  "numberofimages",
                  formData.image.length
                );

                fetch("/api/addproducts", {
                  method: "post",
                  body: formDataToSubmit,
                })
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                    if (res?.message) {
                      setnotifictionarr([
                        ...notifictionarr,
                        {
                          id: new Date() + new Date().getMilliseconds(),
                          content: res?.message,
                        },
                      ]);
                    }
                  });
              }}
            >
              Add
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Productupdater;
