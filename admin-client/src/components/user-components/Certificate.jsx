import React from 'react';
import certificateImage from "../../assets/images/Course_Certificate.png"
import { Button, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { useRecoilValue } from 'recoil';
import { userEmailState } from '../../store/selectors/userEmail';

const CanvasImageLoader = ({ imageUrl,extraText }) => {
  const canvasRef = useRef(null);

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
  }, [imageUrl,extraText]);

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
              <canvas ref={canvasRef} width={900} height={600} />
          </div>
          <br />
          <Button variant={"contained"}onClick={handleDownload}><DownloadIcon></DownloadIcon>Download</Button>
          <br /><br />
      </div>
  );
};


const CertificateIssuer = () => {
    const imageUrl = certificateImage;
    const name = 'John'
    const userEmail = useRecoilValue(userEmailState);
    console.log(userEmail);


    return (
        <div>
            <Typography variant='h4'>Certificate Preview</Typography>
            <CanvasImageLoader imageUrl={imageUrl} extraText={`${userEmail} for successfully completing the course`} />
            <Typography>{userEmail}</Typography>
        </div>
    );

}

export default CertificateIssuer;