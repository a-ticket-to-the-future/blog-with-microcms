
// import { link } from 'fs';
import Link from 'next/link';
import { client }  from '../libs/client';
import {styles} from '../styles/Home.module.scss';


{/* SSG */}
export const getStaticProps = async() => {
  const data = await client.get({endpoint: "blog"});
// console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };


};



export default function Home({blog}) {
  return (
    <div className='style.container' >
      {blog.map((blog) => (  //←ここの()が{}だったため表示されてなかった
        <li key = {blog.id}>
          <Link href= {`blog/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
        </li>
      ))}
      

    </div>
  );
};
