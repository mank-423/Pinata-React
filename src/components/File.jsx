import React, { useState } from 'react'
import axios from "axios"
import FormData from "form-data"
// const fs = require('fs')
//const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4ZGZmM2IwNi0yNTgxLTQ2NTgtOGUwYy1lYTU3M2JiZDZlZWMiLCJlbWFpbCI6Im1rNDY2NDM0OEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDdlYTYzM2JlM2ZhNjQxMDdmZmMiLCJzY29wZWRLZXlTZWNyZXQiOiJmOGRkZDc1NGM1NTk2NmQyMjJmN2RiYmQ0YjMxMjEyNjZjODhjMTQ0YjM4NmM4YmM5YTU4MzBmZDhmZjg1OWFlIiwiaWF0IjoxNjgyMzUwNTkxfQ.ziau0-6r_gc9afPEtUR0pnPg9rd8ZueDLNQC-AxAyBo'


export default function File() {

    const [fileImg, setFileImg] = useState(null);
    
    const sendFileToIPFS = async (e) => {

        e.preventDefault();

        if (fileImg) {
            try {
                
                //Fetch the file from the form
                const formData = new FormData();
                formData.append("file", fileImg);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        //Create a .env file to put the API key and Secret
                        'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });

                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                console.log(ImgHash);
                //Take a look at your Pinata Pinned section, you will see a new file added to you list.   
                alert("Done");


            } catch (error) {
                alert("Error");
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }


    const pinByCID = () => {
        
    }

    return (
        <div>
            <form onSubmit={sendFileToIPFS}>
                <input type="file" onChange={(e) => setFileImg(e.target.files[0])} required />
                <button type='submit' >Mint NFT</button>
            </form>
        </div>
    )
}
