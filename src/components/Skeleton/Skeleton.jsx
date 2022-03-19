import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export function SkeletonText() {
  return <Skeleton variant="text" />;
}
export function SkeletonCircular(props) {
  return <Skeleton variant="circular" width={props.w} height={props.h} />;
}
export function SkeletonRectangular(props) {
  return (
    <Skeleton
      sx={{ borderRadius: '8px' }}
      variant="rectangular"
      width={props.w}
      height={props.h}
    />
  );
}
