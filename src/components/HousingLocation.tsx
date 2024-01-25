import './HousingLocation.css'
import { HousingLocation as HousingLocationProps } from '../types'

const HousingLocation = (props: HousingLocationProps) => {
  return (
    <section className="listing">
      <img className="listing-photo" src={props.photo} alt={`Exterior of ${props.name}`} />
      <h2 className="listing-heading">{props.name}</h2>
      <p className="listing-location">{`${props.city}, ${props.state}`}</p>
    </section>
  )
}

export default HousingLocation
