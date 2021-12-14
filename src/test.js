import { Link } from "react-router-dom";

let array = [4, 2,3,5,6 ]

const evenOdd = (...array) => {
    console.log(array)
    array = array.map((el) => {
        return el*4;
     
  })
}

evenOdd(array)


const Test = () => {
    return (
        <div className="content">
            <h2>
                This is a test to see how the routing works
            </h2>
            <Link to="/test/test1">
                <button>test1</button>
            </Link>
            
        </div>
    );
}
 
export default Test;