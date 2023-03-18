import Tours from '../Tours/Tours';
const data = require('../../data/data.json');

function TourDetails(){
    return (
        <><Tours TourData={data}/></>
    )
}

export default TourDetails