// const React = require('react')
// const Def = require('../default')

// function index (data) {
//     console.log(data, "Data info")
//   let placesFormatted = data.places.map((place) => {
//     return (
//         <div>
//             <h2>{place.name}</h2>
//             <img src={place.pic} alt={place.name}/>
//         </div>
//     )
//   })
//     return (
//       <Def>
//           <main>
//               <h1>PLACES INDEX PAGE</h1>
//               {placesFormatted}
//           </main>
//       </Def>
//     )
//   }
  

// module.exports = index


//Henry index
const React = require('react')
const Def = require('../default')

function index (data) {
    //console.log(data.places.name)
    let placesFormatted = data.places.map((place, index) => {
        return (
          <div className="col-sm-6">
            <h2>{place.name}</h2>
            <a href={`/places/${index}`}>
              {place.name}
            </a>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })      
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              <div className="row">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }

  module.exports = index