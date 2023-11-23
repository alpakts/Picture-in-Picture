const  videoElement=document.querySelector("video");
const button=document.querySelector("button");

button.addEventListener("click", async ()=>{
    button.disabled=true
   await  videoElement.requestPictureInPicture();
   button.disabled=false;
})
const selectMediaStream= async ()=>{
    try {
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadeddata=()=>{
            videoElement.play();
        }
    } catch (error) {
        
    }
}
selectMediaStream();