import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from 'swiper/react';



export default function trending_section(){
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay:2000,
                        disableOnInteraction: false 
                    }}
                    >
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                    <SwiperSlide>{Slide()}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

function Slide(){
    return (
        <div className="grid md:grid-cols-2 gap-4 overflow-hidden mx-auto">
            <div className="image mx-auto w-11/12">
                <Link href={'/'} className="relative block h-[300px] lg:h-[380px] w-full"><Image src={'/images/techblog.jpeg'} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} priority={true} className="rounded-lg mx-auto md:mx-0"/></Link>
            </div>
            <div className="info flex justify-center flex-col px-3">
                <div className="category">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">Android Studio</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">-July 3,2023</Link>
                </div>
                <div className="title">
                <Link href={'/'} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Introduction to android studio using java</Link>
                </div>
                <p className="text-gray-500 py-3">
                    sjfoapsf nao snvoovsna
                </p>
                <Author></Author>
            </div>
        </div>
    )
}