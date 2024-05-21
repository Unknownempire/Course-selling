import React from 'react';
import certificateImage from "../../assets/images/Course_Certificate.png"
import { Button, Typography } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { useRecoilValue } from 'recoil';
import { userFullNameState } from '../../store/selectors/userFullName';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { courseTitle } from '../../store/selectors/course';
import axios from 'axios';
import { BASE_URL } from '../../config';

const CanvasImageLoader = ({ imageUrl,extraText }) => {
  const canvasRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.onload = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(extraText, 440, 332);
    };
    image.src = imageUrl;
  }, [imageUrl, extraText]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'Certificate.png';
    link.href = dataUrl;
    link.click();
  };
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <div>
        <canvas ref={canvasRef} style={{
          borderRadius: '5px',
          border: '2px solid #1565c0',
        }} width={900} height={600} />
      </div>
      <br />
      <Button variant={"contained"} onClick={() => {
        handleDownload()
        handleClick()
      }}>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Downloaded
          </Alert>
        </Snackbar>
        <DownloadIcon></DownloadIcon>Download Certificate</Button>
      <br /><br />
    </div>
  );
};


const CertificateIssuer = () => {
  const imageUrl = certificateImage;
  const userFullName = useRecoilValue(userFullNameState);
  const [title,setTitle]= useState('');
  console.log('title = ', title);
  const courseId = localStorage.getItem('courseid')

  const init = async() => {
    const response = await axios.get(`${BASE_URL}/admin/course/${courseId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    const data = response.data;
    console.log('data = ',data.course);
    setTitle(data.course.title)
  }

  useEffect(() => {
    init();
  },[]);




  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography variant='h4'>Certificate Preview</Typography>
      <br />
      <CanvasImageLoader imageUrl={imageUrl} extraText={`${userFullName} for successfully completing the "${title}" course`} />
    </div>
  );

}

export default CertificateIssuer;