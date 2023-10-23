import { Link } from "react-router-dom";

export default function Header({ user }: any) {
    console.log('User:', user);

    return (
            <nav className="w-full bg-[#353535] fixed top-0 left-0 right-0 z-20">
                <div className="md:justify-around mx-[20px] md:items-center flex md:px-8">
                    <div className="flex flex-row items-center justify-between w-full py-3 md:py-5">
                        <h1 className="text-xl text-violet-700  font-medium">Logo</h1>
                        <h1 className="text-xl text-gray-50 font-medium">Karaoke</h1>
                        <div
                            className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
                        >
                            <ul className="items-center justify-center hidden space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-[#FFF] hover:text-[#159688]">
                                    <a href="/">Início</a>
                                </li>

                                <li className="text-[#FFF] hover:text-[#159688]">
                                    <Link to="/playlist" state={{ user }}>Playlists</Link>
                                </li>

                                <li className="text-[#FFF] hover:text-[#159688]">
                                    <Link to="/bar/1" state={{ user }}>Bar</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <a href="/">
                                <div className="flex justify-center items-center gap-2">
                                    <img src={user.profilePic} className="w-16 h-16 rounded-full" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </nav>
    );
}