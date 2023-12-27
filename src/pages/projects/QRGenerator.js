// import { setUserProfile } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import "../../index.css";
const QRGenerator = () => {
  const [QrDetails, setQrDetails] = useState({
    qrBgColor: "#000000",
    qrColor: "#ffffff",
    qrdetailUrl: "test",
  });
  const updateQrDetails = (e) => {
    setQrDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div className="area">
      <div className="container ">
        <div style={{ position: "relative" }}>
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div
            className="row justify-content-center "
            style={{
              minHeight: "80vh",
            }}
          >
            <div className="col-md-6">
              <div className="card my-3 text-dark  mt-5">
                <div className="card-body p-5">
                  <h2 className="text-center mb-2">QR Generator</h2>
                  <div>
                    <div className="mb-3">
                      <label htmlFor="qrdetailUrl" className="form-label">
                        Url/Text
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="qrdetailUrl"
                        name="qrdetailUrl"
                        onChange={(e) => {
                          updateQrDetails(e);
                        }}
                        value={QrDetails?.qrdetailUrl}
                        placeholder="Enter URL or text"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="qrColor" className="form-label">
                        QR Color
                      </label>
                      <input
                        type="color"
                        className="d-block rounded"
                        id="qrColor"
                        name="qrColor"
                        onChange={(e) => {
                          updateQrDetails(e);
                        }}
                        value={QrDetails?.qrColor}
                      />
                    </div>

                    <div class="mb-3">
                      <label htmlFor="qrBgColor" class="form-label">
                        QR Background Color
                      </label>
                      <input
                        type="color"
                        className="d-block rounded"
                        id="qrBgColor"
                        name="qrBgColor"
                        onChange={(e) => {
                          updateQrDetails(e);
                        }}
                        value={QrDetails?.qrBgColor}
                      />
                    </div>
                    <div className="my-3 text-center">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?data=${
                          QrDetails?.qrdetailUrl
                        }&size=150x150&color=${QrDetails?.qrColor.replace(
                          "#",
                          ""
                        )}&bgcolor=${QrDetails?.qrBgColor.replace("#", "")}`}
                        alt=""
                      />
                    </div>
                    <div className="mb-3 text-center">
                      <button
                        onClick={() => {
                          let url = `https://api.qrserver.com/v1/create-qr-code/?data=${
                            QrDetails?.qrdetailUrl
                          }&size=150x150&color=${QrDetails?.qrColor.replace(
                            "#",
                            ""
                          )}&bgcolor=${QrDetails?.qrBgColor.replace("#", "")}`;
                          fetch(url)
                            .then((res) => res.blob())
                            .then((data) => {
                              var a = document.createElement("a");
                              a.href = window.URL.createObjectURL(data);
                              a.download = "QR";
                              a.click();
                              // a.remove();
                            });
                        }}
                        className="btn btn-success btn-sm"
                      >
                        Download QR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default QRGenerator;
