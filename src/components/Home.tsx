import './Home.css'
import HousingLocation from './HousingLocation'
import { HousingLocation as HousingLocationProps } from '../types';

const baseUrl = 'https://angular.io/assets/images/tutorials/faa'

const hardcodedHousingLocationProps: HousingLocationProps = {
  id: 9999,
  name: 'Test Home',
  city: 'Test city',
  state: 'ST',
  photo: `${baseUrl}/example-house.jpg`,
  availableUnits: 99,
  wifi: true,
  laundry: false,
};

const Home = () => {
  return (
    <>
      <section>
        <form>
          <input type="text" placeholder="Filter by city" />
          <button className="primary" type="button">Search</button>
        </form>
      </section>
      <section className="results">
        <HousingLocation {...hardcodedHousingLocationProps} />
      </section>
    </>
  )
}

export default Home
