interface CustomProps {
    enter: string,
    inputText: string,
    bellowInput: string,
    buttonText: string,
    open: any,
    onClose: any,
}

import { FaWindowClose } from 'react-icons/fa'

export default function ModalOpen({ open, onClose, enter, inputText, bellowInput, buttonText }: CustomProps) {
    if (!open) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-80 bg-black z-50 p-4">
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="h-auto w-full p-4 bg-[#232323] rounded-md">
                <div className="flex justify-between items-center">
                    <h1 className='text-xl'>{enter}</h1>
                    <span className='text-[#791AF1]' onClick={onClose}><FaWindowClose /></span>
                </div>
                <div className="my-8 gap-4 flex flex-col">
                    <input type="text" className="w-full bg-[#353535] h-[36px] rounded-md p-5" placeholder={inputText} />
                    <a href="">{bellowInput}</a>
                </div>
                <button className="bg-gradient-to-r from-[#791AF1] to-[#5E0ACA] w-full h-[50px] rounded-md flex items-center px-4 justify-center">{buttonText}</button>
            </div>
        </div>
    )
}
