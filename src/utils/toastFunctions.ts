import { toast } from 'react-toastify'

export const toastSuccess = (message: string) => {
  toast(message, {
    type: 'success',
  })
}

export const toastError = (message: string) => {
  toast(message, {
    type: 'error',
  })
}
