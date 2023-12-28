import { typeArray } from "../typeArray";
const initialState = {
  loginData: {},
  UserProfile: {
    FName: "Devkumar",
    LName: "Parekh",
    Mobile: "8469025446",
    LinkedIn: "https://www.linkedin.com/in/devkumar-parekh-451521191/",
    Email: "parekh2devkumar@gmail.com",
    ProfileImg: "",
    Designation: "Developer",
    SkillDomain: "MERNStack",
  },
  ProductList: [],
  TaskList: [],
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeArray.setLoginDataAction:
      return { ...state, loginData: action.payload };

    case typeArray.setUserProfile:
      return { ...state, UserProfile: action.payload };
    case typeArray.setProductList:
      return { ...state, ProductList: action.payload };
    case typeArray.setTaskList:
      return { ...state, TaskList: action.payload };
    //
    default:
      return state;
  }
};
