import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const swalUtils = {
    toast : (type = 'success',title,content = null) => {
        MySwal.fire({
            title: title,
            text: content,
            icon: type,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
        });
    },
}

export default swalUtils;