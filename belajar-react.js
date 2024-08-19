// function Welcome(props) {
//     return `<h1>Halo, ${props.name}</h1>`;
// }
// let vari = {
//     "name":"Pandji"
// }
// console.log(Welcome(vari));

// class Welcome extends React.Component {
//     render() {
//         return <h1>Halo, {this.props.name}</h1>;
//     }
// }

//define variable name
const name = 'Budi';

//panggil variable name
const element = <h1>Halo, {name}</h1>;

ReactDOM.render(
  element,	// render variable "element"
  document.getElementById('root')
);
