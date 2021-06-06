export const getStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:5000/experiences");
    const data = await response.json();
    return {
      props: {
        experiences: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {props: {error: error.toString()}};
  }
};
import Head from "next/head";
import styles from "./Experiences.module.css";

interface IExperience {
  company: string;
  role: string;
  when: string;
}
interface IExperiences {
  experiences?: IExperience[];
  error?: string;
}

const Experiences = ({experiences, error}: IExperiences) => {
  return (
    <>
      <Head>
        <title>Mini Portfolio | Experiences</title>
      </Head>
      <div>
        <h1 className={styles.title}>Experiences</h1>
        {experiences ? (
          <ul>
            {experiences.map((experience) => (
              <li
                key={`experience-${experience.company}-${experience.role}-${experience.when}`}
                className={styles.list_item}
              >
                <div>
                  <p>
                    <b>Company:</b>
                    {` ${experience.company}`}
                  </p>
                  <p>
                    <b>Name:</b>
                    {` ${experience.role}`}
                  </p>
                  <p>
                    <b>When:</b>
                    {` ${experience.when}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h3>{error}</h3>
        )}
      </div>
    </>
  );
};

export default Experiences;
