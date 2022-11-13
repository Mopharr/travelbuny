import Head from 'next/head'
import Link from 'next/link';
import { BsFillShareFill, BsFillBookmarkFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Nav from '../components/Nav'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={style.main}>
      <Head>
        <title>TravelBunny</title>
        <meta name="description" content="TravelBunny" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={style.main}>
        <Nav />

        <div className={style.home}>
          <div className={style.explore}>
            <p>Explore Cities</p>

            <Link href="/">See All</Link>
          </div>

          <div className={style.city}>
            <div className={style.cityCap}>
              <img src="/ik.png" alt="nk" />
              <AiOutlineHeart className={style.icon} />
              <div className={style.lText}>
                <h2>Ikogosi Warm Spring Resort</h2>
              </div>
              <div className={style.location}>
                <GrLocation className={style.Icon} />
                <span>Ekiti State, Nigeria</span>
              </div>
              <div className={style.location}>
                <AiFillStar className={style.star} />
                <span>4.8</span> |<span className={style.link}>67 Reviews</span>
              </div>
            </div>
            <div className={style.cityCap}>
              <img src="/nk.png" alt="nk" />
              <AiOutlineHeart className={style.icon} />
              <div className={style.lText}>
                <h2>Ikogosi Warm Spring Resort</h2>
              </div>
              <div className={style.location}>
                <GrLocation className={style.Icon} />
                <span>Ekiti State, Nigeria</span>
              </div>
              <div className={style.location}>
                <AiFillStar className={style.star} />
                <span>4.8</span> |<span className={style.link}>67 Reviews</span>
              </div>
            </div>
            <div className={style.cityCap}>
              <img src="/nk.png" alt="nk" />
              <AiOutlineHeart className={style.icon} />
              <div className={style.lText}>
                <h2>Ikogosi Warm Spring Resort</h2>
              </div>
              <div className={style.location}>
                <GrLocation className={style.Icon} />
                <span>Ekiti State, Nigeria</span>
              </div>
              <div className={style.location}>
                <AiFillStar className={style.star} />
                <span>4.8</span> |<span className={style.link}>67 Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.home}>
          <div className={style.explore}>
            <p>Group Tires</p>

            <Link href="/">See All</Link>
          </div>

          <div className={style.city}>
            <div className={style.citCap}>
              <img src="/ik.png" alt="nk" />
              <AiOutlineHeart className={style.icon} />
              <div>
                <div className={style.lText}>
                  <h2>Ikogosi Warm Spring Resort</h2>
                </div>
                <div className={style.location}>
                  <GrLocation className={style.Icon} />
                  <span>Ekiti State, Nigeria</span>
                </div>
                <div className={style.location}>
                  <AiFillStar className={style.star} />
                  <span>4.8</span> |
                  <span className={style.link}>67 Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
