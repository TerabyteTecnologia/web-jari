'use client'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="d-flex-column g-10 over-auto">
        <Skeleton width="100%" height="230px" />
        <Skeleton width="100%" height="230px" />
        <Skeleton width="100%" height="230px" />
      </div>
    </>
  )
}
