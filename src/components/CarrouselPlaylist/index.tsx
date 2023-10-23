import { useState, useRef, useEffect } from 'react';
import CardPlaylist from '../Card';

export default function CarouselPlaylist() {
    const cardData = [
        {
            title: 'Passar vergonha',
            description: 'Músicas que eu gosto de cantar no karaoke.',
            imageUrl: 'https://portalpopline.com.br/wp-content/uploads/2021/07/a11f11e-Queen-1024x810-1.jpg'
        },
        {
            title: 'Anime songs',
            description: 'As melhores da época que eu era otaku kkkkkk',
            imageUrl: 'https://lunetas.com.br/wp-content/uploads/2022/04/animes-e-criancas-portal-lunetas.jpg'
        },
        {
            title: 'Pagode',
            description: 'Pra cantar e beber todas.',
            imageUrl: 'https://i1.sndcdn.com/artworks-001039418842-xwlj17-t500x500.jpg'
        },
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStartX, setDragStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const handleGoPlaylist = () => {
        
    }
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
        setScrollLeft(containerRef.current ? containerRef.current.scrollLeft : 0);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;
    
        const container = containerRef.current;
        if (!container) return;
    
        const delta = e.clientX - dragStartX;
        container.scrollLeft = scrollLeft - delta;
      };

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            const handleMouseDown = (e: MouseEvent) => {
                setIsDragging(true);
                setDragStartX(e.clientX);
                setScrollLeft(container.scrollLeft);
            };

            const handleMouseUp = () => {
                setIsDragging(false);
            };

            const handleMouseMove = (e: MouseEvent) => {
                if (!isDragging) return;
                const delta = e.clientX - dragStartX;
                container.scrollLeft = scrollLeft - delta;
            };

            container.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);

            return () => {
                container.removeEventListener('mousedown', handleMouseDown);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, dragStartX, scrollLeft]);

    return (
        <div className="carousel-container max-w-screen-xl md:max-w-full overflow-x-auto">
            <div
                ref={containerRef}
                className="carousel flex"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
                onClick={handleGoPlaylist}
            >
                {cardData.map((data, index) => (
                    <div key={index} className="carousel-card">
                        <CardPlaylist imageUrl={data.imageUrl} title={data.title} description={data.description} />
                    </div>
                ))}
            </div>
        </div>
    );
}
