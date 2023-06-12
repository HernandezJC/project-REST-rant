// const React = require('react')
// const Def = require('../default.jsx')

// function edit_form (data) {
//     return (
//         <Def>
//           <main>
//             <h1>Edit Place</h1>
//             <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
//                 <div className="row">
//                     <div className="form-group col-sm-6">
//                         <label htmlFor="name">Place Name</label>
//                         <input id="name" 
//                         name="name" 
//                         value={data.place.name} 
//                     required />
//                     </div>
//                     <div className="form-group col-sm-6">
//                         <label htmlFor="pic">Place Picture</label>
//                         <input id="pic" 
//                         name="name" 
//                         value={data.place.name} 
//                     required />
//                     </div>
//                 </div>
//                 <div className="form-group">
//             <label htmlFor="city">City</label>
//             <input className="form-control" id="city" name="city" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="state">State</label>
//             <input className="form-control" id="state" name="state" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="cuisines">Cuisines</label>
//             <input
//               className="form-control"
//               id="cuisines"
//               name="cuisines"
//               required
//             />
//           </div>
//           <input className="btn btn-primary" type="submit" value="Add Place" />
//             </form>
//           </main>
//         </Def>
//     )
// }

// module.exports = edit_form



//
const React = require('react')
const Def = require('../default.jsx')




function edit_form (data){
  
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
  <div className="row">
      <div className="form-group col-sm-6">
          <label htmlFor="name">Place Name</label>
          <input id="name"  name='name' value={data.place.name}/>
      </div>
      <div className="form-group col-sm-6">
      <label htmlFor="pic">Place Picture</label>
    <input  id="pic" name="pic" />
      </div>
  </div>
      
  <div className="form-group">
    <label htmlFor="city">City</label>
    <input className="form-control" id="city" name="city"  value={data.place.city}/>
  </div>
  <div className="form-group">
    <label htmlFor="state">State</label>
    <input className="form-control" id="state" name="state"  value={data.place.state}/>
  </div>
  <div className="form-group">
    <label htmlFor="cuisines">Cuisines</label>
    <input className="form-control" id="cuisines" name="cuisines"  value={data.place.cuisines} required />
  </div>
  <input className="btn btn-primary" type="submit" value="Add Place" />
</form>

            </main>
        </Def>
    )
}

 module.exports = edit_form