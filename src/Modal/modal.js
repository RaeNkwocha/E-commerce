import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    border: "1px solid lightgrey",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(1, 1, 3),
    
  },
}));

export default function TransitionsModal({children,product}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
 


  return (
    <>
        <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       <Fade in={open}>
       <div className={classes.paper}>
           <div style={{background:"lightgrey",height:"50%",borderRadius:"10px"}}>  
           <img style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",padding:"20px"}} src={product.media.source}></img>

           </div>
           <p style={{color:'black'}}>${product.price.formatted}</p>



                  <p style={{color:'black'}}>{product.name}</p>
                   <p className="desc" dangerouslySetInnerHTML={{__html:product.description}}></p>


          </div>
        
      
        </Fade>
      </Modal>
    </>
  );
}