import React, { useContext } from 'react';
import france from '../../assets/france.svg';
import english from '../../assets/united-kingdom.svg';
import espagne from '../../assets/spain.svg';
import { Context } from '../../context/langContext';

const Flags = () => {
    const { toggleLang } = useContext(Context);

    return (
        <div className="container-flags">
            <img onClick={() => toggleLang('FR')} src={france} alt={france} />
            <img onClick={() => toggleLang('EN')} src={english} alt={english} />
            <img onClick={() => toggleLang('ES')} src={espagne} alt={espagne} />
        </div>
    );
};

export default Flags;