import {
    FaFacebookSquare,
    FaInstagram,
    FaWhatsapp,
    FaTwitter,
} from 'react-icons/fa'

export default function ShareButton() {
    return (
        <div className='bg-gradient-to-r from-[#791AF1] to-[#5E0ACA] w-full h-[50px] rounded-md flex items-center px-4 justify-around'>
            <p className='font-medium'>Share this on:</p>
            <div className='flex gap-4 text-2xl'>
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitter />
                <FaWhatsapp />
            </div>
        </div>
    )
}
