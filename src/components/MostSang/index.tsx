import ShareButton from "../ShareButton";

export default function MostSang() {
    return (
        <div className='bg-[#2F2F2F] w-full h-auto p-4 rounded-md'>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className='w-full md:w-[300px] h-auto justify-center items-center'>
                    <img src="https://portalnorte.com.br/wp-content/uploads/2023/07/Cantor-Jungkook-do-BTS-lanca-musica-e-clipe-solo-SEVEN-nesta-sexta-14-e1689352346919.jpeg.webp" alt="jungkook-seven" />
                </div>
                <div className="flex flex-col w-full md:w-1/3">
                    <div className='my-2'>
                        <p className='font-medium'>The song you sang most this month was</p>
                    </div>
                    <div className='my-2'>
                        <h1 className='font-bold text-2xl'>SEVEN (feat. Latto) (Explicit Ver.)</h1>
                        <p className='text-neutral-400 text-xl max-w-[200px]'>Jung Kook, Latto</p>
                    </div>
                    <div className='mt-6 mb-2'>
                        <p className='text-white text-xl font-medium'>You sang this song 18 times in 3 different bars this month, he did well!</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-6 md:mt-0">
                    <ShareButton />
                </div>
            </div>
        </div>
    )
}
