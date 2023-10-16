import Image from 'next/image'
import styles from './page.module.css'
import landing from '../public/landingPageImage.jpg'

const successStories = [
  {
    id: 1,
    title: "Software Engineer at XYZ Corp",
    name : 'pooitha',
    designation : 'Love',
    description: "I interviewed with XYZ Corp, and thanks to thorough preparation and strong problem-solving skills, I received an offer for the position of a Software Engineer. The interview process was challenging, but I stayed focused and maintained a positive attitude throughout the interviews.",
  },
  {
    id: 2,
    title: "Marketing Manager at ABC Inc",
    name:' Surya',
    designation: 'Data scientist',
    description: "I'm now the Marketing Manager at ABC Inc. My interview experience with ABC Inc was incredible. I showcased my creativity and analytical skills during the interviews, and my passion for marketing was evident. It was a great match for both me and the company.",
  },
  {
    id: 3,
    title: "Data Scientist at DataTech Solutions",
    name : 'Aditya',
    designation : 'Software developer',
    description: "My journey as a Data Scientist at DataTech Solutions began with a series of technical interviews. I demonstrated my expertise in machine learning and data analysis. I'm grateful for the opportunity to work on cutting-edge projects and contribute to the success of the company.",
  },
];

export default function Home() {
  const getColor = (index : number)=>{
    const colors = ['color1','color2','color3'];
    return colors[index % colors.length];
  }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.firstHalf}><h2>Welcome to Stepping stories</h2>
        <h3>Explore interviews , online assesments , contests , technology , engineering , research papers and many more!</h3>
        </div>
        <div className={styles.secondHalf}>
          <Image
            src={landing}
            alt='image of something'
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
          <h3>Our top stories!</h3>
          <div className={styles.stories}>
            {successStories.map((story,index)=>(
              <div key = {index} className={`${styles[`story-${getColor(index)}`]}`}><div className={styles.data}>
                <h4>{story.title}</h4><h5 className={styles.description}>{story.description}</h5>
              </div>
              <div className={styles.details}><h5>{story.name}</h5>
              
              <h6>{story.designation}</h6></div></div>
            ))}
          </div>
        </div>
    </main>
  )
}
