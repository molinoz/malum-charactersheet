import React,{useState} from 'react';

let non = "https://unpkg.com/pixelarticons@1.8.0/svg/avatar.svg";
let img = "";

export default function Avatar() {
    const [isHovered, setIsHovered] = useState(false);
    const [imageSrc, setImageSrc] = useState(img?img:non);
    
    const handleHover = () => {
        setIsHovered(true);
    };
    
    const handleHoverOut = () => {
        setIsHovered(false);
    };
    
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = () => {
        setImageSrc(reader.result);
        };
        console.log(typeof imageSrc)
        
        if (file) {
        reader.readAsDataURL(file);
        }
    };

    return (
        <div 
        className="profile-picture-container" 
        onMouseEnter={handleHover} 
        onMouseLeave={handleHoverOut}
        >
        <img 
            src={imageSrc} 
            alt="Profile Picture" 
            className={isHovered ? 'dimmed' : ''}
            style={{width: "121px", border: "solid black 2px", marginRight:"10px"}}
        />
        {isHovered && (
            <div className="edit-icon">
            <label htmlFor="image-upload">
                <input 
                type="file" 
                id="image-upload" 
                accept="image/*" 
                style={{ display: 'none' }}
                onChange={handleImageUpload}
                />
                <span>Edit</span>
            </label>
            </div>
        )}
        </div>
    );
}