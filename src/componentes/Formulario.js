import React,{Component} from 'react';

class Formulario extends Component{
    monedaRef = React.createRef();
    criptoRef = React.createRef();
    cotizarMonedas=(e)=>{
        e.preventDefault();

        const info = {
            moneda: this.monedaRef.current.value,
            cripto:this.criptoRef.current.value
        }
        this.props.cotizarMonedas(info);
    }
    render(){
        return(
            <div className="container" id="form-container">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-8  aform">
                        <form onSubmit={this.cotizarMonedas}>
                            <div className="form-group">
                                <label>Moneda:</label>
                                <select className="form-control" ref={this.monedaRef}>
                                    <option value="" disabled defaultValue>Elige tu Moneda</option>
                                    <option value="USD">Dolar Estadounidense</option>
                                    <option value="MXN">Peso Mexicano</option>
                                    <option value="GBP">Libra Esterlina</option>
                                    <option value="EUR">Euro</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Criptomoneda:</label>
                                <select className="form-control" ref={this.criptoRef}>
                                    {Object.keys(this.props.criptos).map(key=>{
                                        return(<option key={key} value={key}> {this.props.criptos[key].name}</option>)
                                    })}
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success">Cotizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>   
        )
    }
}
export default Formulario;