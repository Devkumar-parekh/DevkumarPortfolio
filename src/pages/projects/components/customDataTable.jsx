// import { setTablePDFPrintData } from "@/actions/common";
// import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export function CustomDataTable({
  Pagination = "false",
  TableBody = [],
  TableHead,
  SearchFilter = "false",
  total = "false",
  classes = "",
  recordPerPageProp = 50,
  id = "1",
  // id = new Date().getTime().toString().substr(-3, 3),
  useref,
  printOption = true,
  pdfOption = false,
}) {
  id = new Date().getTime().toString();
  const [RecordPerPage, setRecordPerPage] = useState(recordPerPageProp);
  const [pageNumber, setpageNumber] = useState(1);
  const [BodyState, setBodyState] = useState(TableBody);
  // let BodyState = TableBody;
  const dispatch = useDispatch();
  // const router = useRouter();
  useEffect(() => {
    setBodyState(TableBody);
  }, [TableBody]);

  // useEffect(() => {
  //   setBodyState(TableBody);
  // }, []);
  const getColTotal = (prop) => {
    //pagewise total
    // BodyState;
    // var result = BodyState?.reduce(function (acc, obj) {
    var result =
      Pagination === "false" || RecordPerPage === "all"
        ? BodyState.reduce(function (acc, obj) {
            return acc + obj[[prop]];
          }, 0)
        : BodyState?.slice(
            (pageNumber - 1) * RecordPerPage,
            pageNumber * RecordPerPage
          ).reduce(function (acc, obj) {
            return acc + obj[[prop]];
          }, 0);

    return result;
  };
  const getFullColTotal = (prop) => {
    // all data total
    // BodyState;
    // var result = BodyState?.reduce(function (acc, obj) {
    var result = TableBody.reduce(function (acc, obj) {
      if (typeof obj[[prop]] !== "number") {
        return acc + Number(obj[[prop]]);
      } else {
        return acc + obj[[prop]];
      }
    }, 0);

    return result;
  };
  // TableBody
  const [sortedby, setSortedby] = useState(true);
  const Sorter = ({ rel }) => {
    return (
      <>
        <div className="d-flex ">
          <span
            className="align-self-center "
            onClick={() => {
              if (sortedby) {
                if (rel.isDate) {
                  updateSortBy(rel.prop, true);
                } else {
                  updateSortBy(rel.prop);
                }
                setSortedby(false);
              } else {
                if (rel.isDate) {
                  updateUnSortBy(rel.prop, true);
                } else {
                  updateUnSortBy(rel.prop);
                }
                setSortedby(true);
              }
            }}
          >
            {rel.title}
          </span>
          <div className="d-flex flex-column sort-btn">
            <i
              className="bi bi-caret-up-fill"
              onClick={(e) => {
                if (rel.isDate) {
                  updateSortBy(rel.prop, true);
                } else {
                  updateSortBy(rel.prop);
                }
                setSortedby(false);
              }}
            ></i>
            <i
              className="bi bi-caret-down-fill"
              onClick={(e) => {
                if (rel.isDate) {
                  updateUnSortBy(rel.prop, true);
                } else {
                  updateUnSortBy(rel.prop);
                }
                setSortedby(true);
              }}
            ></i>
          </div>
        </div>
      </>
    );
  };
  const updateSearch = (e) => {
    // const filters = TableHead.filter((val) => {
    //   if (val?.isFilterable) {
    //     return val.prop;
    //   }
    // });
    const filters = TableHead;
    const temp = TableBody?.filter((val) => {
      if (
        Object.values(val).some((cell) => {
          if (typeof cell === "string") {
            if (cell.toLowerCase().includes(e.target.value.toLowerCase())) {
              return true;
            }
          }
          if (typeof cell === "number") {
            if (
              cell
                .toString()
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            ) {
              return true;
            }
          }
        })
      ) {
        return true;
      }
    });
    //=============================Don't remove this code (It is alter.)===================================
    //     if (
    //       filters.some((item) => {
    //         if (typeof val[[item.prop]] === "string") {
    //           if (
    //             val[[item.prop]]
    //               .toLowerCase()
    //               .includes(e.target.value.toLowerCase())
    //           ) {
    //             return true;
    //           }
    //         } else {
    //           if (typeof val[[item.prop]] === "number") {
    //             if (
    //               val[[item.prop]]
    //                 .toString()
    //                 .toLowerCase()
    //                 .includes(e.target.value.toLowerCase())
    //             ) {
    //               return true;
    //             }
    //           }
    //         }
    //       })
    //     ) {
    //       return val;
    //     }
    // });
    //================================================================

    setBodyState(temp);
    setpageNumber(1);
  };
  const updateSortBy = (sortby, isDate = false) => {
    // let tempBottomPoolList = BottomPoolList;

    setBodyState((prev) => {
      return [
        ...prev.sort(function (a, b) {
          if (isDate) {
            if (new Date(a[[sortby]]) < new Date(b[[sortby]])) {
              return -1;
            }
          } else {
            if (a[[sortby]] < b[[sortby]]) {
              return -1;
            }
          }
        }),
      ];
    });
  };
  const updateUnSortBy = (sortby, isDate = false) => {
    setBodyState((prev) => {
      return [
        ...prev.sort(function (a, b) {
          if (isDate) {
            if (new Date(a[[sortby]]) > new Date(b[[sortby]])) {
              return -1;
            }
          } else {
            if (a[[sortby]] > b[[sortby]]) {
              return -1;
            }
          }
        }),
      ];
    });
  };
  function tableToExcel(table, name, filename) {
    let uri = "data:application/vnd.ms-excel;base64,",
      template =
        '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><title></title><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
      base64 = function (s) {
        // return window.btoa(decodeURIComponent(encodeURIComponent(s)));
        return window.btoa(s);
      },
      format = function (s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) {
          return c[p];
        });
      };

    if (!table.nodeType) table = document.getElementById(table);
    var ctx = { worksheet: name || "Worksheet", table: table.innerHTML };

    var link = document.createElement("a");
    link.download = filename;
    link.href = uri + base64(format(template, ctx));
    link.click();
  }

  // function exportWS() {
  //   var myFile = "myFile.xlsx";
  //   var myWorkSheet = XLSX.utils.json_to_sheet(TableBody);
  //   var myWorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(myWorkBook, myWorkSheet, "myWorkSheet");
  //   XLSX.writeFile(myWorkBook, myFile);
  // }
  return (
    <div className="">
      <div className="row my-2">
        <>
          {Pagination === "true" && (
            <div className="col">
              {Pagination === "true" && (
                <div className="  " style={{ width: "max-content" }}>
                  Post Per Page:
                  <span>
                    <select
                      className="form-select"
                      style={{ width: "max-content" }}
                      onChange={(e) => {
                        setRecordPerPage(e.target.value);
                        setpageNumber(1);
                      }}
                      defaultValue={
                        recordPerPageProp === "all" ? "all" : recordPerPageProp
                      }
                    >
                      {/* {recordPerPageProp === "all" && (
                      <option value="all">All</option>
                    )} */}
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="all">All</option>
                      {/* {!recordPerPageProp === "all" && (
                      <option value="all">All</option>
                    )} */}
                    </select>
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="col "></div>
          <div className="col">
            <div className="ms-auto d-flex" style={{ width: "max-content" }}>
              {SearchFilter === "true" && SearchFilter === "true" && (
                <>
                  {/* <span>Search by </span>
                {TableHead.map((val, index) => {
                  if (val?.isFilterable)
                    return <span key={index}>{val.title} </span>;
                })} */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    style={{ width: "max-content" }}
                    onChange={(e) => {
                      updateSearch(e);
                    }}
                  />
                </>
              )}
              {printOption && (
                <>
                  {/* <button
                    className="btn btn-sm "
                    onClick={() => {
                      // tableToExcel(`${id}_table`, "name", "myfile.xls");
                      exportWS();
                    }}
                  >
                    <i className="bi bi-download"></i>
                  </button> */}
                  {/* <Link href={`/printTheTable`} className="btn">
                <i className="bi bi-filetype-pdf"></i>
              </Link> */}
                  {pdfOption && (
                    <>
                      {/* <button
                        className="btn btn-sm "
                        onClick={() => {
                          dispatch(
                            setTablePDFPrintData({
                              TableBody,
                              TableHead,
                              recordPerPageProp: "all",
                            })
                          );
                          router.push("/printTheTable");
                          // window.print();
                        }}
                      >
                        <i className="bi bi-filetype-pdf"></i>
                      </button> */}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      </div>
      <div
        className="table-responsive"
        style={{ maxHeight: printOption ? "90vh" : "", overflow: "scroll" }}
      >
        <table
          // className={`table ${classes}`}
          className={`table table-bordered tableToPrint`}
          id={`${id}_table`}
          ref={useref}
        >
          <thead
            className="bg-primary text-light"
            style={{ position: "sticky", top: 0, zIndex: 1 }}
          >
            <tr>
              <th>#</th>
              {TableHead?.map((val, index) => {
                if (val.prop !== "")
                  return (
                    <th key={index}>
                      <div className="d-flex ">
                        {/* {!val?.hasOwnProperty("cell") ? (
                          <Sorter rel={val} />
                        ) : (
                          <div className="align-self-center">{val?.title}</div>
                        )} */}
                        {val?.isSortable ? (
                          <Sorter rel={val} />
                        ) : (
                          <div className="align-self-center">{val?.title}</div>
                        )}
                      </div>
                    </th>
                  );
              })}
            </tr>
          </thead>
          <tbody>
            {(Pagination === "false" || RecordPerPage === "all"
              ? BodyState
              : BodyState?.slice(
                  (pageNumber - 1) * RecordPerPage,
                  pageNumber * RecordPerPage
                )
            )?.map((row, index) => {
              const tempId = index;
              return (
                <tr key={index}>
                  <td>
                    {(pageNumber - 1) *
                      (RecordPerPage === "all" ? 1 : RecordPerPage) +
                      index +
                      1}
                  </td>
                  {TableHead?.map((col, index) => {
                    if (col?.prop !== "")
                      return (
                        <td key={index}>
                          {col?.prop !== "customCell"
                            ? typeof row[[col?.prop]] !== "object"
                              ? row[[col?.prop]]
                              : ""
                            : col?.cell({ ...row, customDataId: tempId })}
                        </td>
                      );
                  })}
                </tr>
              );
            })}
            {total === "true" && (
              <tr>
                <td></td>
                {TableHead?.map((col, index) => {
                  return (
                    col.prop !== "" && (
                      <td key={index}>
                        {col.total && (
                          <span>
                            <b>
                              Total:{" "}
                              {col?.prop === "customCell"
                                ? parseFloat(getColTotal(col?.totalOf)).toFixed(
                                    2
                                  )
                                : parseFloat(getColTotal(col?.prop)).toFixed(2)}
                              <br />
                              <span>
                                (
                                {col?.prop === "customCell"
                                  ? parseFloat(
                                      getFullColTotal(col?.totalOf)
                                    ).toFixed(2)
                                  : parseFloat(
                                      getFullColTotal(col?.prop)
                                    ).toFixed(2)}
                                )
                              </span>
                            </b>
                          </span>
                        )}
                      </td>
                    )
                  );
                })}
              </tr>
            )}
          </tbody>
        </table>
        {/* {BodyState.length === 0 && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )} */}
      </div>
      {/* setpageNumber */}
      {Pagination === "true" && RecordPerPage !== "all" && (
        <div
          className="btn-group btn-group-sm my-2"
          role="group"
          aria-label="..."
          style={{ width: "max-content" }}
        >
          <button
            className="btn btn-secondary"
            onClick={() => {
              setpageNumber((prev) => (prev - 1 !== 0 ? prev - 1 : prev));
            }}
          >
            Prev
          </button>
          <button className="btn btn-outline-secondary">
            Page {pageNumber} of {Math.ceil(BodyState?.length / RecordPerPage)}
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setpageNumber((prev) =>
                prev <= BodyState?.length / RecordPerPage ? prev + 1 : prev
              );
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
