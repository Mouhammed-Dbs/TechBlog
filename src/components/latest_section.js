import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"

export default function trending_section(){
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post(){
    return(
        <div className="item">
            <div className="image h-64 overflow-hidden rounded-t-lg">
                <Link href={'/'}>
                    <Image src={'/images/techblog.jpeg'} width={500} height={300} alt="" priority={true}/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={'/'} className="text-orange-600 hover:text-orange-800">Android Studio</Link>
                    <Link href={'/'} className="text-gray-800 hover:text-gray-600">-July 3,2023</Link>
                </div>
                <div className="title">
                    <Link href={'/'} className="text-xl font-bold text-gray-800 hover:text-gray-600">Introduction to android studio using java</Link>
                </div>
                <p className="text-gray-500 py-3">
                    sjfoapsf nao snvoovsna
                </p>
                <Author></Author>
            </div>
        </div>
    )
}