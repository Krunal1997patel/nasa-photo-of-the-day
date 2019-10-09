import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SpaceCard from './SpaceCard';

const SpaceList = props => {

    const [spaceImg, setSpaceImg] = useState('');

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response =>{
                const datas = response.data;

                // console.log(datas);

                setSpaceImg(datas);

            })
            .catch(err => console.log(`You are not reciving data ${err}`))


    },[])

    return(
        <div>
            <SpaceCard 
            key={spaceImg.date}
            title={spaceImg.title}
            date={spaceImg.date}
            img={spaceImg.url}
            text={spaceImg.explanation}
            />
        </div>
    )
}

export default SpaceList;