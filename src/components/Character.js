// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    width: 75%;
    margin: auto auto;

`

const StyledCard = styled.div`
    color: ${pr => pr.theme.textColor};
    border: 2px solid ${pr => pr.theme.borderColor};
    border-radius: 20px;
    padding: 2% 2%;
    text-align:center;
    margin: 2% auto;

    &:hover {
    transform: scale(1.25);
    transition: transform 0.5s ease-in-out;
    } 

    .image {
        border-radius: 50%;
    }


`

export default function Character(props){
    const { characters } = props
    const characterCard = characters.map(char => {
        return (
            <StyledCard key={char.id}>
                <img className='image' src={char.image} alt='a pic of the character' />
                <h3>Name: {char.name}</h3>
                <p>Status: {char.status}</p>
                <p>Species: {char.species}</p>
                <p>Type: {char.type}</p>
                <p>Gender: {char.gender}</p>
            </StyledCard>
            )
        })
        return <Page>{characterCard}</Page>
    }
       