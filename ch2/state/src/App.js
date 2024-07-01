import {useState} from "react";

export default function App() {
    // value를 state로 만들기
    const [value, setValue] = useState(0);

    // Increase 버튼 함수 만들기 (+함수형 인자로)
    function increaseValue() {
        setValue(value + 1);
    }

    // Reset 버튼 함수 만들기
    function reset() {
        setValue(0);
    }

    return (
        <div>
            <h1>value: {value}</h1>
            {/* 함수 */}
            {/*<button onClick={increaseValue}>Increase value</button>*/}
            {/*<button onClick={reset}>Reset value</button>*/}

            {/* 람다식 */}
            <button onClick={() => {setValue(value + 1)}}>Increase value</button>
            <button onClick={() => {setValue(0)}}>Reset value</button>
        </div>
    );
}
