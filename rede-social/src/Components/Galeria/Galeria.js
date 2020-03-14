import React, {Component} from 'react';
import './Galeria.css';
import Post1 from './../Posts/Post1';
import Post2 from './../Posts/Post2';
import Post3 from './../Posts/Post3';
import Post4 from './../Posts/Post4';
import Post5 from './../Posts/Post5';

export default class Galeria extends Component {
    render(){
        return(
            <>
                <div className="container">
                    <div class="gallery">
                        <a target="_blank">
                            <img src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/s960x960/82140495_2735467186499764_2900905629948313600_o.jpg?_nc_cat=104&_nc_sid=13bebb&_nc_ohc=KHj7NGJ_TiQAX9SgPOt&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=7&oh=3ac89e3294b953039e5d8098ca9ea529&oe=5E938E74" alt="Forest" width="600px" height="600px"/>
                        </a>
                        <Post1/>
                    </div>  

                    <div class="gallery">
                        <a target="_blank">
                            <img src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/81117331_2729001307146352_1384913853862641664_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_ohc=y9pP9VZJP0MAX-tV7Jm&_nc_ht=scontent.fjdo10-1.fna&oh=24382236bfccfffdc17d9ae7ff2411c6&oe=5E90F112" alt="Forest" width="600px" height="600px"/>
                        </a>
                        <Post2/>  
                    </div>

                    <div class="gallery">
                        <a target="_blank">
                            <img src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/s960x960/43503958_1968701576509666_7137167307196858368_o.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=4B_HbC78wtQAX-Q3Zmh&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=7&oh=0040b0ed3c726f237ae0b10d978a988f&oe=5E906188" alt="Forest" width="600px" height="600px"/>
                        </a>
                        <Post3/>  
                    </div>  

                    <div class="gallery">
                        <a target="_blank">
                            <img src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/s960x960/35330187_1802422659804226_4607074134084550656_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=qHwNZCxOsHQAX8RZan-&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=7&oh=012888574723371b23d7a20f88e26b1d&oe=5E914BC8" alt="Forest" width="600px" height="600px"/>
                        </a>
                        <Post4/>  
                    </div>
                    <div class="gallery">
                        <a target="_blank">
                            <img src="https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/12144692_1037369936309506_8960091373999587601_n.jpg?_nc_cat=105&_nc_sid=05277f&_nc_ohc=cYAV6Dg0fkkAX--tlhw&_nc_ht=scontent.fjdo10-2.fna&oh=c4651ae52f4e272d2efe555a5ab89090&oe=5E906377" alt="Forest" width="600px" height="600px"/>
                        </a>
                        <Post5/>  
                    </div>    
                </div>
            </>
        )
    }
}