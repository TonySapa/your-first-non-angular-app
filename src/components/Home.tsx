import './Home.css'
import HousingLocation from './HousingLocation'

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
        <HousingLocation />
      </section>
    </>
  )
}

export default Home
