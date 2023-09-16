import React from "react"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

//
// interface ILogInPopUp {
// onHide:() => void
// }
// const LogInPopUp : React.FC<ILogInPopUp> = ({onHide}:ILogInPopUp) => {
interface ILogInPopUp{
isShowLogin: boolean,
setShowLogin: (arg0: boolean) => void,
}
// const LogInPopUp= (props: ILogInPopUp) => {
const LogInPopUp : React.FC<ILogInPopUp> = ({isShowLogin,setShowLogin}: ILogInPopUp) => {
return(
     <Modal show={isShowLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
{/*           <Button variant="secondary" onClick={handleClose}> */}
{/*             Close */}
{/*           </Button> */}
{/*           <Button variant="primary" onClick={handleClose}> */}
{/*             Save Changes */}
{/*           </Button> */}
        </Modal.Footer>
      </Modal>)}

      export default LogInPopUp;