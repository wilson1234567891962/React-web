import React from 'react';
import confLogo from '../images/badge-header.svg';
import '../styles/Badge.css';

class Badge extends React.Component{
   render(){
    const {
        firstName,
        lastName,
        avatarUrl,
        jobTitle,
        twitter
    } = this.props;

       return <div className="Badge">
           <div className="Badge__header">
               <img src={confLogo} alt="Nombre"/>
           </div>
           <div className="Badge__section-name">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/200px-Face-smile.svg.png" alt="Avatar" className="Badge__avatar"/>
               <h1>{firstName} <br/> {lastName}  </h1>
           </div>
           <div className="Badge__section-info">
                <h3>Full stack developer</h3>
                <div>@prueba.com</div>
           </div>
           <div className="Badge__footer">
              # Prueba de concepto de codigo    
           </div>
       </div>;
   }
}

export default Badge;