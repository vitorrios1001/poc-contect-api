/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core'

import Pagination from '../../../components/Pagination'
import LoaderBar from '../../../components/LoaderBar'
import PostList from '../components/PostList'

import { useStatePost, useEffectsPost } from '../../../providers/Post'
// import { DateRangePicker } from 'react-dates'
// import { Moment } from 'moment'

const PostContainer = () => {
  const classes = useStyles()
  const { posts, loading, lastPage, currentPage } = useStatePost()
  const { getPosts, onChangePage } = useEffectsPost()
  // const [dates, setDates] = useState<Moment[] | null[]>([null, null])

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className={classes.container}>
      <LoaderBar loading={loading && posts.length > 0} />
      <PostList posts={posts} loading={loading} />
      {posts.length ? (
        <Pagination currentPage={currentPage} lastPage={lastPage} onChangePage={onChangePage} />
      ) : null}

{/* <DateRangePicker
        startDate={dates[0]}
        endDate={dates[1]}
        endDateId=""
        startDateId=""
        onDatesChange={(data) => console.log('data', data)}
        onFocusChange={() => {}}
        focusedInput="endDate"
      /> */}
    </div>
  )
}

export default PostContainer

const useStyles = makeStyles({
  container: {
    padding: '1rem',
  },
})
