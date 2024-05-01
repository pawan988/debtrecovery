import { useEffect } from "react";
import Swal from "sweetalert2";

const ErrorComponent = ({ message }) => {
  useEffect(() => {
    if (message) {
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        confirmButtonText: "OK",
      }).then(({ result }: any) => {
        // setIsModalOpen(false);
      });
    }
  }, [message]);
};

export default ErrorComponent;
