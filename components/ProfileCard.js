import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const ProfileCard = ({ data }) => {
  return (
    <div>
      <div className="card">
        <div className="cardImg">
          {/* <img
            src="https://i.postimg.cc/C1tYZmSC/62900943-avatar-man-cartoon-hacker-digital-criminal-wearing-gray-hoodie-and-black-glasses-using-a-la.jpg"
            alt="profile"
          /> */}
          <div className="img">
            <Image
              src={data.picture.url}
              alt="proff"
              // height={180}
              // width={180}
              layout="fill"
            />
          </div>
        </div>
        <div className="desc">
          <h6 className="primary-text">{data.name}</h6>
          <h6 className="secondary-text">{data.tag}</h6>
        </div>
        <div className="icons">
          <Link href={data.link1 || "#"}>
            <a>
              <FaLinkedin className="ic" />
            </a>
          </Link>
          <Link href={data.link2 || "#"}>
            <a>
              <FaInstagram className="ic" />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .card {
          height: 300px;
          width: 250px;
          background-color: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          /*   position: absolute; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: auto;

          border-radius: 8px;
          box-shadow: 20px 20px 22px rgba(0, 0, 0, 0.2);
          font-family: "Poppins", sans-serif;
        }
        .cardImg {
          height: 200px;
          width: 200px;
          background-color: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);

          margin: 30px auto 20px auto;

          border-radius: 50%;
        }
        .cardImg .img {
          position: relative;
          height: 180px;
          width: 180px;
          border-radius: 50px;
          margin-left: 5%;
          margin-top: 5%;
        }
        .img img {
          border-radius: 50%;
        }
        .desc {
          width: 100%;
          text-align: center;
          /*   position: absolute; */
          /*   top: 160px; */
        }
        .primary-text {
          color: #d5d5d5;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.7px;
          margin: 5px 0;
        }
        .secondary-text {
          color: #c0c0c0;
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 1px;
          margin: 5px 0;
        }

        .icons {
          margin-top: 5px;
        }

        .icons .ic {
          color: rgb(15, 15, 15);
          display: inline-block;
          margin-right: 5px;
          font-size: 1.5em;
        }

        .icons .ic:hover {
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
