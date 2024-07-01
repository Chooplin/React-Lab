import ReactDOM from 'react-dom';

const arr = ['1번', '2번', '3번'];

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr2.push(<h4 key={i}>{arr[i]}</h4>);
    // = [<h4>1번</h4>, <h4>2번</h4>, <h4>3번</h4>]
}

const element = (
    <div>
        <h1>배열로 넣기</h1>
        <ul>
            <li>{arr}</li>
            <li>{arr2}</li>
        </ul>

        <hr />

        <h1>Array.map</h1>
        <ul>
            <li>
                {arr.map((item, index) => {
                    return <h4 key={index}>{item}</h4>;
                })}
            </li>
            <li>key 를 넣지 않으면 Warning: Each child in a list should have a unique "key" prop. 발생</li>
        </ul>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);