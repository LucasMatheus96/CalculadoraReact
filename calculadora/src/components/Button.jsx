import React from "react";
import './Button.css'


export default props=>{

    // Declaro o valor padrão do className = button, e em seguida ele vai validar as propriedades que foram passadas ao componente para decidir quais estilos serão aplicados
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : ''; 

    return(
    <button 
    onClick={e=>props.click && props.click(props.label)}
    className={classes}>
        {props.label}

    </button>)
}

// Forma direta, passando javascript puro dentro do corpo do class name usando `` e fazendo as validações das propriedades passadas
// export default props => 
//     <button className={`
//         button
//         ${props.operation ? 'operation' : ''}
//         ${props.double ? 'double': ''}
//         ${props.triple ? 'triple': ''}
//         `}>
//         {props.label}
//     </button>