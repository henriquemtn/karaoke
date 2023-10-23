interface CustomProps {
    title: string,
    description: string,
    imageUrl: string,
}

export default function CardDaily({ title, description, imageUrl }: CustomProps) {
    return (
        <div className='p-4'>
            <div className="shadow-lg">
                <div className="w-[220px] h-1/3 relative rounded-tl-[5px] rounded-tr-[5px] overflow-hidden">
                    <img src={imageUrl} className="w-[220px] h-[200px] object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-violet-800 bg-opacity-50 rounded-tl-[5px] rounded-tr-[5px]"></div>
                </div>
                <div className="w-[220px] h-[80px] text-white bg-neutral-800 rounded-bl-[5px] rounded-br-[5px] p-2">
                    <h1>{title}</h1>
                    <p className='text-neutral-400 text-[12px] max-w-[200px]'>{description}</p>
                </div>
            </div>
        </div>
    )
}
