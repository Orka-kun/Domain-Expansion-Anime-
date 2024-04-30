import './Background.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import video1 from '../../assets/video1.mp4';

function Background({playStatus,heroCount}){
    if(playStatus){
    return(
            <video className='background fade-in' autoPlay loop>
                <source src={video1} type='video/mp4'></source>
            </video>
    )
}
    else if(heroCount===0){
        return(
            <img src={img1} className='background fade-in' alt=""></img>
        )
    }
    else if(heroCount===1){
        return(
            <img src={img2} className='background fade-in' alt=""></img>
        )
    }
    else if(heroCount===2){
        return(
            <img src={img3} className='background fade-in' alt=""></img>
        )
    }
    
 
}

export default Background