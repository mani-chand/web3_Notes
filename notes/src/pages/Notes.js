import React,{useState} from 'react';
import './../styles/Notes.css'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { Center,Input,Button,Box,Kbd} from '@chakra-ui/react'

function Notes(props) {
    return (
        <Box bg="#C2A979" height="100vh" border="14px">
           <div className="navbar-div">
           <Center className="header-div">
                <Kbd fontSize='35px' className="header">WEB-3 NOTES</Kbd>
            </Center>
                <Button >CONNECT</Button>
           </div>
            <div className="input-div">
            <Input placeholder='Enter your Note' size='lg'
            onChange={(e)=>{setNote(e.target.value)}}
            />
            <Button variant='outline' >SAVE</Button>
            </div>
           <Center>
                <Box 
                overflowY="auto"
                maxHeight="80vh"
                sx={{'::-webkit-scrollbar':{display:'none'}}}>
                   <div className="card card-item">
                    <div className="card-body" >
                        <p className="card-text">Some quick example</p>
                        <h5 className="card-title">Card title</h5>
                    </div>
                    </div>
                </Box>
           </Center>
        </Box>
    );
}

export default Notes;