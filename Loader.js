import spinner from './spinner.gif'
const Loader=()=>{
    return(
        <div classname="loader">
            <img src={spinner} alt="Loading"/>
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader