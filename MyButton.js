function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);  // DOM 컨테이너에 렌더링
