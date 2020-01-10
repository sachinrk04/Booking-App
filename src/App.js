import React, { Component } from 'react';
import './App.css';

import {
  Container, Card, Button,
  Table, TableBody, TableCell, TableContainer, TableRow
} from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: 1,
      adults: 1,
      children: 0,
    }
  }

  // =================ROOMS===================
  addRooms = () => {
    this.setState({
      rooms: this.state.rooms + 1
    }, () => {
      let {rooms, adults} = this.state;
      if (rooms > adults) {
        adults++
      }
      this.setState({ adults: adults})
    })
  }

  subtractRooms = () => {
    this.setState({
      rooms: this.state.rooms - 1
    }, () => {
      let {rooms, adults, children} = this.state;
      while (((adults + children) > 4 * rooms)) { 
        if (children === 0) {
          adults--
        } else {
          if (children > 0) {
            children--
          }
        }
      }
      this.setState({
        children: children,
        adults: adults
      })
    })
  }

  // =================ADULTS===================
  addAdults = () => {
    this.setState({
      adults: this.state.adults + 1
    }, () => {
      let { rooms, adults, children} = this.state;
      if ( rooms < 5) {
        if ( (adults + children) > 4 * rooms ) {
          rooms++
        }
      }
      this.setState({ rooms: rooms })
    })
    
  }

  subtractAdults = () => {
    this.setState({
      adults: this.state.adults - 1
    }, () => {
      let { rooms, adults, children} = this.state;
      let rem = (adults + children) % (4 * rooms)
      if (rem < rooms) {
        rooms--
      }
      this.setState({ rooms: rooms})
    })
  }

  // =================CHILDREN===================
  addChildren = () => {
    this.setState({
      children: this.state.children + 1
    }, () => {
      let { rooms, adults, children} = this.state;
      if ( rooms < 5) {
        if ( (adults + children) > 4 * rooms ) {
          rooms++
        }
      }
      this.setState({ rooms: rooms })
    })
  }

  subtractChildren = () => {
    this.setState({
      children: this.state.children - 1
    }, () => {
      let { adults, children} = this.state;
      if (((adults + children) % 4 === 0) || ((adults + children) === 4)) {
        this.subtractRooms()
      }
    })
  }



  render() {
    return (
      <div>
        <Container>
          <Card className="card-table">
            <TableContainer>
              <Table aria-label="simple table" className="tableBodyLast">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row"><b>ROOMS</b></TableCell>
                    <TableCell align="right">
                      <Button 
                        className="tableButton"
                        onClick={this.subtractRooms}
                        variant="contained" 
                        disabled={this.state.rooms > 1 ? false : true}
                        size="small" 
                        color="primary"
                      >-</Button>
                        <span className="tableNumber">
                          {this.state.rooms}
                        </span>
                      <Button 
                        className="tableButton"
                        onClick={this.addRooms}
                        variant="contained" 
                        disabled={this.state.rooms < 5 ? false : true}
                        size="small" 
                        color="secondary"
                      >+</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <b>ADULTS</b>
                    </TableCell>
                    <TableCell align="right">
                      <Button 
                        className="tableButton"
                        variant="contained"
                        onClick={this.subtractAdults} 
                        disabled={this.state.adults > 1 ? false : true}
                        size="small" 
                        color="primary"
                      >-</Button>
                        <span className="tableNumber">{this.state.adults}</span>
                      <Button 
                        className="tableButton"
                        variant="contained" 
                        onClick={this.addAdults}
                        disabled={(this.state.adults + this.state.children) < 20 ? false : true}
                        size="small" 
                        color="secondary"
                      >+</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <b>CHILDREN</b>
                    </TableCell>
                    <TableCell align="right">
                      <Button 
                        className="tableButton"
                        variant="contained" 
                        onClick={this.subtractChildren}
                        disabled={this.state.children > 0 ? false : true}
                        size="small" 
                        color="primary"
                      >-</Button>
                        <span className="tableNumber">{this.state.children}</span>
                      <Button 
                        className="tableButton"
                        variant="contained" 
                        onClick={this.addChildren}
                        disabled={(this.state.adults + this.state.children) < 20 ? false : true}
                        size="small" 
                        color="secondary"
                      >+</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;


















// import React, { Component } from 'react';
// import './App.css';

// import {
//   Container, Card, Button,
//   Table, TableBody, TableCell, TableContainer, TableRow
// } from '@material-ui/core';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rooms: 1,
//       adults: 1,
//       children: 0,
//     }
//   }

//   // =================ROOMS===================
//   addRooms = () => {
//     this.setState({
//       rooms: this.state.rooms + 1
//     }, () => {
//       if (this.state.rooms > this.state.adults) {
//         this.addAdults()
//       }
//     })
//   }

//   subtractRooms = () => {
//     this.setState({
//       rooms: this.state.rooms - 1
//     }, () => {
//       let children = this.state.children;
//       let adults = this.state.adults;
//       while (((adults + children) > 4 * this.state.rooms)) { 
//         if ( this.state.children === 0) {
//           adults--
//         } else {
//           children--
//         }
//       }
//       this.setState({
//         children: children,
//         adults: adults
//       })
//     })
//   }

//   // =================ADULTS===================
//   addAdults = () => {
//     this.setState({
//       adults: this.state.adults + 1
//     }, () => {

//       if ((((this.state.adults + this.state.children) % 4 === 1) && ((this.state.adults + this.state.children) > 4))) {
//         if (this.state.rooms < 5) {
//           this.addRooms()
//         }
//       }
//       else {
//         console.log("addAdults", this.state.adults + this.state.children)
//       }
//     })
    
//   }

//   subtractAdults = () => {
//     this.setState({
//       adults: this.state.adults - 1
//     }, () => {
//       console.log("addAdults", this.state.adults + this.state.children)
//       if (((this.state.adults + this.state.children) % 4 === 0) || ((this.state.adults + this.state.children) === 4)) {
//         console.log("addAdults room", this.state.adults + this.state.children)
//         this.subtractRooms()
//       }
//       else {
//         console.log("addAdults", this.state.adults + this.state.children)
//       }
//     })
//   }

//   // =================CHILDREN===================
//   addChildren = () => {
//     this.setState({
//       children: this.state.children + 1
//     }, () => {
//       console.log("addAdults", this.state.adults + this.state.children)
//       if (((this.state.adults + this.state.children) % 4 === 1) && ((this.state.adults + this.state.children) > 4)) {
//         console.log("addAdults room", this.state.adults + this.state.children)
//         this.addRooms()
//       }
//       else {
//         console.log("addAdults", this.state.adults + this.state.children)
//       }
//     })
//   }

//   subtractChildren = () => {
//     this.setState({
//       children: this.state.children - 1
//     }, () => {
//       console.log("addAdults", this.state.adults + this.state.children)
//       if (((this.state.adults + this.state.children) % 4 === 0) || ((this.state.adults + this.state.children) === 4)) {
//         console.log("addAdults room", this.state.adults + this.state.children)
//         this.subtractRooms()
//       }
//       else {
//         console.log("addAdults", this.state.adults + this.state.children)
//       }
//     })
//   }



//   render() {
//     return (
//       <div>
//         <Container>
//           <Card className="card-table">
//             <TableContainer>
//               <Table aria-label="simple table" className="tableBodyLast">
//                 <TableBody>
//                   <TableRow>
//                     <TableCell component="th" scope="row"><b>ROOMS</b></TableCell>
//                     <TableCell align="right">
//                       <Button 
//                         className="tableButton"
//                         onClick={this.subtractRooms}
//                         variant="contained" 
//                         disabled={this.state.rooms > 1 ? false : true}
//                         size="small" 
//                         color="primary"
//                       >-</Button>
//                         <span className="tableNumber">
//                           {this.state.rooms}
//                         </span>
//                       <Button 
//                         className="tableButton"
//                         onClick={this.addRooms}
//                         variant="contained" 
//                         disabled={this.state.rooms < 5 ? false : true}
//                         size="small" 
//                         color="secondary"
//                       >+</Button>
//                     </TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell component="th" scope="row">
//                       <b>ADULTS</b>
//                     </TableCell>
//                     <TableCell align="right">
//                       <Button 
//                         className="tableButton"
//                         variant="contained"
//                         onClick={this.subtractAdults} 
//                         disabled={this.state.adults > 1 ? false : true}
//                         size="small" 
//                         color="primary"
//                       >-</Button>
//                         <span className="tableNumber">{this.state.adults}</span>
//                       <Button 
//                         className="tableButton"
//                         variant="contained" 
//                         onClick={this.addAdults}
//                         disabled={(this.state.adults + this.state.children) < 20 ? false : true}
//                         size="small" 
//                         color="secondary"
//                       >+</Button>
//                     </TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell component="th" scope="row">
//                       <b>CHILDREN</b>
//                     </TableCell>
//                     <TableCell align="right">
//                       <Button 
//                         className="tableButton"
//                         variant="contained" 
//                         onClick={this.subtractChildren}
//                         disabled={this.state.children > 0 ? false : true}
//                         size="small" 
//                         color="primary"
//                       >-</Button>
//                         <span className="tableNumber">{this.state.children}</span>
//                       <Button 
//                         className="tableButton"
//                         variant="contained" 
//                         onClick={this.addChildren}
//                         disabled={(this.state.adults + this.state.children) < 20 ? false : true}
//                         size="small" 
//                         color="secondary"
//                       >+</Button>
//                     </TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Card>
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;
