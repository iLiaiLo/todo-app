import { toast, Zoom } from 'react-toastify';

const toastContent={
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
}

export const warn=()=>toast.warn('please enter a text', toastContent);

export const saveMessage=()=>toast.success('task saved successfully!', toastContent);

export const addMessage=()=>toast.success('task added successfully!',toastContent);

export const clearAllMessage=()=>toast.info('all tasks cleared!',toastContent);

export const removeMessage=()=>toast.info('task removed!',toastContent);

export const completedMessage=()=>toast.success('task completed!',toastContent);