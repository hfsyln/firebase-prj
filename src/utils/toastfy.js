import {toast} from "react-toastify"



const ToastifySuccess = (msg) => {
    toast.success(msg, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    export default ToastifySuccess;