import { useEffect } from 'react'

const DEFAULT_TITLE = 'Context-Api POC'

const usePage = (title: string, overWriteTitle?: boolean) => {
  useEffect(() => {
    document.title = overWriteTitle ? title : `${title} - ${DEFAULT_TITLE}`
  }, [title, overWriteTitle])
}

export default usePage
