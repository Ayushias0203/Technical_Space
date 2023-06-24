import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import Modal from "react-responsive-modal";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import {
  AssignmentTurnedInOutlined,
  Link,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@mui/icons-material/";
import './header.css'
 import CloseIcon from "@mui/icons-material/Close";
 import {  Button, Input } from "@mui/material";
 import "react-responsive-modal/styles.css"
 import axios from "axios";

 
function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const Close = (<CloseIcon/>)

  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const questionName = input;
  //const user = useSelector(selectUser);

  

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        // user: user,
      };
      await axios
        .post("http://localhost:8000/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/dash";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  return (
    <div className="qHeader">
    <div className="qHeader-content">
      <div className="qHeader__logo">
        <img
          src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
          alt="logo"
        />
      </div>
      <div className="qHeader__icons">
        <div className="qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
       
        <div className="qHeader__icon">
          <PeopleAltOutlined />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlined />
        </div>
      </div>
      <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
         
            <Avatar/>
         
         
          
          <Button onClick={()=> setIsModalOpen(true)}>Add Question</Button>
      <Modal
      open={isModalOpen}
      closeIcon={Close}
      onClose ={() => setIsModalOpen(false)}
      closeOnEsc
      center
      onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          styles={{
              overlay: {
                height: "auto",
              },
            }}
         >
         <div className='modal__title'>
         <h5>Add Question</h5>
              <h5>Share Link</h5>
         </div>
         <div className="modal__info">
              <Avatar
                className="avatar"
                src={
                  // user.photo
                  //    ? user.photo
                  //   : 
                  "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                }
              />
              {/* <p>{user.disPlayName ? user.disPlayName : user.email} asked</p> */}
               <div className="modal__scope">
                <PeopleAltOutlined /> 
                <p>Public</p>
                <ExpandMore />
              </div> 
            </div>
            <div className="modal__Field">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div 
                 style={{
                  display: "flex",
                  flexDirection: "column",
                }}
               className="modal__fieldLink">
                {/* <Link /> */}
                <input
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  type="text"
                  placeholder="Optional: inclue a image link that gives context"
                  style={{
                    margin: "5px 0",
                    padding: "10px",
                    
                  }}
                />
                {
                  inputUrl !== "" &&  (<img
                   style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                     src={inputUrl} alt = 'displayimage'/>  
               )}
               
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
               <button onClick={handleSubmit} type="sumbit"  className="add">
                Add Question
              </button> 
            </div>
      </Modal>
      </div>
    </div>
  </div>
  )
}

export default Header

