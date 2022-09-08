import React from 'react';
import './Spinner.css';

const Resultado = ({total, plazo, cantidad}) => (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: $ {(cantidad).toFixed(2)}</p>
        <p>El plazo del préstamo es: {plazo} meses</p>
        <p>Su pago mensual es de: $ {(total/plazo).toFixed(2)}</p>
        <p>El total a pagar: $ {(total).toFixed(2)}</p>
    </div>
);

export default Resultado;