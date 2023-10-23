interface CustomProps {
    title: string,
    artist: string,
    imageUrl: string,
}

export default function PlaylistMusic({title, artist, imageUrl}: CustomProps) {
    return (
        <div className="flex flex-row gap-2">     
            <div className="w-[100px] h-[100px]">
                <img src={imageUrl} className="w-full h-full" alt="" />
            </div>
            <div>
                <h1 className="text-base font-bold">{title}</h1>
                <p className="text-[#9D9D9D]">{artist}</p>
            </div>
        </div>
    )
}
