import Swal from "sweetalert2"

export const deleteAlert = ()=>{
  return(
    Swal.fire({
      icon: "warning",
      title: "Are you sure to delete this task?",
      text: "This action is irreversible",
      showCancelButton: true,
      confirmButtonText: "Yes, continue",
      confirmButtonColor: "#a091f6",
      cancelButtonText: "No, cancel",
      cancelButtonColor: "#FC5185"
    }
    )
  )
}

export const deleSuccessAlert = () => {
  return (
    Swal.fire({
      toast: true,
      title: "Task deleted success",
      position: "bottom-end",
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
  )
}

export const updatedSuccess = () => {
  return (
    Swal.fire({
      toast: true,
      title: "Task updated success",
      position: "bottom-end",
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
  )
}

