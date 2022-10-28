'use client'
import parse from "html-react-parser";
import clsx from "clsx";

import * as styles from "../../../../styles/article.module.css"

interface Props {
  content: string;
  className?: string
}

export default function Content({ content, className, ...rest }: Props) {
  return (
    <section itemProp="articleBody" className={clsx(styles.article, className)} {...rest}>
      {parse(content)}
    </section>
  )
}
