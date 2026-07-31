import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import adminService from "../../api/adminService";
import ProductsTable from "../../components/admin/ProductsTable";


function Products() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetchProducts();

  }, []);



  const fetchProducts = async () => {

    try {

      const response =
        await adminService.getProducts();


      setProducts(
        response.data.data || response.data
      );


    } catch (error) {

      console.error(
        "Products Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };



  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "هل تريد حذف المنتج؟"
      );


    if (!confirmDelete) return;


    try {

      await adminService.deleteProduct(id);


      setProducts((prev) =>
        prev.filter(
          (product) =>
            product.id !== id
        )
      );


    } catch(error){

      console.error(error);

    }

  };



  if (loading) {

    return (
      <div className="p-10 text-center">
        Loading Products...
      </div>
    );

  }



  return (

    <div className="space-y-8">


      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
            المنتجات
          </h1>

          <p className="mt-2 text-gray-500">
            إدارة منتجات المتجر
          </p>

        </div>



        <button

          onClick={() =>
            navigate("/admin/products/add")
          }

          className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-white hover:bg-violet-700"

        >

          <Plus size={20}/>

          إضافة منتج

        </button>


      </div>




      <ProductsTable

        products={products}

        onDelete={handleDelete}

      />


    </div>

  );

}


export default Products;