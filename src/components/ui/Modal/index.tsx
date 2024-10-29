/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

type propsTypes = {
    children: React.ReactNode;
    onClose: any;
}

const Modal = (props: propsTypes) => {
    const { children, onClose } = props;
    const ref: any = useRef();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    },[onClose])

return (
    <div className=" fixed top-0 w-[100vw] h-[100vh] z-[1000] bg-black bg-opacity-50 flex align-middle justify-center items-center">
        <div className="bg-white h-[60vh] min-w-[40vw] rounded-md" ref={ref}>
            {children}
            
        </div>


    </div>
)
}

export default Modal;