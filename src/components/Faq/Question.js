import React,{useState} from 'react'
import {makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    container:{
        width: '70vh',
        backgroundColor: '#fff',
        padding: '20px',
        '&:hover': {
            cursor: 'pointer',
            border: '1px solid #ccc'
          },
          margin: '20px 0'
    },
    innerContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}))

export default function Question ({qstns}){
    let classes = useStyles();
    const [show, setShow] = useState(false);
    
    const open = () => {
        setShow(!show);
    }
    return(
        <div className={classes.container}>
            <div className={classes.innerContainer} onClick={open}>
                <Typography variant ='body1' style={{textAlign: 'center', fontWeight: 700}}>
                    What is DeFi?
                </Typography>

                {
                    !show ? <i class="fas fa-plus" style={{color: '#1FB1FD'}}/> :
                    <i class="fas fa-minus" style={{color: '#1FB1FD'}}/>}
            </div>

                {
                    show && (
                    <Typography variant ='body1' style={{padding: '10px 0'}}>
                        Decentralized finance is an experimental form of finance that does not rely on central financial intermediaries such as brokerages, exchanges, or banks to offer traditional financial instruments, and instead utilizes smart contracts on blockchains, the most common being Ethereum.
                    </Typography>)
                }
        </div>
    )
}