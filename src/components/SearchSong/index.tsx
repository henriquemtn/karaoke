import { FaSearch } from 'react-icons/fa';

export default function SearchSong() {
    return (
        <div className="relative w-full p-4">
            <input type="text" className="w-full bg-[#353535] h-[36px] rounded-md p-5 focus:outline-none focus:border-violet-700 focus:ring-1 focus:ring-violet-700" placeholder="Search your song..." />
            <button className="absolute right-4 top-4  w-10 h-10 bg-gradient-to-r from-violet-800 to-violet-700 rounded-[5px] flex justify-center items-center text-white">
                <FaSearch />
            </button>
        </div>
    )
}
