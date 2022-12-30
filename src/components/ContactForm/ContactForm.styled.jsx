import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 10px;
    font-size: 20px;
    font-weight: 500;
`

export const Input = styled.input`
    font-size: 20px; 
    margin: 10px 0; 
    width: 250px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: 2px solid #000;
`

export const Button = styled.button`
    margin: 0  20px 20px 20px;
    max-width: 200px;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 24px;
    font-weight: 400;
    box-shadow: 5px 5px 6px 1px rgba(34, 60, 80, 0.2); 
    background-color: #6e6e6e;
    color: #fff;
    ransition: background-color 500ms linear;  

    &:hover,
    &:focus{
    color: #fff;
    background-color: #3e3e3e;
    transform: scale(1.10);
}
`