import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, ArrowLeft } from "lucide-react";

import adminService from "../../api/adminService";


function AddProduct() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    price: "",
    stock: "",
    description: "",
    image: null,
  });


  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {

    const { name, value } = e.target;


    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };



  const handleImage = (e) => {

    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);


      const data = new FormData();


      data.append(
        "name",
        formData.name
      );


      data.append(
        "category_id",
        formData.category_id
      );


      data.append(
        "price",
        formData.price
      );


      data.append(
        "stock",
        formData.stock
      );


      data.append(
        "description",
        formData.description
      );


      if (formData.image) {

        data.append(
          "image",
          formData.image
        );

      }



      await adminService.createProduct(data);



      navigate("/admin/products");



    } catch(error) {

      console.error(
        "Create Product Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">


      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            إضافة منتج
          </h1>

          <p className="mt-2 text-gray-500">
            إنشاء منتج جديد في المتجر
          </p>

        </div>


        <button

          onClick={() =>
            navigate("/admin/products")
          }

          className="flex items-center gap-2 rounded-xl border px-5 py-3"

        >

          <ArrowLeft size={20}/>

          رجوع

        </button>


      </div>



      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >


        <div className="grid gap-6 md:grid-cols-2">


          <input
            type="text"
            name="name"
            placeholder="اسم المنتج"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />



          <input
            type="number"
            name="category_id"
            placeholder="Category ID"
            value={formData.category_id}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />



          <input
            type="number"
            name="price"
            placeholder="السعر"
            value={formData.price}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />



          <input
            type="number"
            name="stock"
            placeholder="المخزون"
            value={formData.stock}
            onChange={handleChange}
            className="rounded-xl border p-3"
          />


        </div>



        <textarea

          name="description"

          rows="5"

          placeholder="الوصف"

          value={formData.description}

          onChange={handleChange}

          className="w-full rounded-xl border p-3"

        />




        <div>

          <label className="mb-2 block font-semibold">
            صورة المنتج
          </label>


          <input

            type="file"

            accept="image/*"

            onChange={handleImage}

          />

        </div>




        <button

          disabled={loading}

          className="flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 text-white hover:bg-violet-700"

        >

          <Save size={20}/>

          {loading
            ? "جاري الحفظ..."
            : "حفظ المنتج"}

        </button>


      </form>


    </div>

  );

}


export default AddProduct;