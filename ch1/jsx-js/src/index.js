import ReactDOM from 'react-dom';

let text = 'Hello, world!';
const num = 15;
const obj = { key: 0, a: 1, b: 2 };
const arr = ['a', 'b', 'c'];
const imageUrl =
    'https://dst6jalxvbuf5.cloudfront.net/static/img/logo/logo.svg';

const element = (
    <div>
        <h1>변수 넣기</h1>
        <ul>
            <li>{text}</li>
            <li>{text + '+ 따옴표' + `+ 백틱`}</li>
        </ul>
        <h1>숫자 및 계산식 넣기</h1>
        <ul>
            <li>{num}</li>
            <li>{num + 15}</li>
        </ul>
        <h1>Boolean, Nullish 값 넣기</h1>
        <ul>
            <li>true, false, undefined, null은 출력 되지 않는다.</li>
            <li>{true}</li>
            <li>{false}</li>
            <li>{undefined}</li>
            <li>{null}</li>
        </ul>
        <h1>Object, Array 넣기</h1>
        <ul>
            <li>Object는 오류 : Objects are not valid as a React child</li>
             {/*<li>{obj}</li>*/}
            <li>Array는 출력</li>
            <li>{arr}</li>
            <li>arr[0]: {arr[0]}</li>
            <li>arr[1]: {arr[1]}</li>
            <li>arr[2]: {arr[2]}</li>
            <li>arr[3]: {arr[3]}</li>
        </ul>
        <h1>주석 넣기</h1>
        <ul>
            <li>{/* 주석입니다. */}</li>
        </ul>
        <h1>태그 속석에 넣기</h1>
        <ul>
            <li>
                <img src={imageUrl} alt="logo" />
            </li>
        </ul>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
