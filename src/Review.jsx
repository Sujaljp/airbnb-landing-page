import swim from './assets/swim.png'
import star from './assets/star.png'
import './Review.css'




export default function Review(props) {
    const {item : prop} = props;
    const a = ["one","two","three"]
    //creating jsx objects and using them 
    const map = a.map((name)=>{
        return (<h3>{name}</h3>)
    })
    
    let badgeText 
    if(prop.openSpots===0){
        badgeText="SOLD OUT"
    }else if(prop.location === "Online"){
        badgeText = "ONLINE"
    }
    console.log(prop.img);
    return ( 
        <div className="cards">
            {badgeText && <button className="badge">{badgeText}</button>}
            <img src={`./images/${prop.coverImg}`} alt="swimmer" />
            <div className='ratings'><img className="star" src={star} alt="" /> {parseFloat(prop.stats.rating)} ({prop.stats.reviewCount}) - {prop.location}</div>
            <p>{prop.title}</p>
            <p><strong>From ${prop.price}</strong> / person</p>        
        </div>
  )
}
