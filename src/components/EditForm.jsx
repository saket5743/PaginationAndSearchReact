import React, { useEffect, useState } from 'react'

const EditForm = () => {
  const [inputData, setInputData] = useState({firstName:"", lastName:"", email:"", phone:"", order:"", uploadf:""});
  const [isEditable, setIsEditable] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData, "inputData");
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    if (uploadedFile) {
      setPreview(URL.createObjectURL(uploadedFile));
      console.log("File selected:", uploadedFile.name);
    }
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleCancel = () => {
    setInputData({firstName:"", lastName:"", email:"", phone:"", order:"", uploadf:""});
    setIsEditable(false);
    setFile(null);
  }

  const isFormComplete =
  file && 
  inputData.firstName.trim() !== '' &&
  inputData.lastName.trim() !== '' &&
  inputData.email.trim() !== '' &&
  inputData.phone.trim() !== '' &&
  inputData.order.trim() !== ''

const handleSubmit = () => {
  const formData = new FormData();
  Object.entries(inputData).forEach(([key, value]) => formData.append(key, value));
  if (file) formData.append("file", file);
  for (let [key, value] of formData) {
    console.log(`${key}: ${value}`);
  }
  alert(`${inputData.firstName} ${inputData.lastName}, your form is submitted successfully.`);
  setInputData({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    order: "",
    uploadf: "",
  });
  setFile(null);
  setIsEditable(false);
};


  return (
    <div className='pt-[40px] pr-[31px] pb-[40px] pl-[31px] bg-[#FBC02D] h-[600px] w-[700px] maindiv'
    >
      <div>
        <p className='font-inter font-semibold text-[28px] leading-[1] tracking-normal text-center align-middle quotenow'
        >
          Give a Quote Now
        </p>
        <p
          className='font-inter font-normal text-[18px] leading-[1.26] tracking-normal text-center align-middle text-[#172640] mt-[5px] quoteimmediately'
        >
          Get a Quote Immeadiately Upon Form Submission
        </p>
      </div>

      <div className='flex gap-[16px] w-[616px] h-[52px] p-[20px] inputdivfirst'
      >
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleData}
          disabled={!isEditable}
          className='w-[300px] h-[46px] p-[10px] rounded-[6px] border bg-white border-gray-500 outline-none firstnamecss'
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleData}
          disabled={!isEditable}
          className='w-[300px] h-[46px] p-[10px] rounded-[6px] border bg-white border-gray-500 outline-none lastnamecss'
        />
      </div>

      <div className='flex gap-[16px] w-[616px] h-[52px] p-[20px] mt-[15px] inputdivsecond'
      >
        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={inputData.email}
          onChange={handleData}
          disabled={!isEditable}
          className='w-[300px] h-[46px] p-[10px] rounded-[6px] border bg-white border-gray-500 outline-none emailcss'
        />
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={inputData.phone}
          onChange={handleData}
          disabled={!isEditable}
          className='w-[300px] h-[46px] p-[10px] rounded-[6px] border bg-white border-gray-500 outline-none phonecss'
        />
      </div>

      <div className='gap-[16px] w-[576px] h-[132px] p-[20px] ml-[20px] mt-[35px] bg-white rounded-[6px] border border-gray-500 inputdivthird'
      >
        <label>Order Details</label> <br />
        <input
          type="text"
          name="order"
          value={inputData.order}
          onChange={handleData}
          disabled={!isEditable}
          placeholder="Submit Your Order Information - Item Name, Decoration Size, Quantity, Due Date and any other details"
          className='w-[540px] h-[46px] text-[12px] p-[10px] rounded-[6px] border-none -ml-[7px] outline-none inputordercss'
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
          width: "616px",
          height: "52px",
          padding: "20px",
          marginTop: "6px",
        }}
      >
        <label
          style={{
            display: "inline-block",
            width: "110px",
            height: "40px",
            borderRadius: "6px",
            backgroundColor: "#E8E9EA",
            border: "1px solid #ccc",
            textAlign: "center",
            lineHeight: "35px",
            fontSize: "16px",
            color: "#333",
            cursor: "pointer",
          }}
        >
          Upload file
          <input
            type="file"
            name="upload"
            value={inputData.uploadf}
            onChange={handleFileChange}
            disabled={!isEditable}
            style={{ display: "none" }}
          />
        </label>
        {file && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p style={{ fontSize: "14px", color: "#333" }}>
              <strong>{file.name}</strong>
            </p>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                style={{
                  width: "50px",
                  height: "20px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "none",
                }}
              />
            )}
          </div>
        )}
      </div>

      <div className='flex justify-end gap-[36px] w-[616px] h-[52px] p-[20px] mt-[15px] buttondiv'
      >
        <div>
          <button className='bg-red-500 px-[15px] py-[10px] w-[280px] h-[52px] rounded-[25px] text-white font-bold buttoncancel'
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
        <div>
          {isEditable && isFormComplete ? (
            <button className='bg-[#3578EA] px-[15px] py-[10px] w-[280px] h-[52px] rounded-[25px] text-white font-bold buttonsendrequest'
              onClick={handleSubmit}
            >
              Send Request
            </button>
          ) : (
            <button className='bg-[#3578EA] px-[15px] py-[10px] w-[280px] h-[52px] rounded-[25px] text-white font-bold buttonedit'
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditForm