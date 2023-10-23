import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import ShareButton from "../../components/ShareButton";
import PlaylistMusic from "../../components/PlaylistMusic";

export default function PlaylistPage() {
    const location = useLocation();
    const user = location.state?.user;

    return (
        <section className="bg-[#393939] text-white min-h-screen flex flex-col">
            <Header user={user}/>
            <div className="flex flex-col gap-4 p-4 mt-[100px]">
                <div className="w-full">
                    <img src="https://portalpopline.com.br/wp-content/uploads/2021/07/a11f11e-Queen-1024x810-1.jpg" className="rounded-md" alt="" />
                </div>
                <div className="w-full">
                    <span className="text-[#9D9D9D]">Public Playlist</span>
                    <h1 className="text-3xl font-bold">Passar vergonha</h1>
                    <p className="text-[#9D9D9D]">Músicas que eu gosto de cantar no karaoke.</p>
                    <div className="flex flex-row items-center gap-3 py-2">
                        <img src={user.profilePic} alt="" className='w-8 h-8 rounded-full' />
                        <p>{user.name} added 10 songs</p>
                    </div>
                    <div>
                        <ShareButton />
                    </div>
                </div>
            </div>
            <div className="bg-[#2E2E2E] h-16 w-full">
                <div className="h-16 flex justify-around items-center text-xl">
                    <p className="text-base">Add a new song</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <PlaylistMusic imageUrl="https://portalpopline.com.br/wp-content/uploads/2021/07/a11f11e-Queen-1024x810-1.jpg" title="Crazy Little Thing Called Love" artist="Artista: Queen" />
                <PlaylistMusic imageUrl="https://cdns-images.dzcdn.net/images/cover/d1ddbc901bf7d7b43187fac1b1e6714e/500x500.jpg" title="Seven (feat. Latto) (Clean Ver.)" artist="Artista: Jung Kook, Latto" />
                <PlaylistMusic imageUrl="https://i.scdn.co/image/ab67616d0000b273963e78b4613ca9dd5386df63" title="Dormi na praça" artist="Artista: Bruno & Marrone" />
            </div>

        </section>
    )
}
