interface CustomProps {
    title: string,
    description: string,
    imageUrl: string,
}

export default function CardPlaylist({ title, description, imageUrl }: CustomProps) {
    return (
        <div className='p-4'>
            <div className="shadow-lg">
                <div className="w-[220px] h-1/3 relative rounded-tl-[5px] rounded-tr-[5px] overflow-hidden">
                    <img src={imageUrl} className="w-[220px] h-[100px] object-cover" />
                </div>
                <div className="w-[220px] h-auto min-h-[120px] text-white bg-zinc-800 rounded-bl-[5px] rounded-br-[5px] p-2">
                    <p className='text-neutral-400 text-[12px] max-w-[200px]'>Public Playlist</p>
                    <h1>{title}</h1>
                    <p className='text-neutral-400 text-[12px] max-w-[200px]'>{description}</p>
                </div>
            </div>
        </div>
    )
}
