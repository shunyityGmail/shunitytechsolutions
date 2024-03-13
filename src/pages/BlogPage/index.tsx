/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLocation } from 'react-router-dom'
import styles from './blogPage.module.scss'
import React from 'react'
import { BLOGS1 } from '../../constants/blog'

const BlogPage = () => {
  const state = useLocation()
  const BLOG = state?.state?.item

  return (
    <section className={styles.blogPage__container}>
      <img src={BLOG.img} alt="img" />
      <h6>{BLOG.date}</h6>

      <div className={styles.blog__box}>
        <div className={styles.table__of__content}>
          <h1>Table of Content</h1>
          {BLOG?.data?.tableOfContent.map((item: any, index: number) => (
            <li key={index}>{item.title}</li>
          ))}
        </div>

        <div className={styles.blog__details}>
          <h1>{BLOG.title}</h1>
          <p>{BLOG.description}</p>

          <div className={styles.blog__description}>
            {BLOGS1?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <h3>{item?.title}</h3>
                <p >{item.desc}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPage
