import { useEffect, useState } from 'react';

function FunctionalComponent() {
    console.log('[Function] Beginning');                    // 실행 순서 : 1, 6(리렌더링 시)
    const [value, setValue] = useState(0);

    useEffect(() => {                               // 실행 순서 : 4
        console.log('[Function] useEffect []');

        return () => {                              // 실행 순서 : 11(컴포넌트 변경)
            console.log(
                '[Function] useEffect return []'
            );
        };
    }, []);

    useEffect(() => {                               // 실행 순서 : 5, 10(리렌더링 시)
        console.log('[Function] useEffect [value]');

        return () => {                              // 실행 순서 : 9(리렌더링 시, value의 상태가 변하므로 언마운트하여 클린 업 먼저 동작)
            console.log(                                    // 실행 순서 : 12(컴포넌트 변경)
                '[Function] useEffect return [value]'
            );
        };
    }, [value]);

    console.log('[Function] End');                          // 실행 순서 : 2, 7(리렌더링 시)

    return (                                                // 실행 순서 : 3, 8(리렌더링 시)
        <div>
            <h1>FunctionComponent</h1>
            <h1>value: {value}</h1>
            <button
                onClick={() => {
                    setValue((state) => state + 1);
                }}
            >
                Increase value
            </button>
        </div>
    );
}

export default FunctionalComponent;
