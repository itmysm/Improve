import React from "react";
import ReactDom from 'react-dom';

import Card from "./Card";
import Button from './Button'
import classes from './ErrorModal.module.css'

const Backdrop = props => {
  return (<div className={classes.backdrop} onClick={props.onConfirm}></div>)
}


const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={classes.content}>
        <p>{props.message}</p>
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okey</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = props => {
  return(
  <React.Fragment>
    {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.querySelector('#backdrop-root'))}
    {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.querySelector('#overlay-root'))}
  </React.Fragment>
  )
}



export default ErrorModal;