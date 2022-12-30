import styled from "styled-components";

export const List = styled.ul`
`
export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 18px;
    font-weight: 500;
`
export const DeleteBtn = styled.button`
    max-width: 100px;
    padding: 5px 10px;
    border-radius: 8px;
    border: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 400;
    box-shadow: 5px 5px 6px 1px rgba(34, 60, 80, 0.2); 
    background-color: #6e6e6e;
    color: #fff;
    ransition: background-color 500ms linear;  

    &:hover,
    &:focus{
    color: #fff;
    background-color: #3e3e3e;
    transform: scale(1.05);
`