import Image from "next/image";
import nextImg from '../../assets/next-js-logo.png'

const GelleryPage = () => {

    return (
        <div className="text-center">

            <h2>Normal image</h2>
            <img className=""
                width={500}
                height={500}
                src="https://ih1.redbubble.net/image.5712510284.1023/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alr="normalImage"
            ></img>




            <h2>Next image</h2>
            <Image src="https://ih1.redbubble.net/image.5712510284.1023/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alr="normalImage" alr="nextImage" width={500} height={300} />


            <h2>local image</h2>
            <Image src={nextImg} alr="nextImage" width={500} height={300} />
        </div>

    );
};

export default GelleryPage;
