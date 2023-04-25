import React from 'react'
const axios = require('axios')
const FormData = require('form-data')
const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4ZGZmM2IwNi0yNTgxLTQ2NTgtOGUwYy1lYTU3M2JiZDZlZWMiLCJlbWFpbCI6Im1rNDY2NDM0OEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDdlYTYzM2JlM2ZhNjQxMDdmZmMiLCJzY29wZWRLZXlTZWNyZXQiOiJmOGRkZDc1NGM1NTk2NmQyMjJmN2RiYmQ0YjMxMjEyNjZjODhjMTQ0YjM4NmM4YmM5YTU4MzBmZDhmZjg1OWFlIiwiaWF0IjoxNjgyMzUwNTkxfQ.ziau0-6r_gc9afPEtUR0pnPg9rd8ZueDLNQC-AxAyBo'

export default function Doc() {

    const [fileImg, setFileImg] = useState(null);


    const sendFileToIPFS = async (e) => {

        e.preventDefault();
        
        const formData = new FormData();
        formData.append('file', fileImg);

        const metadata = JSON.stringify({
            name: 'Pic',
        });
        formData.append('pinataMetadata', metadata);

        const options = JSON.stringify({
            cidVersion: 0,
        })
        formData.append('pinataOptions', options);

        try{
            const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
              maxBodyLength: "Infinity",
              headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                Authorization: JWT
              }
            });

            console.log("Successfully inserted");
            console.log(res.data);
          } catch (error) {
            console.log("Not inserted");
            console.log(error);
          }
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
