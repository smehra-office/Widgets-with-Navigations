import React, { useEffect, useState } from 'react';
import translator from '../API/gtranslate';

const Convert = ({ language, text }) => {
    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        if (text && text != '') {
            const translate = async () => {
                let { data } = await translator.post('', {}, {
                    params: {
                        q: text,
                        target: language.value
                    }
                });
                setTranslatedText(data.data.translations[0].translatedText);
            }
            let timeoutId = setTimeout(translate, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [language, text]);

    return <h2>{translatedText}</h2>
}


export default Convert;