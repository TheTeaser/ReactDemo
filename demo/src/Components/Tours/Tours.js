import Tour from './Tour/Tour';
import './Tours.css'
// let data=require('../../data/data.json');
function Tours(){
    return (
       <div className='Tours'>
        <Tour/>
        {/* <h1>Tour Component</h1>
        {data.map((item)=>{
            return (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <img src={item.image} alt={item.name}></img>
                </div>
            )
        })} */}
       </div>
    )
}
export default Tours