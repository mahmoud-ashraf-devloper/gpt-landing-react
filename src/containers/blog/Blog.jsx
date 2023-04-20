import React from 'react'
import './blog.css'
import { Article } from '../../components'

import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

function Blog() {
  const articles = [
    {
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      date: 'Sep 26, 2021',
      image: blog01
    },
    {
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      date: 'Sep 26, 2021',
      image: blog02
    },
    {
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      date: 'Sep 26, 2021',
      image: blog03
    },
    {
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      date: 'Sep 26, 2021',
      image: blog04
    },
    {
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
      date: 'Sep 26, 2021',
      image: blog05
    },
  ];
  return (
    <div className='gpt4__blog section__margin' id='Blog'>
      <h1 className='gradient__text'>A lot is happening,
        We are blogging about it.</h1>

      <div className='gpt4__blog-container'>
        <div className='gpt4__blog-container_left'>
          <Article title={articles[0].title} date={articles[0].date} image={articles[0].image} />
        </div>
        <div className='gpt4__blog-container_right'>
          {
            articles.map((item, index) => {
              if (index >= 1) {
                return <Article key={index} title={item.title} date={item.date} image={item.image} />;
              }
              return false;
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Blog