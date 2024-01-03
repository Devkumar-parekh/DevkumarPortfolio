import { useDispatch, useSelector } from "react-redux";
// import { setUserProfile } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { setProductList } from "../../redux/actions/actions";
import { CustomDataTable } from "./components/customDataTable";
import { setMeta } from "../../01utils/functions";

const CrudOps = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const ProductList = authState?.ProductList;
  // const updateUserProfile = (e) => {
  //   let temp = UserProfile;
  //   temp = { ...temp, [e.target.name]: e.target.value };
  //   dispatch(setUserProfile(temp));
  // };
  const defaultProductDet = {
    id: "",
    name: "",
    price: "",
    varient: "",
    qty: 0,
  };
  const [productDet, setProductDet] = useState(defaultProductDet);
  const productFormHandle = (e) => {
    setProductDet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const ProductListHead = [
    { prop: "name", title: "Name" },
    { prop: "varient", title: "Varient" },
    { prop: "qty", title: "Qty" },
    { prop: "price", title: "Price" },
    {
      prop: "customCell",
      title: "Delete",
      cell: (row) => {
        return (
          <>
            <button
              className="btn btn-danger"
              onClick={() => {
                let confirmation = window.confirm(
                  "Are you sure you want to delete"
                );
                if (confirmation) {
                  let temp = ProductList;
                  temp = temp.filter((item) => {
                    return item.id !== row.id;
                  });
                  dispatch(setProductList([...temp]));
                }
              }}
            >
              Delete
            </button>
          </>
        );
      },
    },

    {
      prop: "customCell",
      title: "Update",
      cell: (row) => {
        return (
          <>
            <button
              className="btn btn-info"
              onClick={() => {
                console.log(row.id);
              }}
            >
              Update
            </button>
          </>
        );
      },
    },
  ];
  useEffect(() => {
    setMeta("https://devkumar-parekh.vercel.app/images/projects/crud.gif");
  });
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card my-3 text-warning bg-dark ">
            <div className="card-body p-5 bg-yellow-pink">
              <h1 className="text-center mb-2 text-light">Add Product</h1>
              <div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    name="name"
                    value={productDet?.name}
                    onChange={(e) => {
                      productFormHandle(e);
                    }}
                  />
                  <label>Product Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    name="price"
                    value={productDet?.price}
                    onChange={(e) => {
                      productFormHandle(e);
                    }}
                  />
                  <label>Price</label>
                </div>
                <div className=" mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="varient"
                    value={productDet?.varient}
                    onChange={(e) => {
                      productFormHandle(e);
                    }}
                  >
                    <option value={0}>Select Varient</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    name="qty"
                    value={productDet?.qty}
                    onChange={(e) => {
                      productFormHandle(e);
                    }}
                  />
                  <label>Qty</label>
                </div>
                <div className="mb-3 row p-2">
                  <button
                    className="btn btn-success btn-yellow-pink"
                    onClick={() => {
                      const d = new Date();
                      const temp = { ...productDet, id: d.getTime() };
                      console.log(temp, "temp ");
                      if (
                        Object.values(temp).some((i) => {
                          console.log(i === "" || i === 0);
                          return i === "" || i === 0;
                        })
                      ) {
                        alert("Something is wrong, try again");
                      } else {
                        dispatch(setProductList([...ProductList, { ...temp }]));
                        setProductDet(defaultProductDet);
                        alert("Product added successfully");
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary btn-pink-blue"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal"
                  >
                    View List
                  </button>

                  <div
                    className="modal fade"
                    id="productModal"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="productModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            Product List
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {ProductList?.length > 0 ? (
                            <>
                              <CustomDataTable
                                Pagination="true"
                                TableBody={ProductList}
                                TableHead={ProductListHead}
                                SearchFilter="false"
                              />
                            </>
                          ) : (
                            <>No data found</>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* id: "",
    name: "",
    price: "",
    varient: "",
    qty: 0, */}
                {/* <div className="my-3">
                  <button className="btn btn-outline-warning w-100">
                    Save
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CrudOps;
