import './Home.css'

const Home = () => {
  return (
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button className="primary" type="button">Search</button>
      </form>
    </section>
  )
}

export default Home
