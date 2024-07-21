import React from 'react';
import { useState } from 'react';

export const Footer = () => {
  const [plus1, setPlus1] = useState('+');
  const [content1, setContent1] = useState('');
  const [plus2, setPlus2] = useState('+');
  const [content2, setContent2] = useState('');
  const [plus3, setPlus3] = useState('+');
  const [content3, setContent3] = useState('');

  const handleClick = (id, text) => {
    if (id === 1) {
      if (plus1 === '+') {
        setPlus1('-');
        setContent1(text);
      } else {
        setPlus1('+');
        setContent1('');
      }
    } else if (id === 2) {
      if (plus2 === '+') {
        setPlus2('-');
        setContent2(text);
      } else {
        setPlus2('+');
        setContent2('');
      }
    } else if (id === 3) {
      if (plus3 === '+') {
        setPlus3('-');
        setContent3(text);
      } else {
        setPlus3('+');
        setContent3('');
      }
    }
  };

  return (
    <>
    <div className='bg-black text-white'>
      <div>
        <h3 className='text-2xl p-5'>Frequently Asked</h3>
      </div>
      <div className='flex flex-col space-y-8 ml-[50%] pb-10'>
        <div>
          <p>
            Why should I have a website?
            <button
              className='pl-3 text-xl'
              onClick={() =>
                handleClick(
                  1,
                  'A website is the first step toward growing an online presence for your business or passion project, whether you’re looking to sell online or create a portfolio. With Squarespace, you can get started with a best-in-class website template for nearly any use case and customize it to fit your brand. Our all-in-one platform also makes it easy to add a blog, an online store, or appointment scheduling to your website and leverage marketing tools to reach your audience.'
                )
              }
            >
              {plus1}
            </button>
          </p>
          {content1 && <p>{content1}</p>}
        </div>

        <div>
          <p>
            What does a Squarespace subscription include?
            <button
              className='pl-3 text-xl'
              onClick={() =>
                handleClick(
                  2,
                  'Squarespace is an all-in-one content management system, or CMS. With a single subscription, you can make a website, host your content, register your own custom domain name, sell products, track your site’s analytics, and much more.'
                )
              }
            >
              {plus2}
            </button>
          </p>
          {content2 && <p>{content2}</p>}
        </div>

        <div>
          <p>
            Is Squarespace right for me?
            <button
              className='pl-3 text-xl'
              onClick={() =>
                handleClick(
                  3,
                  'Everyone has unique needs for their website, so there’s one way to know if Squarespace is right for you: try it!'
                )
              }
            >
              {plus3}
            </button>
          </p>
          {content3 && <p>{content3}</p>}
        </div>
      </div>
    </div>
    <div>
        <p className='bg-gray-950 text-white p-5 text-center'>&copy; All right are reserved by SQUARESPACE</p>
    </div>
    </>
  );
};

export default Footer;
