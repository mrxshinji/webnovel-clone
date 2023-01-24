import Image from 'next/image';
import Link from 'next/link';
import stl from './rightCard.module.scss'

type Props = {
    title: string;
    url: string;
    imgLink: string;
    genre: string;
}

const RightCard = ({title, url, imgLink, genre}: Props) => {
    return (
        <Link href={url} className={stl.container}>
            <div className={stl.imgContainer}>
                <Image src={imgLink} alt={title} fill />
            </div>
            <h4>{title.substring(0,17)}...</h4>
            <p>{genre}</p>
        </Link>
    )
}

export default RightCard;