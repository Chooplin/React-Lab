import './CourseCard.css';

export default function CourseCard({img, tags, title, startPrice, types}) {

    return (
        <div className='CourseCard'>
            <div className='cover'>
                <img src={img}/>
            </div>
            <div className='info'>
                <ul className='tags'>
                    {tags.map((tag, i) => (
                        <li className='tag' key={i}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <div className='name'>{title}</div>
                <div className='price'>{startPrice.toLocaleString()}원부터</div>
                <div className='types'>
                    {
                        types.map((type, i) => {
                            return <div className='type' key={i}>{type}</div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}