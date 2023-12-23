import { typeArray } from "../typeArray";
const initialState = {
  loginData: {},
  UserProfile: {
    FName: "FName",
    LName: "LName",
    Mobile: "9876543210",
    LinkedIn: "linkedin.com",
    Email: "test1@test.test",
    ProfileImg: "",
    Designation: "Developer",
    SkillDomain: "MERNStack",
  },
  ProductList: [],
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeArray.setLoginDataAction:
      return { ...state, loginData: action.payload };

    case typeArray.setUserProfile:
      return { ...state, UserProfile: action.payload };
    case typeArray.setProductList:
      return { ...state, ProductList: action.payload };
    //
    default:
      return state;
  }
};
