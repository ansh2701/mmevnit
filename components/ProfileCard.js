import styles from "../styles/ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <aside className={styles.profileCard}>
        <header>
          {/* <!-- here’s the avatar --> */}
          <a target="_blank">
            <img
              src="http://lorempixel.com/150/150/people/"
              className={styles.hoverZoomLink}
            />
          </a>

          {/* <!-- the username --> */}
          <h1>John Doe</h1>

          {/* <!-- and role or location --> */}
          <h2>Better Visuals</h2>
        </header>

        {/* <!-- bit of a bio; who are you? --> */}
        <div className={styles.profileBio}>
          <p>
            It takes monumental improvement for us to change how we live our
            lives. Design is the way we access that improvement.
          </p>
        </div>

        {/* <!-- some social links to show off --> */}
        <ul className={styles.profileSocialLinks}>
          <li>
            <a target="_blank">
              {/* <i className={styles.fa fa-facebook}></i> */}
            </a>
          </li>
          <li>
            <a target="_blank">
              {/* <i className={styles.fa fa-twitter}></i> */}
            </a>
          </li>
          <li>
            <a target="_blank">
              {/* // <i className={styles.fa fa-github}></i> */}
            </a>
          </li>
          <li>
            <a target="_blank">
              {/* <i className={styles.fa fa-behance}></i> */}
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default ProfileCard;
