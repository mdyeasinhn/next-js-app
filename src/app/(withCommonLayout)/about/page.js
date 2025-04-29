import style from './About.module.css'

export const metadata = {
    title: "About Us",
    description: "description",
  };
const AboutPage = () => {
    return (
        <div className={style.text_color}>
           This is about page..
        </div>
    );
};

export default AboutPage;