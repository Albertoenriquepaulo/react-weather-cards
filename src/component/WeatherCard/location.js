import React from 'react';
import styled from '@emotion/styled';

const Location = ({ city, country, changeQuery }) => {

    const Container = styled.div`
        text-align: center;
    `

    const City = styled.h1`
        font-family: Merriweather, sans-serif;
        font-size: 1.6em;   
    `

    const Country = styled.h3`
        font-family: "Fira Sans", sans-serif;
        font-size: 1.1rem;
    `
    //https://blog.logrocket.com/5-things-you-can-do-in-css-in-js-that-you-didnt-know-about-c422fb67ceb6/
    const TextBox = styled.input`
        font-family: Merriweather, sans-serif;
        font-size: 1.2em;
        border: 0;
        cursor: pointer;
        background-color:transparent;
        /* outline: none; */
        text-align: center;
        color:white;
        width:100%;
        `

    const onkeyDownAndBlur = (params) => {
        if (params.keyCode === 13) {
            params.preventDefault();
            changeQuery(params.target.value);
            console.log("From onkeyDownAndBlur:", params.target.value);
        }
    }


    return (
        <Container>
            <City><TextBox type="text" defaultValue={city} onKeyDown={onkeyDownAndBlur} onBlur={onkeyDownAndBlur} /> </City>
            <Country>{country}</Country>
        </Container>
    );
}

export default Location;
