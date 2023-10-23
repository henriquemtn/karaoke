import image from '../../assets/recommend.png'

export default function Recommend() {
    return (
        <section className='w-full'>
            <div className="p-4 w-full">
                <img className='rounded-md' src={image} alt="recommend" />
            </div>
        </section>
    )
}
