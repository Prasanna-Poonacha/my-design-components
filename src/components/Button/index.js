import styled from 'styled-components';

const getColor = (props) => {
    const colors = {
        pink: "pink",
        bbw: "white",
        vs: "yellow"
    }
    return colors[props.color];
}

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background: ${props => getColor(props)};
    border: 1px solid #000;
    border-radius: 5px;
    margin: 5px;
`

export default Button;