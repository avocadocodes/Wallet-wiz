
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading.json'; 

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie 
        animationData={loadingAnimation} 
        loop={true} 
        autoplay={true} 
        className="w-1/2 h-1/2"
      />
    </div>
  );
};

export default Loading;
