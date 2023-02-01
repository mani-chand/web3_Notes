import React,{useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './../styles/Notes.css'
import { useContract, useMetamask,useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { Center,Input,Button,Box,Kbd} from '@chakra-ui/react'
const ethers = require("ethers")
function Notes(props) {
  const { contract } = useContract("0xA5990cE296b3F0864673bE54653808769Ed213E6");
  const { mutateAsync: createNote } = useContractWrite(contract, "createNote")
  const { data } = useContractRead(contract, "getNotes")
  const fetchNotes= async()=>{
    const Notes = await contract.call('getNotes');
    return Notes
  }
  const connect = useMetamask();
  const [_note,setNote] = useState("")
  useEffect(()=>{
    fetchNotes().then(res=>{
        // eslint-disable-next-line
        data = res
      }).catch(err=>{
        console.log(err)
      })
    },[])
       const connectToMetaMask = async()=>{
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send('eth_requestAccounts',[])
            const signer = provider.getSigner()
            return signer
        }else{
            alert("Metamask wallet is not found.Please install metamask")
        }}
    const handleSubmit = async () => {
        try {
          const signer = connectToMetaMask()
          //const sdk = ThirdwebSDK.fromSigner(signer, "Goerli");
          //sdk.wallet.connect(signer);
          const data = await createNote([ _note ]);
          console.info("contract call successs", data);
          setNote("")
          return signer;
        } catch (err) {
          console.error("contract call failure", err);
        }
      }
    return (
        <Box bg="#C2A979" height="100vh" border="14px">
           <div className="navbar-div">
           <Center className="header-div">
                <Kbd fontSize='35px' className="header">WEB-3 NOTES</Kbd>
            </Center>
                <Button onClick={connect}>CONNECT</Button>
           </div>
            <div className="input-div">
            <Input placeholder='Enter your Note' value={_note} size='lg'
            onChange={(e)=>{setNote(e.target.value)}}
            />
            <Button variant='outline' onClick={handleSubmit}>SAVE</Button>
            </div>
           <Center>
                <Box 
                overflowY="auto"
                maxHeight="75vh"
                sx={{'::-webkit-scrollbar':{display:'none'}}}>
                   <div>
                    {
                      data?.map(element => {
                        return (
                          <div key={uuidv4()} className="card card-item">
                          <div className="card-body" >
                              <p className="card-text">{element[1]}</p>
                              <h5 className="card-title">{element[0]}</h5>
                          </div>
                          </div>
                        )
                      })
                    }
                   </div>
                </Box>
           </Center>
        </Box>
    );
}

export default Notes;