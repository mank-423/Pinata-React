# Pinata IPFS with React
<br>
- Using pinata end points for testing the pining of files.

<img width="468" alt="image" src="https://user-images.githubusercontent.com/96490105/234174039-922527e2-a2d1-4862-8127-63a8d9a5e24e.png">

https://dev.to/fidalmathew/send-files-to-ipfs-using-pinata-api-in-reactjs-3c3
<br>
- Blog used for reference

- A simple UI component
<img width="959" alt="image" src="https://user-images.githubusercontent.com/96490105/234364699-5538e2fa-65fe-4f5f-b8ec-ebf850471ec0.png">

- Alert showing the file is pinned
<img width="474" alt="image" src="https://user-images.githubusercontent.com/96490105/234364762-0879ddbd-7e4a-461a-b4d7-ed23eb3f9691.png">

- Showing the file in Pinata pin manager
<img width="715" alt="image" src="https://user-images.githubusercontent.com/96490105/234364884-4b022bc3-1d13-44f6-bf84-16204ad0186a.png">


- Some errors which I had to deal with:
<br>
- npm install form-data axios
<br>
- Need to import the modules helped me in React as ES6 convention
  <br>
  import axios from "axios"
  <br>
  import FormData from "form-data"
 
<br>
<h3>Two files in components</h3>
 <br>
- both could be used to pin data to Pinata
<br>
- Doc.jsx:Reference from official documentation
<br>
- File.jsx:Reference taken from the blog
