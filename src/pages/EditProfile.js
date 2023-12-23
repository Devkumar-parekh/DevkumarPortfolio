import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../redux/actions/actions";
import { useState } from "react";

const EditProfile = () => {
  // UserProfile: {
  //   FName: "",
  //   LName: "",
  //   Mobile: "",
  //   LinkedIn: "",
  //   Email: "",
  //   ProfileImg: "",
  // }
  // setUserProfile
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);
  const authState = useSelector((state) => state.auth);
  const UserProfile = authState?.UserProfile;
  const updateUserProfile = (e) => {
    let temp = UserProfile;
    temp = { ...temp, [e.target.name]: e.target.value };
    dispatch(setUserProfile(temp));
  };
  const updateProfileImg = (e) => {
    console.log("e", e);
    let temp = UserProfile;
    temp = { ...temp, ProfileImg: URL.createObjectURL(e) };
    dispatch(setUserProfile(temp));
  };
  return (
    // <div className="d-flex align-items-center justify-content-center vh-100 ">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card my-3 text-warning bg-dark ">
            <div className="card-body p-5">
              <h2 className="text-center mb-2">Edit Profile</h2>
              <div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    name="FName"
                    value={UserProfile?.FName}
                    onChange={(e) => {
                      updateUserProfile(e);
                    }}
                  />
                  <label>First Name</label>
                </div>
                <div className="form-floating  mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder=""
                    name="LName"
                    value={UserProfile?.LName}
                    onChange={(e) => {
                      updateUserProfile(e);
                    }}
                  />
                  <label>Last Name</label>
                </div>
                <div className="form-floating  mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder=""
                    name="Designation"
                    value={UserProfile?.Designation}
                    onChange={(e) => {
                      updateUserProfile(e);
                    }}
                  />
                  <label>Designation</label>
                </div>

                <div className="form-floating  mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder=""
                    name="SkillDomain"
                    value={UserProfile?.SkillDomain}
                    onChange={(e) => {
                      updateUserProfile(e);
                    }}
                  />
                  <label>Skill Domain</label>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        Select Image:
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => {
                          setSelectedImage(e.target.files[0]);

                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            const base64StringUS = reader.result
                              .replace("data:", "")
                              .replace(/^.+,/, "");
                            let temp = UserProfile;
                            temp = { ...temp, ProfileImg: base64StringUS };
                            dispatch(setUserProfile(temp));
                            // localStorage.setItem(
                            //   "wallpaperXXX",
                            //   base64StringUS
                            // );
                            // const myImage =
                            //   localStorage.getItem("wallpaperXXX");
                            // var bannerImg =
                            //   document.getElementById("tableBanner");
                            // bannerImg = document.getElementById("tableBanner");
                            // bannerImg.src = "data:image/png;base64," + myImage;
                            //document.body.style.background = `url(data:image/png;base64,${base64StringUS})`;
                          };
                          reader.readAsDataURL(file);

                          // uploadFile(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    {console.log(UserProfile?.ProfileImg, 118, selectedImage)}
                    <img
                      src={
                        selectedImage
                          ? URL.createObjectURL(selectedImage)
                          : UserProfile?.ProfileImg
                          ? "data:image/png;base64," + UserProfile?.ProfileImg
                          : `./images/profilePlaceholder-trans.jpg`
                      }
                      width={250}
                      height={250}
                      alt=""
                      className="img-fluid"
                    />
                    <br />
                    {/* <button
                      className="btn btn-success my-3"
                      onClick={() => {
                        updateProfileImg(selectedImage);
                        alert("Profile updated");
                      }}
                    >
                      Save Image
                    </button> */}
                  </div>
                </div>
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

export default EditProfile;
