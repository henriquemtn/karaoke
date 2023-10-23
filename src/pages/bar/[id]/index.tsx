import Header from "../../../components/Header";
import { useLocation } from "react-router-dom";
import PlaylistMusic from "../../../components/PlaylistMusic";
import {
    FaDoorOpen,
    FaUserFriends,
} from 'react-icons/fa'

export default function SingPage() {
    const location = useLocation();
    const user = location.state?.user;

    return (
        <section className="bg-[#232323] text-white min-h-screen flex flex-col">
            <Header user={user} />
            <div className="flex flex-col md:flex-row gap-4 p-4 mt-[100px]">
                <div className="w-full md:w-1/3 md:px-2">
                    <img src="https://cdns-images.dzcdn.net/images/cover/d1ddbc901bf7d7b43187fac1b1e6714e/500x500.jpg" className="rounded-md" alt="" />
                </div>
                <div className="w-full md:w-2/3 md:px-2">
                    <span className="text-[#9D9D9D]">Actual karaoke playlist</span>
                    <h1 className="text-3xl font-bold">SEVEN (feat. Latto) (Explicit Ver.)</h1>
                    <div className="flex flex-row gap-3 items-center">
                        <p className="text-[#9D9D9D]">Playing now</p>
                        <div className="pulsar-animation" />
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between text-sm text-grey-darker">
                            <p>0:40</p>
                            <p>3:04</p>
                        </div>
                        <div className="mt-1">
                            <div className="h-2 bg-gray-300 rounded-full">
                                <div className="pulsar-bar">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3 py-2">
                        <img src={user.profilePic} alt="" className='w-8 h-8 rounded-full' />
                        <p>{user.name} added this song</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#353535] w-full h-[7px] my-2" />
            <div className="p-4">
                <h1 className="text-xl">Playing next</h1>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <PlaylistMusic imageUrl="https://portalpopline.com.br/wp-content/uploads/2021/07/a11f11e-Queen-1024x810-1.jpg" title="Crazy Little Thing Called Love" artist="Added by Sabrina" />
                <PlaylistMusic imageUrl="https://cdns-images.dzcdn.net/images/cover/d1ddbc901bf7d7b43187fac1b1e6714e/500x500.jpg" title="Seven (feat. Latto) (Clean Ver.)" artist="Added by Lucas" />
                <PlaylistMusic imageUrl="https://i.scdn.co/image/ab67616d0000b273963e78b4613ca9dd5386df63" title="Dormi na praça" artist="Added by Jorge" />
                <div className="flex justify-center items-center">
                    <p>See more next song's</p>
                </div>
            </div>
            <div className="bg-[#2E2E2E] h-16 w-full">
                <div className="h-16 flex justify-around items-center text-xl">
                    <FaDoorOpen />
                    <p className="text-base">Add a new song</p>
                    <FaUserFriends />
                </div>
            </div>
        </section>
    )
}
