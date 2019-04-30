import React,{Component} from 'react';
import Header from './Header';
import Fomulario from './Formulario';
import Resultado from './Resultado';
import Cargando from './Cargando';
import axios from 'axios';


class App extends Component{
  state={
    criptos:{},
    cotizacion:{},
    monedaCotizada:'',
    cripto:'',
    cargando:false
  }

  componentDidMount(){
    this.obtenerCriptos();
  }

  obtenerCriptos=async()=>{

    const url=`https://api.coinmarketcap.com/v2/ticker/`;
    
    await axios.get(url)
        .then(respuesta=>this.setState({criptos: respuesta.data.data}))
        .catch(error=>console.log(error))
  }
  cotizarMonedas=async par=>{
    const {moneda,cripto} = par
    const url = `https://api.coinmarketcap.com/v2/ticker/${cripto}/?convert=${moneda}`;
    
    await axios.get(url)
        .then(respuesta=>{
          this.setState({cargando:true});
          setTimeout(()=>{
          this.setState({
            cotizacion: respuesta.data.data.quotes,
            monedaCotizada:moneda,
            cripto: respuesta.data.data.name,
            cargando:false
          })
        },3000)})
        .catch(error=>console.log(error))
 
  }


  render(){
    const cargando = this.state.cargando;
    let resultado;
    
    if(cargando)resultado= <Cargando/>
    else resultado = <Resultado
                      cotizacion={this.state.cotizacion}
                      monedaCotizada={this.state.monedaCotizada}
                      cripto={this.state.cripto}
                    />
    return (
      <div className="App">
          <Header/>
          <Fomulario
            criptos={this.state.criptos}
            cotizarMonedas={this.cotizarMonedas}
          />
          {resultado}
      </div>
    );
  }
}

export default App;
