import React,{Component} from 'react';

class Resultado extends Component{
    render(){
        const moneda = this.props.monedaCotizada;
        const cripto = this.props.cripto;

        if(moneda==='')return null;
        const data = this.props.cotizacion[moneda];        
        return(
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-10 col-lg-8 " id="resultado">
                        <div className="text-center">
                            <h2>Resumen</h2>
                            <p>El precio del {cripto} en {moneda} es de <span className="font-weight-bold">{data.price}</span> </p>
                            <p>Porcentaje Ultima hora <span className="font-weight-bold">{data.percent_change_1h}</span> </p>
                            <p>Porcentaje Ultimas 24h <span className="font-weight-bold">{data.percent_change_24h}</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resultado; 