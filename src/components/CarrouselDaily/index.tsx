import { useState, useRef, useEffect } from 'react';
import CardDaily from '../CardDaily';

export default function CarouselDaily() {
    const cardData = [
        {
            title: 'Daily Mix 1',
            description: 'Oasis, The Beatles, Queen and more..',
            imageUrl: 'https://cdns-images.dzcdn.net/images/artist/bafbda4f8507af52be228cfe08d3b460/500x500.jpg'
        },
        {
            title: 'Daily Mix 2',
            description: 'Le Sserafim, Twice, BTS and more..',
            imageUrl: 'https://www.billboard.com/wp-content/uploads/2023/04/LE-SSERAFIM-press-credit-SOURCE-MUSIC-2023-billboard-exclusive-1548.jpg?w=1024'
        },
        {
            title: 'Daily Mix 3',
            description: 'Grupo Menos é Mais, Alexandre Pires, Péricles and more..',
            imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb88ea5f3e703b821f4f19fc81'
        },
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStartX, setDragStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

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
            >
                {cardData.map((data, index) => (
                    <div key={index} className="carousel-card">
                        <CardDaily imageUrl={data.imageUrl} title={data.title} description={data.description} />
                    </div>
                ))}
            </div>
        </div>
    );
}
