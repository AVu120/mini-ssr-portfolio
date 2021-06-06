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
                  {Object.keys(experience).map((key) => {
                    const capitalizedKey =
                      key.charAt(0).toUpperCase() + key.slice(1);
                    return (
                      <p className={styles.list_item_text_row}>
                        <b>{`${capitalizedKey}:`}</b>
                        {` ${experience[key]}`}
                      </p>
                    );
                  })}
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
