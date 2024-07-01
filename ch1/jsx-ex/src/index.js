import ReactDOM from 'react-dom';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
    <div style={{display: 'flex'}}>
        {/* 여기에 JSX를 활용하여 요구사항에 맞게 구구단을 완성시켜보세요! */}
        {
            num.map((i) => (i !== 1 && i !== 5) &&
                <div style={{padding: 10, color: (i % 2) ? 'blue' : 'black'}}>
                    {num.map((j) =>
                        <div>{i} x {j} = {i * j}</div>)
                    }
                </div>
            )
        }
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
