import Mark from "../assets/marker.png"
// import Fuji from "../assets/fuji_san.jpg"
export default function Item(props) {
    return (
        <section>
                <img className="itemImg" src={props.img}/>
                <div className="itemInfo" >
                    <p className="location" >
                        <img src={Mark}/> {props.countryName} <a href={props.gps}>View on Google Maps</a>
                    </p>
                    <h2>{props.title}</h2>
                    <p className="date" >{props.date}</p>
                    <p className="travelInfo" >{props.travelInfo}</p>
                </div>
        </section>
    )
}