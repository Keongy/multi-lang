import React, { useContext } from 'react';
import data from '../../assets/data';
import { Context } from '../../context/langContext';

const Accueil = () => {

    const { lang } = useContext(Context);


    return (
        <div className="container">
            <h1>{data[lang].title}</h1>
            <p>{data[lang].texte}</p>
        </div>
    );
};

export default Accueil;