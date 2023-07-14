import axiosInstance from "../../utils/Axios";

function FetchSlider() {
  return async (dispatch) => {
    const res = await axiosInstance.get("/slider");
    const data = await res.data;
    dispatch({ type: "fetchSlider", payload: data });
  };
}

export default FetchSlider;
