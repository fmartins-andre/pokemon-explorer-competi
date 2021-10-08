import { FunctionComponent } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.css'

const Pagination: FunctionComponent<{currentPage?:number, pageCount: number, onPageChange: any}> = props => {
  return (
    <div className={styles.container}>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={styles.break}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={props.onPageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        previousClassName={styles.arrows}
        nextClassName={styles.arrows}
        initialPage={props.currentPage ?? 0}
      />
    </div>
  )
}

export default Pagination
