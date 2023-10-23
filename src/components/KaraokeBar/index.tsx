import { FaStar } from 'react-icons/fa'
import ModalOpen from '../Modal'
import { useState } from 'react'

interface CustomProps {
    name: string,
    avaliation: string,
    description: string,
    mapUrl: string,
    peoplesInside: number,
    imageUrl: string,
}

export default function KarokeBar({ name, avaliation, description, mapUrl, peoplesInside, imageUrl }: CustomProps) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='w-full my-4'>
            <div className='shadow-lg w-full md:w-[300px] h-[160px] p-2 rounded-t-md' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}>
                <div className='rounded-full bg-[#791AF1] w-10 h-10 flex justify-center items-center'>
                    <h1 className='font-medium'>{peoplesInside}</h1>
                </div>
            </div>
            <div className='bg-zinc-800 flex flex-col w-full md:w-[300px] rounded-b-md h-[160px]'>
                <div className='flex justify-between p-2'>
                    <h1 className='text-xl'>{name}</h1>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-yellow-500'><FaStar /></h1>
                        <p>{avaliation}</p>
                    </div>
                </div>
                <div className='p-2'>
                    <p className='text-[12px]'>
                        {description}
                    </p>
                </div>
                <div className='flex justify-between p-2'>
                    <a href={mapUrl}>See in the map</a>
                    <div>
                        <button
                            onClick={() => setOpenModal(true)}
                            className='modalButton'>
                            Enter
                        </button>
                        <ModalOpen
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                            enter={`Entre no ${name}`}
                            inputText='Bar token'
                            bellowInput='Or login with your QR code'
                            buttonText='Enter'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
