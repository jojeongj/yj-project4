import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselMain() {
    return (
        <Carousel autoPlay={true} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false} interval={5000} transitionTime={1500} stopOnHover={false} animationHandler="fade">
            {/* 1번째 캐러셀 */}
            <div className="w-full">
                <img src="https://plus.unsplash.com/premium_photo-1680742508463-acb8c21af3bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="main carousel1" />
            </div>
            {/* 2번째 캐러셀 */}
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1688164987143-3938a38cf69c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="main carousel2" />
            </div>
        </Carousel>
    )
}