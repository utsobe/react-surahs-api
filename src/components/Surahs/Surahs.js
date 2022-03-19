import React from 'react';
import { Accordion } from 'react-bootstrap';

const Surahs = (props) => {
    const { name, englishName, number, ayahs } = props.surah;
    return (
        <div className='container'>

            <Accordion defaultActiveKey="0" className='py-2'>
                <Accordion.Item eventKey={number} className='my-2 border rounded-3'>
                    <Accordion.Header><b className='fs-4'>{name} - (Surah-{englishName})</b></Accordion.Header>
                    <Accordion.Body>
                        {
                            ayahs.map(ayah =>
                                <div>
                                    <p>{ayah.text}</p>
                                    <audio src={ayah.audio} controls auto></audio>
                                </div>)
                        }
                    </Accordion.Body>
                </Accordion.Item>



            </Accordion>
        </div>
    );
};

export default Surahs;