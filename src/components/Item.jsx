import Mark from "../assets/marker.png"
// import Fuji from "../assets/fuji_san.jpg"
export default function Item(props) {
    return (
        <section>
                <img className="itemImg" 
                     src={props.item.img.src}
                     alt={props.item.img.alt}     
                />
                <div className="itemInfo" >
                    <p className="location" >
                        <img src={Mark}/> {props.item.countryName} <a href={props.item.gps}>View on Google Maps</a>
                    </p>
                    <h2>{props.item.title}</h2>
                    <p className="date" >{props.item.date}</p>
                    <p className="travelInfo" >{props.item.travelInfo}</p>
                </div>
        </section>
    )
}