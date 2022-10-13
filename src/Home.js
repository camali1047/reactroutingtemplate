function Home(prop) {

console.log("ali cam home");

  return (<div>
  <form>
    <input type={"text"} onChange={prop.change} value={prop.value}/>
    <button >set</button>
    </form>
    <p>{prop.value}</p>
    
  </div>)
}

export default Home;